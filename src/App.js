import { useState } from 'react'

const App = () => {
  const [firstName,setFirstName] = useState(null)
  const [email, setEmail] = useState(null)

  console.log(firstName,email)

  return (
    <div>
      <form>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
