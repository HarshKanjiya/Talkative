import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
height: calc(100vh - 1rem);
display: flex;
flex-direction: column;
gap:1rem;
transition: 300ms;
width: 100%;
`
export const Header = styled.div`
display: flex;
padding: 0.5rem;
align-items: center;
justify-content: space-between;
margin: 0 0.2rem;
background-color: ${props => (props.theme === "light" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.03)")} ;
border-radius: 9px;
box-shadow: 0 0 11px rgba(0,0,0,0.1);

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

.MidBar-OnlineFriendsWrapper-onlines-header-dot{
    
}

.MidBar-OnlineFriendsWrapper-onlines-header{
    font-size: 1.3rem;
    font-weight: 600;
    opacity: 0.8;
    position: relative;
    width: max-content;
}
.MidBar-OnlineFriendsWrapper-onlines-header::after 
{
    content:' ';
    top: 3px;
    right: -10px;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #09ff0d;
}

`