import PropTypes from "prop-types";
import styles from './ImageGallery.module.css';

const ImageGallery = ({  }) => {
    return (
        <ul className={styles.ImageGallery}>
  
        </ul>
    );
  };
  
  ImageGallery.propTypes = {
    onSubmit: PropTypes.func,
    
  };
  
  export default ImageGallery;