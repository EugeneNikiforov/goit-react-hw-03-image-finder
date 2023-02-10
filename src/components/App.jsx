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
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Searchbar onSubmit={this.handleFormSubmit} />
      <ImageGallery namePic={this.state.searchValue} />
    </div>
    );
    }
};
