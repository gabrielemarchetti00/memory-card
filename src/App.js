import CardDisplay from "./components/CardDisplay";
import Score from "./components/Score"
import "./styles/style.css"
import {useState} from "react";

const App = () => {

  let [query, setQuery] = useState('')

  if(query === '') {
    query = undefined
  }
  
  return (
    <div className="App">
      <div className="header">
        <div className="title">Disney Memory</div>
        <Score cards={query}/>
      </div>
      <CardDisplay onQuery={setQuery}/>
    </div>
  );
}

export default App;
