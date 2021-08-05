import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import '../App.css';
import emailjs from 'emailjs-com';


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_grg125k', 'template_19ruejo', e.target, 'user_2WJp3NxrfSZ3fxOIIc44R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

export const Contact = () => {
  const validate = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Name is Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
      message: Yup.string()
      .max(45, 'Must be 45 characters or less')
      .required('Message is required'),
  })
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div className="contact-form">
          <h1 className="my-4 font-weight-bold .display-4" className="contact-form">Contact Us</h1>
          <Form className="contact-form" >
            <TextField label="Name" name="name" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Message" name="message" type="text" />
            <button className="btn btn-dark mt-3" type="submit"> Submit </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset"> Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Contact;
