import React, { useState } from 'react'
import LoginLayout from './Login.jsx'
import { AuthPageWrapper } from "./styles.js"
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
    </AuthPageWrapper>
  )
}

export default AuthPage 