import { Component } from "react";
import style from "./App.module.css";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import { render } from "@testing-library/react";


const URL = 'https://pixabay.com/api/';
const query = 'sun';
const APIKEY = '19280898-6ce77fd5c708cfadb8184ec4d';
 
class App extends Component {
    state = {
        image: null,
    }
   
    componentDidMount() {
        fetch(`${URL}?q=${query}&page=1&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(image => this.setState({image}))
    }


    onSubmit(){}
  
render() {

    return (
<>
{this.state.image && (<img src={this.state.image.hits[0].largeImageURL}/>)}
        <Searchbar
            onSubmit={this.onSubmit}
        />

        
        <ImageGallery
        />

        <Button/>

</>
    )

  }
}


 
export default App;
