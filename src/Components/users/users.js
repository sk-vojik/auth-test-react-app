import React from "react";
import axios from "axios";

import requiresAuth from "../../auth/requiresAuth"

class Users extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    const endpoint = "http://localhost:8000/api/users";

    axios.get(endpoint).then(res => {
      this.setState({ users: res.data.users })
    })
  }

 
  render () {
    return (
      <div>
        {this.state.users.map(user => (
          <p key={user.username}>{user.username}, department: {user.department}</p>
        ))}
      </div>
    )

  }
}



export default requiresAuth(Users);