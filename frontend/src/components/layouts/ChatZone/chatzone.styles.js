import styled from "@emotion/styled";
import { motion } from "framer-motion";


export const Wrapper = styled(motion.div)`
background-color: red;
height: calc(100vh - 1rem);
width: 100% ;

transition: 300ms;
background-color: ${props => (props.theme === "light" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.03)")} ;
border-radius: 9px;
overflow: hidden;
box-shadow: 0 0 11px rgba(0,0,0,0.13);
`

export const NoChatSelected_wrapper = styled(motion.div)`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:1rem;

img{
    width: 250px;
    height: auto;
    opacity: 0.7;
}
`

export const ChatWrapper = styled(motion.div)`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
/* gap:1rem; */
`


export const ChatHeader = styled.div`
width: 100%;
padding: 0.5rem 1rem;
border-bottom: 1px solid ${props => (props.theme === "light" ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.1)")} ;
letter-spacing: 1px;
box-shadow: 0 0rem 1.5rem rgba(0,0,0,0.1);

.ChatZone-Header-username{
    font-size: 1.3rem;
    font-weight: 600;
 }
.ChatZone-Header-usermail{
    font-size: 0.85rem;
    opacity: 0.5;
}
`
export const ChatMessages = styled.div`
width: 100%;
height: 100%;
position: relative;
overflow-y: scroll;
padding: 1rem;
overflow-x: hidden;
background-image: ${props => (props.theme === "light" ? "linear-gradient(#FFDEE9,#B5FFFC)" : "linear-gradient(#0D324D,#7F5A83)")} ;

`

export const ChatFooter = styled.div`
width: 100%;
padding: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
gap:2rem;
box-shadow: 0 0rem 1.5rem rgba(0,0,0,0.1);
border-top: 1px solid ${props => (props.theme === "light" ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.1)")} ;

input{
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 1rem;
    flex:1;
    padding: 0.3rem 0;
    color: ${props => (props.theme === "light" ? "#252525" : "rgba(255,255,255,1)")};
    border-bottom:1px solid ${props => (props.theme === "light" ? "#252525" : "rgba(255,255,255,0.23)")};
}
button{
    padding: 0.5rem 1rem;
    border-radius:20px;
    outline:none;
    border:none;
}
`