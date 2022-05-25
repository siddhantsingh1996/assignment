import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [update, setUpdate] = useState(0);

 
  
  const startBtn = () => {
    let myInterval = setInterval(() => {
      setUpdate((prev)=>prev+10);
      console.log("update",update);
    }, 1000)
    
    setTimeout(()=>{
       clearInterval(myInterval);
    },10000)
    
  };

  return (
    <div className="App">
      <div className="progress-bar-wrapper">
        <div className="progress">
          <div style={{width:(update*4).toString()+'px',backgroundColor:'#61dafb',borderRadius:'12px',height:'20px',color:'#000000',display:'flex',justifyContent:'flex-end'}}>{update===0?"":update}</div>
        </div>
        <div
          className="start-btn"
          onClick={() => {
            startBtn();
          }}
        >
          Start
        </div>
      </div>
    </div>
  );
}

export default App;

//abhishek.a@wayforward.io
