
import React, { useState } from 'react'

let Counter = () => {
    let [counter,setCounter]=useState(0);
    let incrHandler=()=>{
        setCounter(counter+1)
    }
    let decrHandler=()=>{
        setCounter(counter-1)
    }
  return (<div className="container mt-5">
              <div className="row">
                  <div className="col-md-6">
                      <div className="card">
                          <div className="card-header"><h3>Counter Value: {counter}</h3></div>
                          <div className="card-body">
                              <button onClick={incrHandler}className="btn btn-primary mr-2">INCR</button>
                              <button onClick={decrHandler}className="btn btn-warning">DECR</button>
                          </div>
                       </div>
                 </div> 
               </div>
           </div>             
  )
}

export default Counter