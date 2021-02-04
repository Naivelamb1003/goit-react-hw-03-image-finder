import PropTypes from "prop-types";
import styles from './Button.module.css';

const Button = ({updateStatePageNumber}) => {
  
    return (
        <button onClick={updateStatePageNumber} type="button" className={styles.butForm}>Load More</button>
    );
  };

  Button.propTypes = {
    updateStatePageNumber: PropTypes.func,
    
  };

  export default Button;