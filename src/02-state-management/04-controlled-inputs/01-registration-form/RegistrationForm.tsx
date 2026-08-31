import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import { initialFormData } from './RegistrationForm.data';
import type {
  RegistrationFormData,
  RegistrationFormErrors,
} from './RegistrationForm.types';

export default function RegistrationForm() {
  const [formData, setFormData] =
    useState<RegistrationFormData>(initialFormData);

  const [errors, setErrors] = useState<RegistrationFormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name as keyof RegistrationFormData;
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = (
    formData: RegistrationFormData,
  ): RegistrationFormErrors => {
    const errors: RegistrationFormErrors = {};

    if (formData.name.trim() === '') {
      errors.name = 'Full name is required.';
    }

    if (formData.email.trim() === '') {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (formData.password === '') {
      errors.password = 'Password is required.';
    }

    if (formData.confirmPassword === '') {
      errors.confirmPassword = 'Please confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log('Registration successful:', formData);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? 'name-error' : undefined}
      />

      {errors.name && (
        <p id="name-error" role="alert">
          {errors.name}
        </p>
      )}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? 'email-error' : undefined}
      />

      {errors.email && (
        <p id="email-error" role="alert">
          {errors.email}
        </p>
      )}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        aria-invalid={Boolean(errors.password)}
        aria-describedby={errors.password ? 'password-error' : undefined}
      />

      {errors.password && (
        <p id="password-error" role="alert">
          {errors.password}
        </p>
      )}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        aria-invalid={Boolean(errors.confirmPassword)}
        aria-describedby={
          errors.confirmPassword ? 'confirm-password-error' : undefined
        }
      />

      {errors.confirmPassword && (
        <p id="confirm-password-error" role="alert">
          {errors.confirmPassword}
        </p>
      )}

      <button type="submit">Create Account</button>
    </form>
  );
}
