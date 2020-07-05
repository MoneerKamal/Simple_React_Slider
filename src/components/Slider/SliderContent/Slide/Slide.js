import React from 'react';
import Caption from '../Caption/Caption';
import classes from './Slide.module.css';
const Slide = (props) => {
    const style={ 
    height: '100%',
    width: '100%',
    position:'relative',
    /*backgroundImage: "url('"+content+"')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'*/
    overflow: 'hidden',
  };
  console.log(props);
  let content=(
    <div className={classes.Slide} style={style}>
    { props.content.content }
    
    </div>  
  );
  if (props.content.caption) {
    content=( 
    <div className={classes.Slide} style={style}>
        { props.content.content }
        <Caption caption={props.content.caption} />
        
        </div>  
        );
  }
 
    return content;

    
}


export default Slide