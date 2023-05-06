import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

  const loadUser = useLoaderData()
  const [users,setUsers] = useState(loadUser)
  
  const handelDlete = (_id)=>{
    console.log('Delete',_id)
    fetch(`http://localhost:5000/users/${_id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount){
        alert('deleted successfully')
        const reaming = users.filter((user) => user._id !==_id)
        setUsers(reaming)
      }
    })

  }

  return (
    <div>
      <h1>{users.length}</h1>
      <div>
        {
          users.map(user=><p key={user._id}>
            {user.name}:{user.email} 
            <Link to={`/update/${user._id}`}>
            <button>Update</button>
            </Link>
            <button onClick={()=>handelDlete(user._id)}>X</button>
            </p>)
        }
      </div>
    </div>
  );
};

export default Users;