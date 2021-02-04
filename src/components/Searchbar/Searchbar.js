import PropTypes from "prop-types";
import { Component } from "react";

import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  handleChange = (event) => {
    this.setState({
      searchQuery: event.currentTarget.value,
    });
  };

  reset = () => {
    this.setState({ searchQuery: "" });
  };

  handlAdd = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handlAdd} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className={styles.SearchFormInput}
            value={this.state.searchQuery}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
