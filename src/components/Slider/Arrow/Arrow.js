import React from 'react';
import classes from './Arrow.module.css';
import leftArrow from '../images/left-arrow.svg';
import rightArrow from '../images/right-arrow.svg';


const Arrow = ({ direction, handleClick }) => {
    const img_style= {
        transform: 'translateX('+(direction === 'left') ? '-2px)' : '2px)',
       
      }
    return (
        <div className={classes.Arrow}
        style={{
          display: 'flex',
          position: 'absolute',
          top: '50%',
          right:(direction === 'right') ? '25px' : 'auto',
          left:(direction === 'left') ? '25px' : 'auto',
          height: '50px',
          width: '50px',
          justifyContent: 'center',
          background: 'white',
          borderRadius: '50%',
          cursor: 'pointer',
          alignItems: 'center',
          transition: 'transform ease-in 0.1s', 
        }}
          onClick={handleClick}
        >
          {direction === 'right' ? <img style={ img_style} src={rightArrow} /> : <img src={leftArrow} />}
        </div>
      )
}

export default Arrow