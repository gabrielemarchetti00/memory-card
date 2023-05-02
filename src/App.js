import { useState } from "react";

const App = () => {
  const [array, setArray] = useState([1,2,3,4,5])
  const [num, setNum] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(num)
  }

  function handleChange(e) {
    setNum(e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={num} onChange={handleChange}/>
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default App;
