import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [flag, setFlag] = React.useState(false)

  return (
    <div id="main">
      <button onClick={()=>setFlag(prev => !prev)} id="click">Click</button>
      {flag && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
