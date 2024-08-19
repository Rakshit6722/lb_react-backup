import React, { useState, useEffect  } from 'react'


const App = () => {
  
  const[text,setText] = useState('')
  
  useEffect(()=>{
    console.log('ui rendering done')
  },[])
  
  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div>
      <input type='text' onChange={changeHandler} ></input>
    </div>
  )
}

export default App
 