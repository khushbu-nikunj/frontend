import React from "react";
import CompB from "./compB";
function CompA(){
    let a=400;      //component data
    let b=500;
    return<div>
        <h1>componant A</h1>
        <CompB prop1={a} prop2={b} />   //sending props
    </div>
}
export default CompA