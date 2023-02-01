import React, { useEffect, useState } from 'react'
import LoginLayout from './Login.jsx'
import { AuthPageWrapper, Box1, Box2, Box3, Box4 } from "./styles.js"
import SignUpLayout from './signUp';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorsInUserSlice } from '../../../redux/slices/userSlice.js';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated,error } = useSelector(state => state.user)
  
  const [formSelector, setFormSelector] = useState('login')
    useEffect(() => {
    if (isAuthenticated === true) {
      navigate('/')
    }
    if (error) {
      PopUp({
        text: error,
        icon: "error",
      })
      dispatch(clearErrorsInUserSlice())
    }
  }, [isAuthenticated, error])


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