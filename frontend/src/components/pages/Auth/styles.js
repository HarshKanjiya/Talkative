import styled from "@emotion/styled";
import { motion } from 'framer-motion';

export const AuthPageWrapper = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
background-color: #fff;
color: #202020;
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
`

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
gap:3rem;
justify-content: flex-start;
height: 85vh;
background-color: #fff;
width: 30vw;
/* padding: 1rem; */
margin: 1rem;
`

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 0.9rem;

button{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    /* border:1px solid #f1f1f1; */
    box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.09);
    transition: 350ms;

    &:hover{
        box-shadow: 0 .5rem 1.3rem rgba(0,0,0,0.19);
    }
}
span{
color: #2e2efb;
position: relative;
cursor: pointer;
margin-left:1rem;
transition: 200ms;
}
span::after{
    position: absolute;
    bottom: -5px;
    left: 0;
content:' ';
width: 100%;
height: 2px;
border-radius: 5px;
background-color: #2e2efb;
opacity:0.5;
transition: 200ms;
}

span:hover{
    color:#0000ff;

}
span:hover::after{
    opacity: 0.1;
    height: 130%;
    width: 125%;
    left:-10%;
    bottom: -3px;
}
`

export const Form = styled(motion.form)`
display: flex;
flex-direction: column;
gap:2.9rem;
`
export const FormHeader = styled(motion.div)`


.auth-FormHeader-maintext{
font-size: 2.5rem;
font-weight: 800;
font-family: "Groupe";
}
.auth-FormHeader-subtext{
    color:#909090;
    font-size: 0.8rem;
}
`

export const InputField = styled(motion.div)`
display: flex;
border-bottom: 1px solid #c5c5c5;
position: relative;
.auth-InputField-logo{
width: 10%;
color:#909090;
}
.auth-InputField-eye-button{
    transition: 200ms;
    width: 10%;
    color:#909090;

}
.auth-InputField-check{
    transition: 200ms;
    width: 10%;
    color: ${props => (props.validity ? "#2bb594" : "#909090")} ;

}
`
export const Input = styled.input`
flex:1;
outline: none;
border: none;
height: 1.8rem;
font-size: 1rem;
position: relative;

`

export const FormFooter = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

.auth-footer-or{
    color:#909090;
}
.auth-form-right-direction-arrow{
    
}
`
export const SubmitButtonWrapper = styled.button`
outline:none;
border:none;
display: flex;
justify-content: space-between;
align-items: center;
width: 9rem;
border-radius: 2rem;
padding: 0.2rem;
padding-left: 2rem;
background-color: #1c34ff;
box-shadow: 0 0.5rem 1.5rem rgba(28, 52, 255,0.19);
transition: 350ms;
cursor: pointer;
p{
    color:white;
}

.auth-footer-submit-btn-arrow{
    height: 2.5rem;
    width: 2.5rem;
    display: grid;
    place-content: center;
    background-color: rgba(255,255,255,0.3);
    border-radius: 50%;
    color:white;
    border:2px solid rgba(255,255,255,0.15);
}

&:hover{
    box-shadow: 0 0.5rem 1.5rem rgba(28, 52, 255,0.39);
    }
`

export const GoogleSignInBtn = styled.button`
height: 45px;
    width: 45px;
    border-radius: 50%;
    outline: none;
    border:none;
    display: grid;
    place-content: center;
    background-color: #fff;
    box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.09);
    transition: 350ms;

    &:hover{
        box-shadow: 0 .5rem 1.3rem rgba(0,0,0,0.19);
    }
`

export const Box1 = styled.div`
content: ' ';
position: absolute;
height: 40vmax;
width: 40vmax;
border-radius: 1rem;
transition: 400ms ease-in-out;
/* transition-delay:  ${props => props.formSelector === "login" ? "400ms" : "200ms"} ; */
transition-delay: 100ms;
z-index: 8;
background: linear-gradient(45deg, #1CB5E0 0%, #000851 100%);
top:  ${props => props.formSelector === "login" ? "-50%" : "60%"} ;
right:  ${props => props.formSelector === "login" ? "10%" : "65%"};
transform: ${props => props.formSelector === "login" ? "rotate(50deg)" : "rotate(-20deg)"};
`

export const Box2 = styled.div`
content: ' ';
position: absolute;
height: 30vmax;
width: 30vmax;
border-radius: 1rem;
background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
transition: 400ms ease-in-out;
/* transition-delay:  ${props => props.formSelector === "login" ? "200ms" : "400ms"} ; */
transition-delay: 400ms;
z-index: 7;
background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
top:  ${props => props.formSelector === "login" ? "-5%" : "30%"} ;
right:  ${props => props.formSelector === "login" ? "-10%" : "55%"};
transform: ${props => props.formSelector === "login" ? "rotate(50deg)" : "rotate(-40deg)"};
`

export const Box3 = styled.div`
content: ' ';
position: absolute;
height: 50vmax;
width: 50vmax;
border-radius: 1rem;
background-image: linear-gradient(to right, #011344, #0081ab);
transition: 400ms ease-in-out;
/* transition-delay:  ${props => props.formSelector === "login" ? "200ms" : "400ms"} ; */
transition-delay: 200ms;
z-index: 10;
top:  ${props => props.formSelector === "login" ? "40%" : "-60%"} ;
right:  ${props => props.formSelector === "login" ? "-5%" : "55%"};
transform: ${props => props.formSelector === "login" ? "rotate(-50deg)" : "rotate(10deg)"};
`

export const Box4 = styled.div`
content: ' ';
position: absolute;
height: 25vmax;
width: 25vmax;
border-radius: 1rem;
background-image: linear-gradient(10deg, #009FFD, #0081ab);
transition: 400ms ease-in-out;
/* transition-delay:  ${props => props.formSelector === "login" ? "200ms" : "400ms"} ; */
transition-delay: 300ms;
z-index: 12;
top:  ${props => props.formSelector === "login" ? "35%" : "15%"} ;
right:  ${props => props.formSelector === "login" ? "23%" : "80%"};
transform: ${props => props.formSelector === "login" ? "rotate(10deg)" : "rotate(-10deg)"};
`