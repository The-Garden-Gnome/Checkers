import Board from './components/Board'
import './App.css';
import GamePieces from './components/GamePieces/GamePieces';

function App() {
  return (
    <div className="App">
      <Board />
      <GamePieces />
    </div>
  );
}

export default App;
