import { useState } from "react";

const App = () => {
  const [array, setArray] = useState([1,2,3,4,5])
  const [num, setNum] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setArray(array.map(function(elem) {
      if(elem === Number(num)) {
        array[array.indexOf(elem)] = 100
      }
      else{
        return elem
      }
    }))
    console.log(array)
  }

  function handleChange(e) {
    setNum(e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='number' value={num} onChange={handleChange}/>
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default App;
