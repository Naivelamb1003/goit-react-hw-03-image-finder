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
      console.log(newPage);
      return {
        pageNumber: newPage,
      };
    });
  };

  toggleModal = (event) => {
    this.setState(({ showModal }) => ({
      event.currentTarget.: event.currentTarget.getAttribute('data-source')
      showModal: !showModal,
    }));
  };

  render() {
    const { images, error, status } = this.state;

    if (status === "idle") {
      return <div>Введите название изображения.</div>;
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
              />
            ))}
          </ul>
          <Button updateStatePageNumber={this.updateStatePageNumber} />
          {status === "pending" && <Loader />}

          {this.state.showModal && (
            <Modal source={this.state.largeImageURL} alte={this.state.tags} />
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
