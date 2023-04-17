import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 2rem;
    height: 100vh;
`
export const LeadText = styled.h1`
    ${({ theme }) => css`
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 3.5rem;
        color: ${theme.colors.primaryColor};
        word-wrap: break-word;
        width: 45rem;
	`}

`
export const BeautyImage = styled.img`
    ${({ theme }) => css`
        width: 20rem;
        height: 20rem;
        border: 1px solid ${theme.colors.primaryColor};
        color: ${theme.colors.primaryColor};
	`}
`