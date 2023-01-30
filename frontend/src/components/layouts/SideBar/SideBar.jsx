import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, SideBarElement, SideBarElementWrapper, SideBarExtender, SideBarImgWrapper, Wrapper } from './SideBar.styles'
import LogoutIcon from '@mui/icons-material/Logout';
import { AnimatePresence } from 'framer-motion';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import Img from "../../../assets/sidebarBg.jpg"
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

  const navigate = useNavigate()

  const [extended, setExtended] = useState(false)
  const { theme } = useSelector(state => state.native)
  return (
    <Wrapper theme={theme} extended={extended}>
      <Container theme={theme}>
        <SideBarImgWrapper extended={extended} ><img src={Img} /></SideBarImgWrapper>

        {/* //* open - close btn */}
        <SideBarElementWrapper theme={theme} extended={extended} >
          <AnimatePresence mode='wait'  >
            {
              extended ? (
                <SideBarExtender
                  key='open'
                  initial={{ rotate: '-90deg', opacity: 0 }}
                  animate={{ rotate: "0deg", opacity: 1 }}
                  exit={{ rotate: '-90deg', opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  theme={theme} onClick={() => { setExtended(!extended) }}
                >
                  <svg height="23" width="23" viewBox="0 0 64 64" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="10" x2="54" y2="54" stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"} strokeWidth="5" />
                    <line x1="54" y1="10" x2="10" y2="54" stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"} strokeWidth="5" />
                  </svg>
                </SideBarExtender>
              ) :
                (<SideBarExtender
                  key='close'
                  initial={{ rotate: '90deg', opacity: 0 }}
                  animate={{ rotate: "0deg", opacity: 1 }}
                  exit={{ rotate: '90deg', opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  theme={theme} onClick={() => { setExtended(!extended) }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="23" width="23" viewBox="0 0 64 64">
                    <g strokeLinecap="square" strokeWidth="5" fill="none" strokeLinejoin="miter" strokeMiterlimit="10">
                      <line x1="4" y1="32" x2="60" y2="32" stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}></line>
                      <line x1="32" y1="14" x2="60" y2="14" stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}></line>
                      <line x1="4" y1="50" x2="32" y2="50" stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}></line>
                    </g></svg>
                </SideBarExtender>)
            }
          </AnimatePresence>

          <SideBarElement theme={theme} >
            <AccountCircleOutlinedIcon />
          </SideBarElement>

          <SideBarElement theme={theme} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              height="23"
              width="23"
              stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}
              strokeWidth="30"
            ><g data-name="&lt;Group&gt;"><path d="M359,344.9a170.577,170.577,0,0,0,43.4-113.8c0-94.5-76.9-171.3-171.3-171.3-94.5,0-171.3,76.9-171.3,171.3s76.9,171.3,171.3,171.3A170.577,170.577,0,0,0,344.9,359l90.3,90.3a9.82,9.82,0,0,0,7.1,2.9,10.243,10.243,0,0,0,7.1-2.9,9.959,9.959,0,0,0,0-14.1ZM79.7,231.1c0-83.4,67.9-151.3,151.3-151.3s151.3,67.9,151.3,151.3S314.4,382.4,231,382.4,79.7,314.5,79.7,231.1Z" data-name="&lt;Compound Path&gt;" /></g></svg>

          </SideBarElement>
          <SideBarElement theme={theme} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              height="23"
              width="23"
              stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}
              strokeWidth="30"
            ><g data-name="&lt;Group&gt;"><path d="M359,344.9a170.577,170.577,0,0,0,43.4-113.8c0-94.5-76.9-171.3-171.3-171.3-94.5,0-171.3,76.9-171.3,171.3s76.9,171.3,171.3,171.3A170.577,170.577,0,0,0,344.9,359l90.3,90.3a9.82,9.82,0,0,0,7.1,2.9,10.243,10.243,0,0,0,7.1-2.9,9.959,9.959,0,0,0,0-14.1ZM79.7,231.1c0-83.4,67.9-151.3,151.3-151.3s151.3,67.9,151.3,151.3S314.4,382.4,231,382.4,79.7,314.5,79.7,231.1Z" data-name="&lt;Compound Path&gt;" /></g></svg>

          </SideBarElement>
          <SideBarElement theme={theme} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              height="23"
              width="23"
              stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}
              strokeWidth="30"
            ><g data-name="&lt;Group&gt;"><path d="M359,344.9a170.577,170.577,0,0,0,43.4-113.8c0-94.5-76.9-171.3-171.3-171.3-94.5,0-171.3,76.9-171.3,171.3s76.9,171.3,171.3,171.3A170.577,170.577,0,0,0,344.9,359l90.3,90.3a9.82,9.82,0,0,0,7.1,2.9,10.243,10.243,0,0,0,7.1-2.9,9.959,9.959,0,0,0,0-14.1ZM79.7,231.1c0-83.4,67.9-151.3,151.3-151.3s151.3,67.9,151.3,151.3S314.4,382.4,231,382.4,79.7,314.5,79.7,231.1Z" data-name="&lt;Compound Path&gt;" /></g></svg>

          </SideBarElement>
          <SideBarElement theme={theme} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              height="23"
              width="23"
              stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}
              strokeWidth="30"
            ><g data-name="&lt;Group&gt;"><path d="M359,344.9a170.577,170.577,0,0,0,43.4-113.8c0-94.5-76.9-171.3-171.3-171.3-94.5,0-171.3,76.9-171.3,171.3s76.9,171.3,171.3,171.3A170.577,170.577,0,0,0,344.9,359l90.3,90.3a9.82,9.82,0,0,0,7.1,2.9,10.243,10.243,0,0,0,7.1-2.9,9.959,9.959,0,0,0,0-14.1ZM79.7,231.1c0-83.4,67.9-151.3,151.3-151.3s151.3,67.9,151.3,151.3S314.4,382.4,231,382.4,79.7,314.5,79.7,231.1Z" data-name="&lt;Compound Path&gt;" /></g></svg>

          </SideBarElement>
          <SideBarElement theme={theme} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              height="23"
              width="23"
              stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}
              strokeWidth="30"
            ><g data-name="&lt;Group&gt;"><path d="M359,344.9a170.577,170.577,0,0,0,43.4-113.8c0-94.5-76.9-171.3-171.3-171.3-94.5,0-171.3,76.9-171.3,171.3s76.9,171.3,171.3,171.3A170.577,170.577,0,0,0,344.9,359l90.3,90.3a9.82,9.82,0,0,0,7.1,2.9,10.243,10.243,0,0,0,7.1-2.9,9.959,9.959,0,0,0,0-14.1ZM79.7,231.1c0-83.4,67.9-151.3,151.3-151.3s151.3,67.9,151.3,151.3S314.4,382.4,231,382.4,79.7,314.5,79.7,231.1Z" data-name="&lt;Compound Path&gt;" /></g></svg>

          </SideBarElement>

        </SideBarElementWrapper>


        {/* //* log out btn */}
        <SideBarElementWrapper theme={theme} extended={extended} btn="logout" onClick={() => { navigate('/login') }} >
          <SideBarElement theme={theme} ><LogoutIcon /></SideBarElement>
        </SideBarElementWrapper>
      </Container>
    </Wrapper>
  )
}

export default SideBar