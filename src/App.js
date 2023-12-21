// // // rfce
// // import React from 'react'

// // function App() {

// //   let data={
// //     background:"green",
// //     fontSize:"40px"
// //   }
// //   let data2={
// //     color:"white",
// //     background:"blue"
// //   }
// //   return (
// //     <div>
// //       <h2>App Components</h2>
// //       <p style={{...data,...data2}}>i m here now </p>
// //     </div>
// //   )
// // }

// // export default App
// import React,{useState}from 'react'

// function App() {

//   let[val,setval]=useState(true)
//  let data={
//     background:"yellow",
//   }
//    let data2={
//     background:"red",
//   }
//   let show=()=>{
//     // setval(false)
//     setval(val?false:true)
//   }
//   return (
//     <div>
//        <h2 style={val?data:data2}>i m here now</h2> 
//        <button onClick={show}>click now</button>
         
//     </div>
//   )
// }

// export default App

import React from 'react'

function App() {
   show=()=>{
    console.log("button click")
   }
  return (
    <div>
      <button onClick={this.show}>click here now</button>
    </div>
  )
}

export default App
