import "./App.css"
import styled from "@emotion/styled"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/Home/Home"
import { useState } from "react"
import { useSelector } from "react-redux"
import AuthPage from "./components/pages/Auth/AuthPage"



function App() {
  const { theme } = useSelector(state => state.native)

  return (
      <div className="App" id={theme} >
      <Bgdiv theme={theme} ></Bgdiv>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage/>}/>
        </Routes>


      </div>
  )
}

export default App

const Bgdiv = styled.div`
position: absolute;
height: 100%;
width: 100%;
content:" ";
background-color:${props => (props.theme === "light"? "rgb(237, 241, 243)":"rgb(4, 19, 32)")};
z-index: -10;
transition: 300ms;
`