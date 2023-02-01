import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Form, FormFooter, FormHeader, FormWrapper, GoogleSignInBtn, Header, Input, InputField, SubmitButtonWrapper } from './styles'
import { useNavigate } from "react-router-dom"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BACKEND_URL } from './../../../config';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../../redux/thunk/userThunk';

const SignUpLayout = ({ formSelector, changeForm }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    //* validity
    const name_REGEX = new RegExp("^[a-zA-Z0-9 ]*$");
    const email_REGEX = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{1,4}$");

    const [nameValidity, setNameValidity] = useState(false)  //false means not valid
    const [emailValidity, setEmailValidity] = useState(false)  //false means not valid
    const [passwordValidity, setPasswordValidity] = useState(false)  //false means not valid


    const HelperName = (e) => {
        setName(e.target.value);
        if (e.target.value.trim() === "") {
            return setNameValidity(false)
        }
        (name_REGEX.test(e.target.value)) ? setNameValidity(true) : setNameValidity(false)
    }

    const HelperEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.trim() === "") {
            return setEmailValidity(false)
        }
        (email_REGEX.test(e.target.value)) ? setEmailValidity(true) : setEmailValidity(false)
    }

    const HelperSubmitForm = (e) => {
        e.preventDefault()
        dispatch(registerThunk({ name, email, password }))

    }

    const HelperGoogleAuth = () => {
        window.open(`${BACKEND_URL}/auth/google/callback`, "_self");
    }

    return (
        <AnimatePresence mode="wait">
            {
                formSelector === "signup" ?
                    (<FormWrapper
                        key="actual-form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Header>
                            <p>Already have an Account? <span onClick={changeForm} >Log in</span></p>
                        </Header>


                        {/* //* login form Starts */}
                        <Form onSubmit={(e) => { HelperSubmitForm(e) }} layout >
                            <FormHeader layout>
                                <p className='auth-FormHeader-maintext' >sign up</p>
                                <p className='auth-FormHeader-subtext' >Secure your communication with Talkative</p>
                            </FormHeader>


                            <InputField layout validity={nameValidity} >
                                <div className='auth-InputField-logo' > <AccountCircleOutlinedIcon /> </div>
                                <Input placeholder='Name' type="text" value={name} onChange={(e) => { HelperName(e) }} />
                                <div className='auth-InputField-check'> <CheckCircleOutlinedIcon /> </div>
                            </InputField>


                            <InputField layout validity={emailValidity} >
                                <div className='auth-InputField-logo' > <EmailOutlinedIcon /> </div>
                                <Input placeholder='Email' type="email" value={email} onChange={(e) => { HelperEmail(e) }} />
                                <div className='auth-InputField-check'> <CheckCircleOutlinedIcon /> </div>
                            </InputField>


                            <InputField layout validity={passwordValidity} >
                                <div className='auth-InputField-logo' > <KeyOutlinedIcon /> </div>
                                <Input placeholder='Password' type={showPassword ? "text" : "Password"} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                <div className='auth-InputField-eye-button'
                                    onClick={() => { setShowPassword(!showPassword) }}>
                                    {
                                        showPassword ? (<VisibilityOffIcon />) : (<VisibilityIcon />)
                                    }
                                </div>
                            </InputField>

                            <FormFooter>

                                {/* //* native sign in btn */}
                                <SubmitButtonWrapper type='submit' >
                                    <p>SIGN UP</p>
                                    <div className='auth-footer-submit-btn-arrow' > <ArrowForwardIcon /> </div>
                                </SubmitButtonWrapper>

                                <p className='auth-footer-or'>or</p>

                                {/* //*google sign in btn */}
                                <GoogleSignInBtn onClick={HelperGoogleAuth} >
                                    <svg
                                        width="25"
                                        height="37"
                                        viewBox="0 0 25 25"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <path
                                                d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                                                fill="#4285F4"
                                            />
                                            <path
                                                d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                                                fill="#34A853"
                                            />
                                            <path
                                                d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                                                fill="#FBBC05"
                                            />
                                            <path
                                                d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                                                fill="#EA4335"
                                            />
                                        </g>
                                    </svg>
                                    <p></p>
                                </GoogleSignInBtn>

                            </FormFooter>
                        </Form>
                    </FormWrapper>) : (<FormWrapper key="blank-part" ></FormWrapper>)
            }
        </AnimatePresence>
    )
}

export default SignUpLayout