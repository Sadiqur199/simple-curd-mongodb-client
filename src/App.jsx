import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handelsubmit = event =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const user = {name,email}
    console.log(user)

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        alert('added successfully');
        form.reset()
      }
    })
  }

  return (
    <>
      <h1>Simple Crud Web</h1>

      <form onSubmit={handelsubmit} >
        <input type="text" name="name" id="" required />
        <br />
        <br />
        <input type="email" name="email" id="" required />
        <br /><br />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default App
