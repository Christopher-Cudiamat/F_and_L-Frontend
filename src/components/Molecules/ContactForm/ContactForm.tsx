'use client';

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/Atoms/Input/Input';
import Textarea from '@/components/Atoms/Textarea/TextArea';
import Button from '@/components/Atoms/Button/Button';

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  subject: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  message: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  access_key: Yup.string().required('Required'),
});

const ContactForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        access_key: process.env.NEXT_PUBLIC_WEB_3_FORMS_API_KEY,
      }}
      validationSchema={ContactFormSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const json = JSON.stringify(values);

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: json,
        });
        const result = await response.json();
        if (result.success) {
          console.log(result);
          setSubmitting(false);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className='w-full flex flex-col md:flex-row gap-x-8'>
            <Input
              id='firstName'
              name='firstName'
              label='First Name'
              value={values.firstName}
              onChange={handleChange}
              required
            />
            <Input
              id='lastName'
              name='lastName'
              label='Last Name'
              value={values.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <Input
            id='email'
            name='email'
            label='Email'
            value={values.email}
            onChange={handleChange}
            required
          />
          <Input
            id='subject'
            name='subject'
            label='Subject'
            value={values.subject}
            onChange={handleChange}
            required
          />
          {errors.email && touched.email && errors.email}
          <Textarea
            id='message'
            name='message'
            label='Message'
            value={values.message}
            onChange={handleChange}
            required
          />
          {/* Web3Form configurations */}
          <input
            type='hidden'
            name='subject'
            value='New Email From FL Real estate'
          ></input>
          <input
            type='hidden'
            name='from_name'
            value={`${values.firstName} ${values.lastName}`}
          ></input>
          <Button
            type='submit'
            isLoading={isSubmitting}
            className='lg:w-40 text-center'
          >
            Submit {isSubmitting}
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
