export type RegistrationFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegistrationFormErrors = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};
