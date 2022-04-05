import React from "react";
import CompB from "./compB";
function CompA(){
    let a=400;
    let b=500;
    return<div>
        <h1>componant A</h1>
        <CompB prop1={a} prop2={b} />
    </div>
}
export default CompA