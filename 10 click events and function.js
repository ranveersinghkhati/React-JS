function App() {
  let data = 'Raj';
  function changeData() {
    data = "Ranveer";
    alert(data);
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={changeData}>click me</button>

    </div>
  );
}

function User() {
  return <div class="outterDiv">
    <div class="innerDiv">
      Hello from innerDiv
    </div>
  </div>
}
export default App;

