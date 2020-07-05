import React from 'react'

const Caption = ({caption}) => (
  <div style={{
      position:"absolute",
      width:'80%',
      top:'50%',
      left:'50%',
      transform: 'translate(-50%, -50%)',
      textAlign:'center',
      color:'rgba(0,0,0,0.7)',
      fontSize:'42px',
  }}>
     <h1>
     {caption}
     </h1>
  </div>
)
export default Caption;