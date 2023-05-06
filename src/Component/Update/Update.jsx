import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const loadedUser = useLoaderData()

  const handelupdate = (event)=>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const updatedUser = {name,email}
    console.log(updatedUser)

    fetch(`http://localhost:5000/users/${loadedUser._id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(updatedUser)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        alert('user update successfully')
      }
    })
  }
  return (
    <div>
      <h3>Upadate Information of{loadedUser.name}</h3>
      <form onSubmit={handelupdate} >
        <input type="text" name="name" defaultValue={loadedUser?.name} id="" required />
        <br />
        <br />
        <input type="email" name="email" defaultValue={loadedUser?.email} id="" required />
        <br /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Update;