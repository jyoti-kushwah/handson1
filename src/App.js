import React, { useState } from 'react'
import './App.css'
import FunctionalCmp from './Component/FunctionalCmp'
import ClassCmp from './Component/ClassCmp'

const App = () => {
  const [Count,setCount]=useState(false)
  //state Variable //state function             //initial value of your state variable
  const [Data,setData]=useState(false)
   
  const handleFunction=()=>{
   setCount(!Count)

  }
  const handle =()=>{
    setData(!Data)
  }
  return(
    <>
    <h1 className='har-sit'>Styling Using Functional And Class Component</h1>
    <button onClick={handleFunction} className='jyo-ti'> To see styling in Function Component</button>
    <button onClick={handle} className='jyt'> To see styling in Class Component</button>

   
      { Count ? <FunctionalCmp />: null}
     { Data ? <ClassCmp/>:null}

   </>  
    
  
  ) 
}

export default App
