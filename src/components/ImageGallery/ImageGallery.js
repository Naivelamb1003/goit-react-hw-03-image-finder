import PropTypes from "prop-types";
import ImageGalleryItem from "../Modal/Modal";
 import styles from './ImageGallery.module.css';

const ImageGallery = ({  }) => {
    return (
        <ul className={styles.ImageGallery}>
          <ImageGalleryItem/>
        </ul>
    );
  };
  
  ImageGallery.propTypes = {
    onSubmit: PropTypes.func,
    
  };
  
  export default ImageGallery;