import React from 'react'
import Student from './Student';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Raj'
    }
  }
  render() {
    return (
      <div>
        <Student name={this.state.name} />
        <button onClick={() => this.setState({ name: 'Ranveer' })}>Update state</button>
      </div>
    );
  }
}
export default App;

// in different file
import React from 'react'

class Student extends React.Component {
    render() {
        console.log(this.props.name)
        return (
            <div>
                <h1>Hello {this.props.name}</h1>

            </div >
        );
    }
}

export default Student;