import "./App.css"
import styled from "@emotion/styled"
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./components/pages/Home/Home"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AuthPage from "./components/pages/Auth/AuthPage"
import { AnimatePresence } from "framer-motion"
import { googleAuthThunk, routineThunk } from "./redux/thunk/userThunk"

import { io } from "socket.io-client"

export const socket = io("http://localhost:5555")

function App() {

  const location = useLocation();
  const dispatch = useDispatch();

  const { theme } = useSelector(state => state.native)
  const { isAuthenticated } = useSelector(state => state.user)

  

  useEffect(() => {
    dispatch(routineThunk({}))
    dispatch(googleAuthThunk({}))
    socket.on('connect', (socket) => {
      console.log('hi Harxh!!!');
    })
  }, [])



  return (
    <div className="App" id={theme} >
      <Bgdiv theme={theme} ></Bgdiv>
      <AnimatePresence mode="wait" >
        <Routes key={location.pathname} location={location} >
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </AnimatePresence>


    </div>
  )
}

export default App

const Bgdiv = styled.div`
position: absolute;
height: 100%;
width: 100%;
content:" ";
background-color:${props => (props.theme === "light" ? "rgb(237, 241, 243)" : "rgb(4, 19, 32)")};
z-index: -10;
transition: 300ms;
`