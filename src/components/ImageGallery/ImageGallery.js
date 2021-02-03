import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";
import { Component } from "react";
import ImageAPI from "../../services/API"

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {

  state = {
    images: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchQuery;
    const nextSearch = this.props.searchQuery;
  
    if (prevSearch !== nextSearch) {
      this.setState({ status: Status.PENDING });

      setTimeout(() => {
        ImageAPI
          .fetchImage(nextSearch)
          .then(images => this.setState({ images, status: Status.RESOLVED }))
          .catch(error => this.setState({ error, status: Status.REJECTED }));
      }, 2000);
    }
  }

  render() {

    const { images, error, status } = this.state;
    const { searchQuery } = this.props;

    if (status === 'idle') {
      return <div>Введите название изображения.</div>;
    }

    if (status === 'pending') {
      return <span>Loading...</span> ;
    }

    if (status === 'rejected') {
      return alert('Ошибка в поиске изображения') ;
    }

    if (status === 'resolved') {
      return (
      <ul className={styles.ImageGallery}>
        {images.hits
          .map((image)=>(<ImageGalleryItem
          id={image.id}
          source={image.webformatURL}
          alte={image.tags}
         />))
        }
                
      </ul>
    );
    }
  }
    
  }


export default ImageGallery;
