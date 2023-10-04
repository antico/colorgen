import React from 'react'

const Onecolor = (props) => {

  

 

  

  return (
    <div style={{backgroundColor : '#' + props.colors.hex, width : '14rem', height : '15rem'}}>
      <p>{props.colors.hex}</p>
      <p style={{color : 'white'}}>%{props.colors.weight}</p>
    </div>
  )
}

export default Onecolor
