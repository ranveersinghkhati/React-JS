import React, { useState } from 'react'
import Student from './Student'

function App() {
  const [person, setPerson] = useState({
    name: 'Ranveer',
    age: '22',
    address: {
      city: 'New Delhi',
      country: 'India'
    }
  });
  return (
    <div>
      <h1>Props in Functional Component</h1>
      <Student data={person} contact={{ mobile: '9315466396', email: 'ranveer@gmail.com' }} />
    </div>
  )
}
// prop -> {
//   data:{
//     name:,
//     age:,
//     address:{

//     }
//   },
//   contact:{
//     mobile:,
//     email
//   }
// }

export default App