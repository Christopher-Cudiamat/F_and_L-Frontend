import * as Yup from 'yup';
import { validations } from './validations';

export const EmailFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(validations.firstName.minCharacters, validations.firstName.minError)
    .max(validations.firstName.maxCharacters, validations.firstName.maxError)
    .required(validations.firstName.requiredError),
  lastName: Yup.string()
    .min(validations.lastName.minCharacters, validations.lastName.minError)
    .max(validations.lastName.maxCharacters, validations.lastName.maxError)
    .required(validations.lastName.requiredError),
  email: Yup.string()
    .email(validations.email.invalidError)
    .required(validations.email.requiredError),
  subject: Yup.string()
    .min(validations.subject.minCharacters, validations.subject.minError)
    .max(validations.subject.maxCharacters, validations.subject.maxError)
    .required(validations.subject.requiredError),
  message: Yup.string()
    .min(validations.message.minCharacters, validations.message.minError)
    .max(validations.message.maxCharacters, validations.message.maxError)
    .required(validations.message.requiredError),
  access_key: Yup.string().required('Required'),
});
