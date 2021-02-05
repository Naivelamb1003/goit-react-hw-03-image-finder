import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";
import { Component } from "react";
import ImageAPI from "../../services/API";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: Status.IDLE,
    pageNumber: 1,
    showModal: false,
    largeImageURL: null,
    alte: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchQuery;
    const prevPageAmount = prevState.pageNumber;
    const nextSearch = this.props.searchQuery;
    const nextPageAmount = this.state.pageNumber;

    if (prevSearch !== nextSearch || prevPageAmount !== nextPageAmount) {
      this.setState({ status: Status.PENDING });

      setTimeout(() => {
        ImageAPI.fetchImage(nextSearch, this.state.pageNumber)
          .then((images) => this.setState({ images, status: Status.RESOLVED }))
          .catch((error) => this.setState({ error, status: Status.REJECTED }));
      }, 2000);
    }
  }

  updateStatePageNumber = () => {
    this.setState((prevState) => {
      const newPage = prevState.pageNumber + 1;
      
      return {
        pageNumber: newPage,
      };
    });
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = (event) => {
    this.setState(({ showModal }) => ({
      largeImageURL: event.target.getAttribute('datalargeImageURL'),
      showModal: !showModal,
    }));
  };

  closeModal =()=>{
    this.setState({showModal: false})
  };

  render() {
    const { images, error, status } = this.state;

    if (status === "idle") {
      return <div className={styles.TextEror}>Введите название изображения.</div>;
    }

    if (status === "pending" && images === null) {
      return <Loader />;
    }

    if (status === "rejected") {
      return alert("Ошибка в поиске изображения");
    }

    if (status === "resolved" || (status === "pending" && images !== null)) {
      return (
        <>
          <ul className={styles.ImageGallery} onClick={this.toggleModal}>
            {images.hits.map((image) => (
              <ImageGalleryItem
                key={image.id}
                id={image.id}
                source={image.webformatURL}
                alte={image.tags}
                modalimg={image.largeImageURL}
              />
            ))}
          </ul>
          <Button updateStatePageNumber={this.updateStatePageNumber} />
          {status === "pending" && <Loader />}

          {this.state.showModal && (
            <Modal source={this.state.largeImageURL} alte={this.state.tags} onClose={this.closeModal}/> 
                        
          )}
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};
export default ImageGallery;
