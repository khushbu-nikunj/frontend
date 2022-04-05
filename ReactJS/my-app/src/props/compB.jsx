import React from "react";

function CompB(props){
    return(
        <div>
        <h3>componant B </h3>
        <pre>{JSON.stringify(props)}</pre>
        <h6>property 1 : {props.prop1}</h6>
        <h6>property 2 : {props.prop2}</h6>
        </div>
        )
}
export default CompB