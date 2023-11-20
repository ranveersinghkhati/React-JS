import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState(null);

  const [nameValidation, setNameValidation] = useState(false);  // false means not validated ie error
  const [passwordValidation, setPasswordValidation] = useState(false);  // false means not validated ie error

  function validateName(e) {
    let name = e.target.value;
    if (name.length < 3) {
      setNameValidation(false)
    }
    else {
      setNameValidation(true)
      setName(name)
    }
  }

  function validatePassword(e) {
    let password = e.target.value;
    if (password.length < 3) {
      setPasswordValidation(false)
    }
    else {
      setPasswordValidation(true)
      setPassword(password)
    }
  }

  return (
    <div>
      <h1>Form Validation</h1>
      <form>
        <input type='text' placeholder='Enter Your Name' onChange={(e) => validateName(e)} value={name} />
        {nameValidation ? null : <span>Name should have atleast 3 characters</span>}
        <br />
        <input type='password' placeholder='Enter Your Password' onChange={(e) => validatePassword(e)} />
        {passwordValidation ? null : <span>Password should have atleast 3 characters</span>}
        <br />
        <button type='submit' onClick={(e) => e.preventDefault()}>Submit</button>
      </form>
    </div>
  )
}

export default App