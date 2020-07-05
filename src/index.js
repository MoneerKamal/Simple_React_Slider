import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slider from './components/Slider/Slider';
import * as serviceWorker from './serviceWorker';
import TestComponent from './components/TestComponent/TestComponent';

const slides = [
  
  {
    content:<img src={require("./assets/images/bird-4887736_1920.jpg")} alt="first slide" />,
    caption:"Here Gose The Caption"
  },
  {
    content:<img src={require("./assets/images/water-plant-5273361_1920.jpg")} alt="Second slide"/>,
    caption:"Here Gose The Caption"
  },
  {
    content:<img src={require("./assets/images/creme-caramel-5130830_1920.jpg")} alt="Third slide"/>,
    caption:"Here Gose The Caption"
  },
 
  {
    content:<TestComponent />,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Slider slides={slides} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
