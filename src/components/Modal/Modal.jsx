import { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import css from './Modal.module.scss';

const modalRoot = document.querySelector(`#modal-root`);

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener(`keydown`, this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener(`keydown`, this.handleKeyDown);
    }

    handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    };

    handleKeyDown = (e) => {
        if (e.code === `Escape`) {
            this.props.onClose();
        }
    };
    render() {
        const { photo, tag } = this.props;
        return createPortal (
            <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div className={css.modal}>
                    <img src={photo} alt={tag} />
                </div>
            </div>, modalRoot
        );
    }
};

Modal.propTypes = {
    photo: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
};