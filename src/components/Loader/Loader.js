import LoaderSpin from "react-loader-spinner";
import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Loader extends Component {
  //other logic
  render() {
    return (
      <LoaderSpin
      type="Circles"
      color="#00BFFF"
      height={80}
      width={80}
        timeout={3000} //3 secs
      />
    );
  }
}