import { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './imageGalleryItem';

class ImageGallery extends Component {
  static defaultProps = {
    galleryItems: [],
    pages: 0,
  };

  static propTypes = {
    galleryItems: PropTypes.array,
    pages: PropTypes.number,
  };

  render() {
    return (
      <ul className="image-gallery" onClick={this.props.handleImageClick}>
        {this.props.galleryItems.map(image => (
          <GalleryItem
            id={image.id}
            key={image.id}
            webformatURL={image.webformatURL}
            alt={image.tags}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
