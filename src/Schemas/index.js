import * as Yup from 'yup';
export const signupSchema=Yup.object({
    name:Yup.string().min(3).required("Please enter your name"),
    email:Yup.string().email('Please enter valid email').required("Please enter your email"),
    message:Yup.string().required("Please enter message")


})