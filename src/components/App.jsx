import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import css from './App.module.scss';

export default class App extends Component {
  state = {
    searchValue: "",
    images: [],
    loading: false,
    page: 1
  };
  handleFormSubmit = (searchValue) => {
    this.setState({ searchValue, page: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page || prevState.searchValue !== this.state.searchValue) {
            this.getImageFetch();
            return;
        }
  };

  loadMoreImages = () => {
        this.setState((prev) => {
            return {
                page: prev.page + 1,
            };
        });
    };
  
  getImageFetch = () => {
        const namePic = this.state.searchValue;
        const { page } = this.state;
        const storageKey = `32864806-51f72b6a703d7e1693286dbfa`;
    this.setState({ loading: true });
        fetch(
            `https://pixabay.com/api?q=${namePic}&page=${page}&key=${storageKey}&image_type=photo&orientation=horizontal&per_page=12`
        ).then((response) => {
            if (response.ok) {
              return response.json().then(({ hits }) => {
                this.setState(({ images }) => ({
                        images: [...images, ...hits],}));
            if (hits.length === 0) {
                alert(`Images are over!`);
            }
        }).then(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
        }).catch(error => (console.log(error))).finally(() => this.setState({ loading: false }));
        }
       
        });
    };

  render() {
  return (
    <div className={css.app}
    >
      <Searchbar onSubmit={this.handleFormSubmit} />
      {this.state.searchValue !== "" && <ImageGallery loadMoreImages={this.loadMoreImages} images={this.state.images} loading={this.state.loading} page={this.state.page} />}
    </div>
    );
    }
};
