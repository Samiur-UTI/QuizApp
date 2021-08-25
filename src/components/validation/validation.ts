import * as Yup from 'yup'

interface loginInitials {
    email: string;
    password: string;
}
interface registerInitials {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export const loginInitialValues: loginInitials = {
    email:'',
    password:''
}
export const registerInitialValues: registerInitials = {
    firstName:'',
    lastName: '',
    email:'',
    password:''
}
export const loginValidationSchema = Yup.object().shape({
    email:Yup.string()
          .email('Please Enter a Valid Email Address')
          .required('Cannot proceed without an email address'),
    password:Yup.string()
            .min(8,'Password length should have a minimum of 8 characters')
            .required('Cannot login without a password')
})
export const registerValidationSchema = Yup.object().shape({
    firstName:Yup.string()
              .required('Please Enter Your First Name'),
    lastName:Yup.string()
             .required('Please Enter Last Name'),
    email:Yup.string()
             .email('Please Enter a Valid Email Address')
             .required('Cannot proceed without an email address'),
    password:Yup.string()
               .min(8,'Password length should have a minimum of 8 characters')
               .required('Cannot login without a password')
})
