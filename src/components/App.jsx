import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import css from './App.module.scss';

export default class App extends Component {
  state = {
    searchValue: "",
  };
  handleFormSubmit = (searchValue) => {
    this.setState({ searchValue });
  };

  render() {
  return (
    <div className={css.app}
    >
      <Searchbar onSubmit={this.handleFormSubmit} />
      {this.state.searchValue !== "" && <ImageGallery namePic={this.state.searchValue} />}
    </div>
    );
    }
};
