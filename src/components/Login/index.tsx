import React from "react";
import { LoginContainer, LoginForm, NoRegister } from "./styles";

const Login = () => {
    return (
      <LoginContainer>
        <h1>Entre Agora :)</h1>
        <LoginForm>
          <label htmlFor="username"></label>
          <input type="text" id="username" placeholder="email"/>
          <label htmlFor="password"></label>
          <input type="password" id="password" placeholder="senha"/>
          <button type="submit">Entrar</button>
        </LoginForm>
        <NoRegister>
          <text>Não tem conta?</text>
          <text>Cadastre-se</text>
        </NoRegister>
      </LoginContainer>
    );
  };

  export default Login;