import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.props.onClose, false)
  }

  componentWillUnmount(){
    window.removeEventListener('keyup', this.props.onClose, false)
  }

  render (){
    const {source, alte } = this.props;
  
  
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={source} alt={alte} />
      </div>
    </div>
  )
};
};


Modal.propTypes = {
  source: PropTypes.string,
  alte: PropTypes.string,
};

export default Modal;
