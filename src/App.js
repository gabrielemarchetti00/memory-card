import CardDisplay from "./components/CardDisplay";
import "./styles/style.css"

const App = () => {
  
  return (
    <div className="App">
      <div className="header">
        <div className="title">Disney Memory</div>
        <div className="score">
          <div className="current-score">Current Score: </div>
          <div className="best-score">Best Score: </div>
        </div>
      </div>
      <CardDisplay/>
    </div>
  );
}

export default App;
