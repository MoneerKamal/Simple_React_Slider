import React from 'react';
import Dot from './Dot/Dot';

const Dots = ({ slides, activeSlide }) => (
    <div
      style={{
        position: 'absolute',
        bottom: '25px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {slides.map((slide, i) => (
        <Dot key={'dot'+i} active={activeSlide === i} />
      ))}
    </div>
  )
  
  export default Dots