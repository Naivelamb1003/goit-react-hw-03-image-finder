import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal=({source, alte}) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={source} alt={alte} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  source: PropTypes.string,
  alte: PropTypes.string,
};

export default Modal;
