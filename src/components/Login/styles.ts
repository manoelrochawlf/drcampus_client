import styled, { css } from "styled-components";

export const LoginContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
   ${({ theme }) => css`
    h1{
      color: ${theme.colors.primaryColor};
      margin-bottom: 1.5rem;
    }
   `}),;  
`;

export const LoginForm = styled.form`
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: flex-start;

  ${({ theme }) => css`
    width: 300px;
    label {
      color: ${theme.colors.primaryColor};
      font-weight: bold;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      margin: 0.5rem 0;
      background-color: #e4e4e4;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      border: 1px solid transparent;
      border-radius: 8px;
    }
    button {
      margin-top: 1.5rem;
      background-color: ${theme.colors.primaryColor};
      width: 100%;
      color: #ffffff;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  `}
`;


export const NoRegister = styled.div`
margin-top: 0.5rem;
  ${({ theme }) => css`
    text {
      &:first-child {
        color: #ffffff;
        font-weight: bold;
        margin-right: 0.3rem;
      }
      &:last-child {
        color: ${theme.colors.primaryColor};
        &:hover {
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
`}
`;
