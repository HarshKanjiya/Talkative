import styled from "@emotion/styled"
import { TextField } from "@mui/material"

export const Wrapper = styled.div`
width: 100%;
height: 100%;
background-color: ${props => (props.theme === "light" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.03)")} ;
border-radius: 9px;
overflow: hidden;
box-shadow: 0 0 11px rgba(0,0,0,0.13);
transition: 300ms;
padding: 1rem;

display: flex;
flex-direction: column;
gap:1rem;
`


export const TextInput = styled.input`
width: 100%;
color:${props => (props.theme === "light" ? "#252525" : "#f5f5f5")};
background-color:${props => (props.theme === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)")};
border: none;
outline:none;
padding: 0.5rem 1rem;
margin: 0.5rem 0;
border-radius: 4px 4px 2px 2px;
border-bottom: ${props => (props.theme === "light" ? "2px solid rgba(0,0,0,0.2)" : "2px solid rgba(255,255,255,0.4)")};
transition: 300ms;
&:focus, &:hover {
    border-bottom: ${props => (props.theme === "light" ? "2px solid rgba(0,0,0,0.5)" : "2px solid rgba(255,255,255,0.5)")};
}

;
`