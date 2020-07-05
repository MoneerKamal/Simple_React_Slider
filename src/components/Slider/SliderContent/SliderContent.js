import React from 'react'
import classes from './SliderContent.module.css';
import Slide from './Slide/Slide';

const SliderContent =(props)=>{
const content_style={
    transform: 'translateX(-'+ props.translate +'px)',
    transition: 'transform ease-out '+props.transition +'s',
    height: '100%',
    width: props.width+'px',
    display: 'flex'
};

    return(
        <div className='SliderContent' style={content_style}>
      
      {props.slides.map((slide, i) => (
                <Slide key={i} content={slide} />
            ))}
        </div>
    );
} 


export default SliderContent;