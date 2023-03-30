import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import ImageGallery from './ImageGallery/imageGallery';
import SearchBar from './ImageGallery/searchbar';

const KEY = '33093349-e102244caac5b98b45f0118bc';

class App extends Component {
  state = {
    galleryItems: [],
    query: '',
    currentPage: 1,
    perPage: 12,
  };

  handleSubmit = async event => {
    event.preventDefault();
    const page = 1;
    const input = event.target[1]['value'];
    const URL = `https://pixabay.com/api/?q=${input}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page='12'`;
    const response = await axios.get(URL);
    const pictures = response.data.hits;
    console.log(pictures);
    this.setState({
      galleryItems: pictures,
      query: input,
      currentPage: page,
    });
  };

  render() {
    const { galleryItems } = this.state;

    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit} />
        <ImageGallery galleryItems={galleryItems} />
      </>
    );
  }
}

export default App;
