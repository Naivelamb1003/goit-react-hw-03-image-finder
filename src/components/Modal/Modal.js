import PropTypes from "prop-types";
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({  }) => {
    return (
        <div className="Overlay">
  <div className="Modal">
    <img src="" alt="" />
  </div>
</div>
    );
  };
  
  ImageGalleryItem.propTypes = {
    onSubmit: PropTypes.func,
    
  };
  
  export default ImageGalleryItem;