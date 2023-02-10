import { Component } from "react";
import PropTypes from "prop-types";
import { ImSearch } from "react-icons/im";
import css from './Searchbar.module.scss';

export default class Searchbar extends Component {
    state = {
        images: "",
    };
    handleNameChange = (e) => {
        this.setState({ images: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.images.trim() === "") {
            alert("Введите имя");
            return;
        }
        this.props.onSubmit(this.state.images);
        this.setState({ images: "" });
    };

    render() {
        return (
            <div className={css.searchbar}>
                <form className={css.searchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.searchForm_button}>
                        <ImSearch className={css.searchForm_button_label} />
                    </button>
                    <input
                        className={css.searchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.images}
                        onChange={this.handleNameChange}
                    />
                </form>
            </div>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
};