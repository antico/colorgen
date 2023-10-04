import React, { useRef, useState } from 'react'
import Values from 'values.js'
import Onecolor from './Onecolor'


const App = () => {
  
  const [color,setcolor] = useState('#800080')
  const [setter,setSetter] = useState('#800080')
  const [error,setError] = useState(false)

  
  
  const handler=()=>{
    if (!color.startsWith('#')) {
      setError(true);
    } else if (color.length <= 6) {
      setError(true);
    } else if (!/^[0-9A-Fa-f]+$/.test(color.slice(1))) {
      setError(true);
    } else {
      setError(false)
      setSetter(color);
    }
  };
  
 const slect = useRef() 

 let colorsl = new Values(setter).all(10)

  return (
    <div>
      <h1>Color Generator</h1>
      
        <input type="color" value={color} onChange={(e)=>{setcolor(e.target.value); slect.current.value = color}}/>
        <input type="text" ref={slect} onChange={(e)=>{setcolor(e.target.value)}}/>
        <button style={{backgroundColor : color}} onClick={handler}>Submit</button>
      

      <div className='flex flex-wrap'>
        {colorsl.map((col,index)=>{return <Onecolor key={index} colors={col} inde={index}/>})}</div>
    
    

    </div>
  )
}

export default App

