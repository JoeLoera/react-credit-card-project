import { useState } from 'react'

const App = () => {
  const[count,setCount] = useState(0)

  console.log(count)
  return (
    <div>
      <button onClick={() => setCount(count +1)}>ADD 1</button>
    </div>
  );
}

export default App;
