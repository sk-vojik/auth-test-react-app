import React from "react";
import { withRouter } from "react-router"
import styled from "styled-components"
import axios from "axios"

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
  border: 1px solid lightgray;
  box-shadow: 2px 1px 12px 5px #86A38C;
  border-radius: 10px;
`

const StyledForm = styled.form`
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UserInfo = styled.input`
  padding: 30px 10px 20px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px;
  border: 1px solid lightgray;
`

const FormButton = styled.button`
  padding: 30px 10px 30px;
  border-radius: 20px;
  font-size: 1.8rem;
  width: 450px;
  margin: 12px auto;
  border-color: lightgray;
  cursor: pointer;
  &:hover {
    background-color: #5CA143
    color: white;
  }
`



class RegisterForm extends React.Component {

  state = {
    username: "",
    password: "",
    department: "",
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSignup = event => {
  event.preventDefault();
  axios
    .post('https://locahlhost:8000/api/register', {
      username: this.state.username,
      password: this.state.password,
      department: this.state.department,
    })
    .then(res => {
      localStorage.setItem('jwt', res.data.token);
      console.log("it worked!!", res.data)

      this.props.history.push("/home");
    })
    .catch(err => this.setState({ errorMsg: 'This email is already in use' }));
  };


  render() {
    
    return (

      <FlexDiv>

      <FormContainer>
  
        <StyledForm>
  
          <UserInfo type="text" autocomplete="off" name="username" onChange={this.handleChanges} placeholder="Username" />
          <UserInfo type="text" autocomplete="off" name="password" onChange={this.handleChanges} placeholder="Password" />
          <UserInfo type="text" autoComplete="off" name="department" onChange={this.handleChanges} placeholder="Department" />
      
          <FormButton onClick={this.handleSignup}>Register User</FormButton>
  
        </StyledForm>
  
      </FormContainer>
      </FlexDiv>
    )
  }
  

}

export default withRouter(RegisterForm);
