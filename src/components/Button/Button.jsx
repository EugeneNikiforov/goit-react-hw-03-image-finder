import React from 'react';
import PropTypes from "prop-types";
import css from './Button.module.scss';

export default function Button({ click }) {
    return (
        <button type="button" claccName={css.button} onClick={click}>
            Load more
        </button>
    )
};

Button.propTypes = {
  click: PropTypes.func.isRequired
};
