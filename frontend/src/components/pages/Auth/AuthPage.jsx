import React, { useState } from 'react'
import LoginLayout from './Login.jsx'
import { AuthPageWrapper } from "./styles.js"

const AuthPage = () => {
  const [formSelector, setFormSelector] = useState('login')

  const changeForm = () => {
    setFormSelector(formSelector === 'login' ? 'signup' : 'login')
  }

  return (
    <AuthPageWrapper>
      <LoginLayout changeForm={changeForm} />
    </AuthPageWrapper>
  )
}

export default AuthPage 