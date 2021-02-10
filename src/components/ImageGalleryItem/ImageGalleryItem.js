import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, source, alte, modalimg, tags, onClick }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      key={id.toString()}
      onClick={() => onClick(modalimg, tags)}
    >
      <img
        src={source}
        alt={alte}
        datalargeImageURL={modalimg}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  source: PropTypes.string,
  alte: PropTypes.string,
  modalimg: PropTypes.string,
};

export default ImageGalleryItem;
