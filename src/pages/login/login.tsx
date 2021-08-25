import React from 'react'
import { Container,Paper } from '@material-ui/core'
import { Formik,Form } from 'formik'
import CustomButton from '../../components/custombutton/button'
import TextInput from '../../components/textInput/textinput'
import { loginInitialValues,loginValidationSchema } from '../../components/validation/validation'
import './login.scss'
const Login: React.FC = () => {
    return (
        <Container>
            <Paper className='form-wrapper' variant='outlined' square>
                <Formik 
                    initialValues={{...loginInitialValues}}
                    validationSchema={loginValidationSchema}
                    onSubmit={
                        values => {
                            console.log(values)
                        }
                    }
                >
                    <Form>
                        <div className='form-container'>
                            <span className='form-header'>
                                Sign In
                            </span>
                            <TextInput name='email' type='email' variant='outlined' label='Enter Email'/>
                            <TextInput name='password' type='password' variant='outlined' label='Enter Password'/>
                            <CustomButton color='primary' className='btn-form' text='login' variant='contained' />
                        </div>
                    </Form>
                </Formik>
            </Paper>
        </Container>
    )
}
export default Login
