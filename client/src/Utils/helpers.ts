export const checkUsernameValidation = (value?: string) => {
  if (!value) return false;

  //Between 1 & 35 characters
  if (!/^.{8,35}$/.test(value)) return false;

  return true;
};

export const checkPasswordValidation = (value?: string) => {
  if (!value) return false;

  //Minimum eight characters, at least one letter and one number
  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) return false;

  return true;
};

const helpers = {
  checkUsernameValidation,
  checkPasswordValidation,
};

export default helpers;
