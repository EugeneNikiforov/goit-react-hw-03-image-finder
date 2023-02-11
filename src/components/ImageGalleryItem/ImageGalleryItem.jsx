import { Component } from 'react';
import PropTypes from "prop-types";
import Modal from '../Modal/Modal';
import css from './ImageGalleryItem.module.scss';


export default class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };
    runModal = () => {
        this.setState((prevState) => {
            return { showModal: !prevState.showModal };
        });
    };
    render() {
        const { bigPhoto, smallPhoto, tag } = this.props;
        return (
            <div className={css.imageGalleryItem}>
                <img className={css.imageGalleryItem_image} onClick={this.runModal} src={smallPhoto} alt={tag} />
                {this.state.showModal && (
                    <Modal onClose={this.runModal}>
                        <img src={bigPhoto} alt={tag} />
                    </Modal>
                )}
            </div>
        );
    }
};

ImageGalleryItem.propTypes = {
    bigPhoto: PropTypes.string.isRequired,
    smallPhoto: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
};
