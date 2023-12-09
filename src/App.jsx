import { useState } from 'react'
import FilterableProductTable from './components/FilterableProductTable';

// function MyButton() {
//   const [count, setCount] = useState(0)

//   function handleButtonClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleButtonClick}>This button is clicked {count} times</button>
//   )
// }


// LIFTING STATE UP FOR DATA SHARING
function MyButton({ count, handleClick }) {

  return (
    <button onClick={handleClick}>This button is clicked {count} times</button>
  )
}




function App() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <>
      <FilterableProductTable />
    </>
  )
}

export default App
