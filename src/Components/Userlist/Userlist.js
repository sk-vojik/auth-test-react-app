import React from "react"

function Userlist(props) {
    

  if (!props) {
    return <h2>Loading data...</h2>
  }
  return (
    <div>
      {props.users.map(user => (
        <p key={user.username}>{user.username}, department: {user.department}</p>
      ))}
    </div>
  )
}

export default Userlist