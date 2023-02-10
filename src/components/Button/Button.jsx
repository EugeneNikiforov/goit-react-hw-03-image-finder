import React from 'react';
import PropTypes from "prop-types";
import css from './Button.module.scss';

export default function Button({ click }) {
    return (
        <div className={css.buttonPlace}>
            <button type="button" className={css.button} onClick={click}>
                Load more
            </button>
        </div>
    )
};

Button.propTypes = {
  click: PropTypes.func.isRequired
};
