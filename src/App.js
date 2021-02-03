import { Component } from "react";
import style from "./App.module.css";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    searchQuery: "",
    
  };

  onSubmit = (searchQueryState) => {
    this.setState({
      searchQuery: searchQueryState.searchQuery,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery searchQuery={this.state.searchQuery} />

        <Button />
      </>
    );
  }
}

export default App;
