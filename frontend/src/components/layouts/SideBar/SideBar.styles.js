import styled from "@emotion/styled";
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
border-radius: 9px;
transition: 300ms;
height: calc(100vh - 1rem);
/* background-color: ${props => (props.extnded === "light" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.03)")} ; */
background-color: ${props => (props.extended ? "transparent" : (props.theme === "light" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.03)"))};

color: ${props => (props.theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)")};

width: ${props => (props.extended ? "200px" : "60px")} ;
overflow: hidden;
position: relative;

`
export const Container = styled.div`
user-select: none;
width: 200px;
height: calc(100% );
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
gap:1rem;
border-radius: 9px;
transition: 300ms;
overflow: hidden;
background-image: ${props => (props.theme === "light" ? "linear-gradient(#A7ACD9,#9E8FB2)" : "linear-gradient(#0D324D,#7F5A83)")} ;
`
export const SideBarElementWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap:0.7rem;
width: 80%;
transition: 300ms;
border-radius: ${props => (props.btn === "logout" ? "0 1rem 0 0px" : "9px 0 1rem 0")};
background-color: ${props => (props.extended ? (props.theme === "light" ? "#fff" : "rgb(4, 19, 32)") : "transparent")};
padding: 0.51rem ;
padding-bottom: 0.7rem;
box-shadow: ${props => (props.extended ? "3px 3px 1.5rem rgba(0,0,0,0.25)" : "none")} ;
`
export const SideBarExtender = styled(motion.button)`
outline: none;
border:none;
height: 2.6rem;
width: 2.6rem;
transform-origin: center;
cursor: pointer;
background-color:transparent;
color: ${props => (props.theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)")};
`
export const SideBarElement = styled(motion.button)`
outline: none;
border:none;
cursor: pointer;
display: flex;
gap:0.5rem;
align-items: center;
transition: 300ms;
transform-origin: center ;
background-color:transparent;
color: ${props => (props.theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)")};
font-family: "Poppins", sans-serif;

abbr{
height: 2.6rem;
width: 2.6rem;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
transition: 300ms;
}

p{
    font-size: 1rem;
    font-weight: 500;
    max-lines: 1;
    line-height: 1rem;
}

&:hover{
    abbr{
        background-color: ${props => (props.extended === true ? "" : props.theme === "light" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)")} ;

    }
}
`
export const SideBarImgWrapper = styled.div`
position: absolute;
height: 100%;
width: 100%;
z-index: -1;
content:' ';
opacity:${props => (props.extended ? "1" : "0")};
transition:300ms;
border-radius: 10px;
img{
    height: 100%;
    width: auto;
    object-fit: cover;
    background-position: center;
}
`