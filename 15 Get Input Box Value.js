import React, { useState } from 'react'
function App() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <div>
      {
        show ? <h1>hello {data}</h1> : null
      }
      <input type="text" onChange={(event) => (setData(event.target.value), setShow(false))} />
      <button onClick={() => setShow(true)} >Click Me</button>
    </div>
  )
}

export default App