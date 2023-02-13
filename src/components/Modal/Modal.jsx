import { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import css from './Modal.module.scss';

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener(`keydown`, this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener(`keydown`, this.handleKeyDown);
    }

    handleBackdropClick = (e) => {
        const { target, currentTarget } = e;
        e.stopPropagation();
        if (target === currentTarget) {
            this.props.onClose();
        }
    };

    handleKeyDown = (e) => {
        if (e.code === `Escape`) {
            this.props.onClose();
        }
    };
    render() {
        const { children } = this.props;
        return createPortal (
            <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div className={css.modal}>
                    { children }
                </div>
            </div>, document.querySelector(`#modal-root`)
        );
    }
};

Modal.propTypes = {
    children: PropTypes.node.isRequired
};