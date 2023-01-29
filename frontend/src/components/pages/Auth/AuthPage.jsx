import React, { useState } from 'react'
import LoginLayout from './Login.jsx'
import { AuthPageWrapper, Box1, Box2, Box3, Box4 } from "./styles.js"
import SignUpLayout from './signUp';

const AuthPage = () => {
  const [formSelector, setFormSelector] = useState('login')

  const changeForm = () => {
    setFormSelector(formSelector === 'login' ? 'signup' : 'login')
    console.log('hi Harxh!!!',formSelector);
  }

  return (
    <AuthPageWrapper>
      <LoginLayout changeForm={changeForm} />
      <SignUpLayout changeForm={changeForm} />

      <Box1 formSelector={formSelector} />
      <Box2 formSelector={formSelector} />
      <Box3 formSelector={formSelector} />
      <Box4 formSelector={formSelector} />
    </AuthPageWrapper>
  )
}

export default AuthPage 