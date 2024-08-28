// components/RegisterForm/RegisterForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { RegisterFormValues } from '@/@types/user';
import styled from 'styled-components';

interface RegisterFormProps {
  onSubmit: (data: RegisterFormValues) => void;
}


export const FormBaseRegister = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 500px;
  margin: auto;
  padding: 50px;
  gap: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<RegisterFormValues>();

  return (
    <FormBaseRegister
      onSubmit={handleSubmit(onSubmit)}

    >

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField label="Email" type="email" {...field} />}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField label="Password" type="password" {...field} />}
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </FormBaseRegister>
  );
};

export default RegisterForm;
