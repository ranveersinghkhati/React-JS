import React from 'react'

class App extends React.Component {
  constructor() {
    super(); // to call Component constructor and intitialise state
    this.state = {
      data: 1
    }
  }
  updateData() {
    this.setState({
      data: this.state.data + 1
    })
  }
  render() {
    return (
      <div>
        <h1>Counter :{this.state.data}</h1>
        <button onClick={() => this.updateData()}>Updata Data</button>
        {/* note in class based components you have to use arrow function to call function this.xyz won't work and this.xyz() will automatically call function without click */}
      </div>
    );

  }
}
export default App;
