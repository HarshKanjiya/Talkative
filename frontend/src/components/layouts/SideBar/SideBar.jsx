import React, { useState } from 'react'
import { Container, SideBarElement, SideBarElementWrapper, SideBarExtender, SideBarImgWrapper, Wrapper } from './SideBar.styles'
import LogoutIcon from '@mui/icons-material/Logout';
import { AnimatePresence } from 'framer-motion';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InfoIcon from '@mui/icons-material/Info';
import BlockIcon from '@mui/icons-material/Block';
import PersonIcon from '@mui/icons-material/Person';

import Img from "../../../assets/sidebarBg.jpg"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOutThunk } from '../../../redux/thunk/userThunk';
import { BACKEND_URL } from '../../../config';

import { motion } from "framer-motion"
import { Badge } from '@mui/material';
import { setScreen } from '../../../redux/slices/nativeSlice';

const SideBar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userData, loading } = useSelector(state => state.user)

  const [extended, setExtended] = useState(false)
  const { theme } = useSelector(state => state.native)



  const HelperSignOut = () => {
    if (!userData) return;
    if (userData.authType === "native") {
      return dispatch(logOutThunk({}))
    }
    if (userData.authType === "google") {
      dispatch(logOutThunk({}))
      window.open(`${BACKEND_URL}/auth/logout`, "_self");
    }
  }


  return (
    <Wrapper theme={theme} extended={extended}>
      <Container theme={theme}>

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
                  theme={theme}
                  onClick={() => { setExtended(!extended) }}
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
                  theme={theme}
                  onClick={() => { setExtended(!extended) }}
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


          {/* //* Profile */}
          <SideBarElement theme={theme} extended={extended} onClick={() => { dispatch(setScreen('profile')) }} >
            <abbr title="Profile" className="modeAbbr" ><AccountCircleOutlinedIcon /></abbr>
            <AnimatePresence>
              {
                extended ?
                  <motion.p
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}

                  >Profile</motion.p>
                  :
                  <motion.p key="blank"> </motion.p>
              }
            </AnimatePresence>
          </SideBarElement>

          {/* //*  Add friend */}
          <SideBarElement theme={theme} extended={extended} onClick={() => { dispatch(setScreen('addfriend')) }}>
            <abbr title="Add Friend" className="modeAbbr" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 100 100"
                height="23"
                width="23"
                stroke={theme === "light" ? "rgb(20,20,20)" : "rgb(240, 240, 240)"}
                strokeWidth="12"
              >
                <g data-name="&lt;Group&gt;">
                  <line x1="50" y1="5" x2="50" y2="95" ></line>
                  <line x1="5" y1="50" x2="95" y2="50" ></line>
                </g></svg>
            </abbr>
            {
              extended ?
                <motion.p
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}

                >Add Friend</motion.p>
                :
                <motion.p key="blank"> </motion.p>
            }
          </SideBarElement>

          {/* //* requests */}
          <SideBarElement theme={theme} extended={extended} onClick={() => { dispatch(setScreen('requests')) }}>
            <abbr title="Requests" className="modeAbbr" >
              <Badge variant="dot" color="primary" invisible={userData && userData.requests && userData.requests.length < 1} >
                <PersonIcon />
              </Badge>
            </abbr>
            {
              extended ?
                <motion.p
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}

                >Requests</motion.p>
                :
                <motion.p key="blank"> </motion.p>
            }
          </SideBarElement>

          {/* //* block list */}
          <SideBarElement theme={theme} extended={extended} onClick={() => { dispatch(setScreen('blocklist')) }}>
            <abbr title="Block List" className="modeAbbr" >
              <BlockIcon />
            </abbr>
            {
              extended ?
                <motion.p
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}

                >Block List</motion.p>
                :
                <motion.p key="blank"> </motion.p>
            }
          </SideBarElement>

          {/* //* About me */}
          <SideBarElement theme={theme} extended={extended} onClick={() => { dispatch(setScreen('aboutme')) }}>
            <abbr title="About Me" className="modeAbbr" >
              <InfoIcon />
            </abbr>
            {
              extended ?
                <motion.p
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}

                >About Me</motion.p>
                :
                <motion.p key="blank"> </motion.p>
            }
          </SideBarElement>
        </SideBarElementWrapper>


        {/* //* log out btn */}
        <SideBarElementWrapper theme={theme} extended={extended} btn="logout" onClick={HelperSignOut} >
          <SideBarElement theme={theme} extended={extended} >
            <abbr title="Log Out" className="modeAbbr" >
              <LogoutIcon />
            </abbr>
            {
              extended ?
                <motion.p
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}

                >Log Out</motion.p>
                :
                <motion.p key="blank"> </motion.p>
            }</SideBarElement>
        </SideBarElementWrapper>

      </Container>
    </Wrapper>
  )
}

export default SideBar