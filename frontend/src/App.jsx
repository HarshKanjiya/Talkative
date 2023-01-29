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
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage/>}/>
        </Routes>


      </div>
  )
}

export default App

