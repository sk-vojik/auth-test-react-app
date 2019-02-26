import React from "react";
import { connect } from "react-redux"

import { getUsers } from "../store/actions"

import Userlist from "../Components/Userlist/Userlist";

class HomeView extends React.Component {
  
  constructor() {
    super();
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <Userlist users={this.props.users}/>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  users: state.users,
})

export default connect(
  mapStateToProps,
  { getUsers }
)(HomeView)

// export default HomeView