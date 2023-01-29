import styled from "@emotion/styled";

export const Wrapper = styled.div`
padding: 1rem;
height: calc(100vh - 1rem);
display: flex;
flex-direction: column;
gap:1rem;
border-radius: 9px;
transition: 300ms;
background-color: ${props => (props.theme === "light" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.03)")} ;
width: ${props => (props.extended ? "200px" : "60px")} ;
`