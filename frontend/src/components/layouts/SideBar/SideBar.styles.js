import styled from "@emotion/styled";

export const Wrapper = styled.div`
border-radius: 9px;
transition: 300ms;
height: calc(100vh - 1rem);
background-color: ${props => (props.theme === "light" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.03)")} ;
color: ${props => (props.theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)")};

width: ${props => (props.extended ? "200px" : "60px")} ;
overflow: hidden;
`

export const Container = styled.div`
width: 200px;
height: calc(100% - 1.5rem);
margin-top:0.5rem;
padding: 0.5rem 1.2rem;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
gap:1rem;
border-radius: 9px;
transition: 300ms;
`

export const SideBarElementWrapper = styled.div`
display: flex;
flex-direction: column;
gap:1rem;
`
export const SideBarElement = styled.button`
outline: none;
border:none;
width: 1rem;
height: 1rem;
background-color:transparent;
color: ${props => (props.theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)")};

`
