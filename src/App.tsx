import Game from "./components/Game/Game";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Play 2048 Game</h1>
        <button className="button" type="reset">Reset</button>
      </header>
      <Game />
    </div>
  );
}

export default App;
