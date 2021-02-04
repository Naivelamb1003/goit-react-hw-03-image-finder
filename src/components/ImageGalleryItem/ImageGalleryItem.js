import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, source, alte }) => {
  return (
    <li className={styles.ImageGalleryItem} key={id.toString()}>
      <img src={source} alt={alte} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  source: PropTypes.string,
  alte: PropTypes.string,
};

export default ImageGalleryItem;
