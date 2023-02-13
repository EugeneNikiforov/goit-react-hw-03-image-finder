import React from 'react';
import PropTypes from "prop-types";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import { Audio } from 'react-loader-spinner';
import css from './ImageGallery.module.scss';

export default function ImageGallery({ images, loading, loadMoreImages }) {
       
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
                    <div className={css.imageGallerySpinner}>
                        {loading && <Audio
                            height="80"
                            width="80"
                            radius="9"
                            color="blue"
                            ariaLabel="loading"
                            // wrapperStyle
                            // wrapperClass
                        />}
                    </div>
                </div>
                {images && images.length !== 0 && !loading && (<Button click={loadMoreImages} />)}
            </div>
        )
};

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired
};
