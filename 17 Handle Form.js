import React, { useState } from 'react'
function App() {
  const [name, setName] = useState('');
  const [movie, setMovie] = useState('');
  const [checkbox, setCheckBox] = useState(false);

  return (
    <div>
      <h1>Forms</h1>
      <form>
        <input type='text' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <select onClick={(e) => setMovie(e.target.value)}>
          <option>Select Option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br /><br />
        <input type='checkbox' onClick={(e) => setCheckBox(true)} /><span>Accept T&C</span>
        <br /><br />
        <button type='submit' onClick={(e) => (e.preventDefault(), console.log(name, movie, checkbox))}>Submit Form</button>
      </form>
    </div>
  )
}
// in react react we make single page website (no reloads) when submit it by default reload the page. so we use e.preventDefault();
export default App