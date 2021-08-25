import React from 'react'
import {Paper,Container, Grid} from '@material-ui/core'
import {Formik,Form} from 'formik'
import TextInput from '../../components/textInput/textinput'
import './register.scss'
import { registerInitialValues, registerValidationSchema } from '../../components/validation/validation'
import CustomButton from '../../components/custombutton/button'
const Register: React.FC = () => {
    return (
        <Container>
            <div className='container-wrapper'>
                <Paper variant='outlined' square>
                   <div className='form-wrapper'>
                        <Formik
                            initialValues={{...registerInitialValues}}
                            validationSchema={registerValidationSchema}
                            onSubmit = {values => {
                                console.log(values)
                            }}
                        >
                            <Form>
                                <Grid container spacing={2}>
                                    <div className='form-header'>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <span className='form-header-text'>Enter your details and Sign Up for free!</span>
                                        </Grid>
                                    </div>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <TextInput name='firstName' type='text' variant='outlined' label='First Name'/>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <TextInput name='lastName' type='text' variant='outlined' label='Last Name'/>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <TextInput name='email' type='email' variant='outlined' label='Email Address'/>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <TextInput name='password' type='password' variant='outlined' label='Password'/>
                                    </Grid>
                                </Grid>
                                <div className='reg-btn'>
                                    <CustomButton color='primary' className='btn-form' text='Sign Up' variant='contained'/>
                                </div>
                            </Form>
                        </Formik>
                   </div>
                </Paper>
            </div>
        </Container>
    )
}
export default Register