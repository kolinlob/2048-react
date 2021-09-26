import { useState } from "react";
import Game from "./components/Game/Game";
import "./App.scss";

function App() {
  const [ms, setMs] = useState<number>(Date.now());
  const resetHandler = () => setMs(Date.now());

  return (
    <div className="App">
      <header className="App-header">
        <h1>Play 2048 Game</h1>
        <button className="button" type="reset" onClick={resetHandler}>
          Reset
        </button>
      </header>
      <Game key={ms} />
    </div>
  );
}

export default App;
