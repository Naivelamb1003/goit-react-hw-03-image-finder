import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onClose, false)
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.props.onClose, false)
  }


  handleBackdropClick = e => {
    const { onClose } = this.props;

    if (e.currentTarget === e.target) {
      onClose();
    }}

  render () {
    const {source, alte } = this.props;
  
  
  return (
    <div className={styles.Overlay} onClick={this.handleBackdropClick}>
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
