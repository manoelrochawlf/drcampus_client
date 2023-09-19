import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 2rem;
    height: 100vh;
    & > * {
    opacity: 0;
    transform: translateX(-100%);
    animation: fadeInRight 0.8s ease-out forwards;
  }
  & > *:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`
export const LeadText = styled.h1`
    ${({ theme }) => css`
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 3.5rem;
        color: ${theme.colors.primaryColor};
        word-wrap: break-word;
        width: 45rem;
	`}

`
