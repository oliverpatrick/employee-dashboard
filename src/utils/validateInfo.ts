export default function validateInfo(values: {
  email: string;
  password: string;
}) {
  let errors = {
    email: '',
    password: ''
  };

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email or Password is incorrect.';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Email or Password is incorrect.';
  }

  return errors;
}
