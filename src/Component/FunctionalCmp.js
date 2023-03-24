// import React from 'react'
// import { useState } from 'react';
// // import FunctionalCmp from './Component/FunctionalCmp';
// // import Classcmp from './Component/Classcmp';


// const FunctionalCmp = () => {
//   const [data,setData]= useState(false)
//   const [count ,setCount]=useState(false)

//   const handleFunction = ()=>{
//     setData(!data)
//   }
//   const jyoti = ()=>{
//     setCount(!count)
//   }
//   return (
//     <div>
//     <button onClick={handleFunction}>This is the FunctionComponent</button>
//     <button onClick={jyoti}>This is the Class Component</button>
    
//      (count ?  <FunctionalCmp/>:null)
//      {/* (count? <Classcmp/>:null) */}
  
//     </div>
//   )
// }

// export default FunctionalCmp
import React from 'react'


const FunctionalCmp = () => {
  return (
    <div style={{ border:"2px solid", borderRadius:"25px",backgroundColor:"lightBlue",textAlign:"center",height:"100%",width:"30%",marginTop:"10%",marginLeft:"20px"}}>
      <h1>This is created by using Function Component</h1>
      <p>This is the using External CSS</p>
      <p>This is the Inline CSS</p>
    </div>
  )
}

export default FunctionalCmp
