import PropTypes from "prop-types";
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({id,source,alte}) => {
    return (
        <li key={id} className={styles.ImageGalleryItem}>
  <img src={source} alt={alte} className={styles.ImageGalleryItemImage}/>
</li>
    );
  };
  
  ImageGalleryItem.propTypes = {
    id: PropTypes.string,
    source: PropTypes.string,
    alte: PropTypes.string,
    
  };
  
  export default ImageGalleryItem;