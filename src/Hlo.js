import React from 'react'
function Hlo() {
    return (
      <div className='main'>
            <div className='head'>
                <h2 id='head'> Sign Up </h2>
            </div>
            <div className='body'>
            <form>
               <label id='pno'> Phone No. </label>
              <input type='text' id='box'></input>
              <label id='pno'> Password </label>
              <input type='text' id='box'></input>
              <label id='pno'> O.T.P </label>
              <input type='text' id='box'></input>
              <button id='btn'>Submit</button>
            </form>
        </div>
        </div>
    )
};

export default Hlo

