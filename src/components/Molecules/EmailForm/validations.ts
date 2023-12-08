export const validations = {
  firstName: {
    minCharacters: 2,
    maxCharacters: 50,
    minError: "First name is too short",
    maxError: "First name is too long",
    requiredError: "Required",
    invalidError: "First name must not contain a number",
  },
  lastName: {
    minCharacters: 2,
    maxCharacters: 50,
    minError: "Last name is too short",
    maxError: "Last name is too long",
    requiredError: "Required",
    invalidError: "Last name must not contain a number",
  },
  email: {
    requiredError: "Required",
    invalidError: "Invalid Email",
  },
  subject: {
    minCharacters: 2,
    maxCharacters: 50,
    minError: "Subject is too short",
    maxError: "Subject should only contain up to 40 characters",
    requiredError: "Required",
    invalidError: "Subject must not contain a number",
  },
  message: {
    minCharacters: 2,
    maxCharacters: 50,
    minError: "Message is too short",
    maxError: "Message should only contain up to 100 characters",
    requiredError: "Required",
  },
};
