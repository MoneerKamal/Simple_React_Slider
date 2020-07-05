import React from 'react'

const Dot = ({ active }) => (
  <span
    style={{
      padding: '10px',
      marginRight: '5px',
      cursor: 'pointer',
      borderRadius: '50%',
      background: (active) ?'black' : 'white'
    }}
  />
)
export default Dot;