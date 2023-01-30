import React, { useState } from 'react'
import LoginLayout from './Login.jsx'
import { AuthPageWrapper, Box1, Box2, Box3, Box4 } from "./styles.js"
import SignUpLayout from './signUp';

const AuthPage = () => {
  const [formSelector, setFormSelector] = useState('signup')

  const changeForm = () => {
    setFormSelector(formSelector === 'login' ? 'signup' : 'login')
  }

  return (
    <AuthPageWrapper
      key="authPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration:0.3 }}
    >
      <LoginLayout changeForm={changeForm} formSelector={formSelector} />
      <SignUpLayout changeForm={changeForm} formSelector={formSelector} />

      <Box1 formSelector={formSelector} />
      <Box2 formSelector={formSelector} />
      <Box3 formSelector={formSelector} />
      <Box4 formSelector={formSelector} />
    </AuthPageWrapper>
  )
}

export default AuthPage 