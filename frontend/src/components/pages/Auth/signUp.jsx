import React from 'react'
import { Form, FormHeader, FormWrapper, Header, InputField } from './styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SignUpLayout = ({ changeForm }) => {
    return (
        <FormWrapper>

            <Header>
                <button> <ArrowBackIcon /> </button>
                <p>Already have an Account? <span>Log in</span></p>
            </Header>


            {/* //* login form Starts */}
            <Form>
                <FormHeader>
                    <p className='auth-FormHeader-maintext' >signup</p>
                    <p className='auth-FormHeader-subtext' >The Security comes before Usablity</p>
                </FormHeader>


            </Form>

            <div></div>

        </FormWrapper>
    )
}

export default SignUpLayout