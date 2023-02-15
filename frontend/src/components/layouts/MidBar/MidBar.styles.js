import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
height: calc(100vh - 1rem);
display: flex;
flex-direction: column;
gap:0.7rem;
transition: 300ms;
width: 370px;
`
export const Header = styled.div`
display: flex;
padding: 0.5rem;
align-items: center;
justify-content: space-between;
margin: 0 0.2rem;
background-color: ${props => (props.theme === "light" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.03)")} ;
border-radius: 9px;
box-shadow: 0 0 11px rgba(0,0,0,0.13);


h2{
    font-family: "Groupe";
    letter-spacing:1px;
}
`
export const IconWrapper = styled(motion.div)`
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
transform-origin: center center;

`
export const Body = styled.div`
display: flex;
padding: 0.5rem;
align-items: center;
height: 100%;
flex-direction: column;
justify-content: space-between;
margin: 0 0.2rem;
background-color: ${props => (props.theme === "light" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.03)")} ;
border-radius: 9px;
box-shadow: 0 0 11px rgba(0,0,0,0.1);

`
export const OnlineFriendsWrapper = styled.div`
width: 100%;


.MidBar-OnlineFriendsWrapper-onlines-header{
    font-size: 1.3rem;
    font-weight: 600;
    opacity: 0.8;
    position: relative;
    width: max-content;
}

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
&:focus, &:hover{
    border-bottom: ${props => (props.theme === "light" ? "2px solid rgba(0,0,0,0.9)" : "2px solid rgba(255,255,255,0.9)")};
}

;
`