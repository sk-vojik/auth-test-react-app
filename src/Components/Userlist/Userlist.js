import React from "react"

function Userlist(props) {

  return (
    <div>
      {props.users.map(user => (
        <p>{user.username}</p>
      ))}
    </div>
  )
}

export default Userlist