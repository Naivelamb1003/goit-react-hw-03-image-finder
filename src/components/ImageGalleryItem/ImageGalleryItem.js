import PropTypes from "prop-types";
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({  }) => {
    return (
        <li className={styles.ImageGalleryItem}>
  <img src="" alt="" className={styles.ImageGalleryItem-image}/>
</li>
    );
  };
  
  ImageGalleryItem.propTypes = {
    onSubmit: PropTypes.func,
    
  };
  
  export default ImageGalleryItem;