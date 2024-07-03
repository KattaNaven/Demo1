import {useState} from 'react'
function App(){
  const[count,setCount]=useState(0)
  return (
     <div>
      <h1>{count}</h1>
      <button onClick={function(){
        setCount(count+1)
      }}>plus 1</button>
      <button onClick={function(){
        setCount(count-1)
      }}>minus 1</button>
      <button onClick={function(){
        setCount(count*2)
      }}>mul 2</button>
      
    </div>
  )
}
export default App;