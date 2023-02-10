import { Component } from 'react';
import PropTypes from "prop-types";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import { Audio } from 'react-loader-spinner';
import css from './ImageGallery.module.scss';

export default class ImageGallery extends Component {
    state = {
    images: null,
    loading: false,
    page: 1,
    };
    
    loadMoreImages = () => {
        this.setState((prev) => {
            return {
                page: prev.page + 1,
            };
        });
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.setState({ loading: true });
            this.getImageFetch();
            return;
        }
        if (prevProps.imgName !== this.props.imgName) {
            if (prevProps.imgName) {
                this.setState({ images: null });
            }
            this.setState({ loading: true });
            this.setState({ page: 1 });
            this.getImageFetch();
        }
        if (this.state.images && this.state.images.length === 0) {
            alert("There is no result for your reqest!");
            this.setState({ images: null });
        }
    };

    getImageFetch = () => {
        const { namePic } = this.props;
        const { page } = this.state;
        const storageKey = `32864806-51f72b6a703d7e1693286dbfa`;
        fetch(
            `https://pixabay.com/api/?q=${namePic}&page=${page}&key=${storageKey}&image_type=photo&orientation=horizontal&per_page=12`
        ).then((response) => {
            if (response.ok) {
                return response.json().then(({ hits }) => {
                    this.state.images
                    ? this.setState(({ images }) => ({
                        images: [...images, ...hits],}))
                    : this.setState({ images: hits });
            if (hits.length === 0) {
                alert(`Images are over!`);
            }
        }).then(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
        }).finally(() => this.setState({ loading: false }));
        }
        return Promise.reject(new Error("Nothing found"));
        });
    };

    render() {
        const { images, loading } = this.state;
        return (
            <div>
                <div className={css.imageGallery}> 
                    <div className={css.imageGalleryList}>
                        {images && images.length !== 0 ? images.map(({ id, webformatURL, largeImageURL, tags }) => {
                            return (
                                <ImageGalleryItem
                                    key={id}
                                    smallPhoto={webformatURL}
                                    bigPhoto={largeImageURL}
                                    tag={tags}
                                />
                            );
                        }) : ""}
                    </div>
                    {loading && <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />}
                </div>
                {images && images.length !== 0 && !loading && (<Button click={this.loadMoreImages} />)}
            </div>
        )
    }
};

ImageGallery.propTypes = {
    namePic: PropTypes.string.isRequired
};
