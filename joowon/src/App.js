import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // useState를 사용하여 count 상태와 해당 상태를 변경할 수 있는 함수 setCount를 선언합니다.
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  // 버튼을 클릭할 때마다 count 상태를 업데이트하는 함수입니다.
  const doubleIncrement = () => {
    setCount(count + 2);
  };

  const multi = () => {
    setCount(count * 2);
  };

  const divide = () => {
    setCount(count / 2);
  };

  return (
    <div className="App">
      <header className="App-header">
        {visible && <img src={logo} className="App-logo" alt="logo" />}
        <p>
          You clicked <strong>{count}</strong> times
        </p>
        {/* 버튼을 클릭하면 increment 함수가 호출되어 count 상태가 업데이트됩니다. */}
        <button className="App-button" onClick={doubleIncrement}>
          doubleplus
        </button>
        <button className="App-button" onClick={multi}>
          multi
        </button>
        <button className="App-button" on Click={divide}>
          divide
        </button>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
      </header>
      {visible && <p style={{ color: "white" }}>감추기</p>}
    </div>
  );
}

export default App;
