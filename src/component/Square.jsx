import React from "react";

function Square(props){
    return(
    <div className={`square ${props.color}`}

    onClick={props.onClick}
    style={{height:"100px",width:"100%" ,display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"revert"}}
    >
        <p >{props.value}</p>
        
    </div>
    )
}

export default Square;