'use client';

import React, { useState } from 'react';
import { Formik } from 'formik';
import { ContactFormSchema } from './contactFormSchema';
import Input from '@/components/Atoms/Input/Input';
import Textarea from '@/components/Atoms/Textarea/TextArea';
import Button from '@/components/Atoms/Button/Button';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmited] = useState(false);
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
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={ContactFormSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const json = JSON.stringify(values);

        const response = await fetch(process.env.NEXT_PUBLIC_WEB_3_FORM_URL as string, {
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
          setIsSubmited(true);
          resetForm();
        }
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className='w-full flex flex-col md:flex-row gap-x-8'>
            <Input
              id='firstName'
              name='firstName'
              label='First Name'
              value={values.firstName}
              errorMessage={errors.firstName}
              onChange={handleChange}
              required
            />
            <Input
              id='lastName'
              name='lastName'
              label='Last Name'
              value={values.lastName}
              errorMessage={errors.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <Input
            id='email'
            name='email'
            label='Email'
            value={values.email}
            errorMessage={errors.email}
            onChange={handleChange}
            required
          />
          <Input
            id='subject'
            name='subject'
            label='Subject'
            value={values.subject}
            errorMessage={errors.subject}
            onChange={handleChange}
            required
          />
          <Textarea
            id='message'
            name='message'
            label='Message'
            value={values.message}
            errorMessage={errors.message}
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
          <div className='flex justify-end'>
            <Button
              type='submit'
              isLoading={isSubmitting}
              className='lg:w-40 mt-10 text-center uppercase'
            >
              {!isSubmitted ? 'Submit' : 'Submitted'}
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
