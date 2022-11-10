import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './Login.style'
import meal from "../../assets/meal.svg"
import {useNavigate} from "react-router-dom"

const Login = () => {

  const navigate = useNavigate();

  const userInfo ={
    username: "ismail",
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo))
    navigate("/");

  };

  return (  
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} alt="login_img" />
        <Header>RECIPE</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder='Enter Username' type="text" />
          <StyledInput placeholder='Enter password' type="password" />
          <StyledButton type='submit'>login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login