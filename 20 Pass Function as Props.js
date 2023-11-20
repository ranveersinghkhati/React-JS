import React, { useState } from 'react'
import Child from './Child';

function App() {
  function getData() {
    let data = 'Ranveer';
    console.warn(data);

  }
  return (
    <div>
      <h1>App.js</h1>
      <Child item={getData} />
    </div>
  );
}

export default App

/// different component
import React from 'react'
import SuperChild from './SuperChild'
function Child(props) {
    // let item = props.item;
    return (
        <div>
            <button onClick={props.item}>Child</button>
            <SuperChild item={props.item} />
        </div>
    )
}

export default Child
/////
different file
import React from 'react'

function SuperChild(props) {
    return (
        <div>
            <button onClick={props.item}>SuperChild</button>
        </div>
    )
}

export default SuperChild