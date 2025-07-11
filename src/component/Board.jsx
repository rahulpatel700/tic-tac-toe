import React ,{useState,useEffect}from "react";
import Square from "./Square.jsx";

function Board(){
const [state,setState]=useState(Array(9).fill(null));
const [isXTurn,setIsTurn]=useState(true);

const [color,setColor]=useState(Array(9).fill(null));
const [isWinner,setIsWinner]=useState(null);
const [isDraw,setIsDraw]=useState(null);


const handleClick=(index)=>{
    if (state[index]==null&& isWinner==null){
    const copyState=[...state];
    copyState[index]=isXTurn ? "X" :"O";
    setState(copyState);
    setIsTurn(!isXTurn);
    
    
    }

  
    
  
     }



useEffect(()=>{
   
    
    const checkWinner=()=>{
        
    const winnerLogic=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let logic of winnerLogic){
        const [a,b,c]=logic;
        if (state[a]!==null && state[a]===state[b]&&state[a]===state[c]){
            const copyColor=[...color];
            copyColor[a]="green";
            copyColor[b]="green";
            copyColor[c]="green";
            setColor(copyColor);
            setIsWinner(state[a]);
            setIsDraw(null);
            break;
        }
      
    };
if (state.every((square)=>square!==null)){
    setIsDraw(true);
}
else {
    setIsDraw(null);
}
}
checkWinner();
},[state]);



            

    return (
    <div className="board-container">
       
        <div className="board-row">
        <Square color={color[0]} onClick={()=>handleClick(0)} value={state[0]}/>
         <Square color={color[1]} onClick={()=>handleClick(1)} value={state[1]} /> 
         <Square color={color[2]} onClick={()=>handleClick(2)} value={state[2]}/>
         </div>

        
        <div className="board-row">
        <Square color={color[3]} onClick={()=>handleClick(3)} value={state[3]}/>
         <Square color={color[4]}  onClick={()=>handleClick(4)} value={state[4]}/> 
         <Square color={color[5]}  onClick={()=>handleClick(5)} value={state[5]}/>
         </div>


         
        <div className="board-row">
        <Square color={color[6]} onClick={()=>handleClick(6)} value={state[6]}/>
         <Square color={color[7]} onClick={()=>handleClick(7)} value={state[7]}/> 
         <Square color={color[8]} onClick={()=>handleClick(8)} value={state[8]}/>
         </div>
            
           <h1 className="winner"> {isWinner ? (<>{isWinner} is winner </>):(<></>)}</h1>
           {isWinner? (
           <button className="reset-button" onClick={()=>{setState(Array(9).fill(null));
            setIsWinner(null);
            setColor(Array(9).fill(null))
            } }>Restart</button>):(<></>)
        }
 {isDraw? (<> {<button className="reset-button" onClick={()=>{setState(Array(9).fill(null));
            setIsWinner(null);
            setColor(Array(9).fill(null))
            } }>Draw</button>}</>):(<></>) } 

         
       
       

    </div>
    )
}

export default Board;