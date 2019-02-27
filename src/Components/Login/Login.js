import React from "react";
import { withRouter } from "react-router"
import axios from 'axios';
import { getUsers } from "../../store/actions/"
import { connect } from "react-redux";

import styled from "styled-components";

const LoginContainer = styled.div`
  padding-bottom: 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center
`


const StyledForm = styled.form`
  margin: 48px auto 0;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border: 1px solid lightgray;
  box-shadow: 2px 1px 12px 5px #86A38C;
  border-radius: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UserInfo = styled.input`
  padding: 30px 10px 20px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px; auto;
  border: 1px solid lightgray;
`

const LoginButtons = styled.button`
  padding: 30px 10px 30px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px; auto;
  border: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    background-color: #5CA143
    color: white;
  }
`


class Login extends React.Component {
  
  state = {
    username: '',
    password: '',
  }


  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = event => {

    event.preventDefault();
    const endpoint = 'http://localhost:8000/api/login'; 

    axios
      .post(endpoint, this.state)
      .then(res => {
        
        this.props.history.push('/home');
        this.props.getUsers();
      })
      .catch(err => console.log(err));     
  };

  signUp = event => {
    event.preventDefault();
    this.props.history.push('/signup');
  }

  render() {
    return (
      <LoginContainer>
        <StyledForm>

          <UserInfo type="text" autoComplete="off" placeholder="Email" name="username" value={this.state.username} onChange={this.handleChange}  />
          <UserInfo type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}  />

          <ButtonContainer>

            <div>

              <LoginButtons onClick={this.handleSubmit}>Log In</LoginButtons>
              <LoginButtons onClick={this.signUp}>Sign Up</LoginButtons>

            </div>
            
          </ButtonContainer>

        </StyledForm>


      </LoginContainer>
    )
  }
}

const mapStateToProps = state => ({
})

export default withRouter(connect(
  mapStateToProps,
  { getUsers }
)(Login))

