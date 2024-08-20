import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { LoginData } from '@/@types/auth';
import { authService } from '@/services/authService';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 50px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      const response = await authService.login(data);
      localStorage.setItem('token', response.token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('email', { required: true })}
        label="Email"
        variant="outlined"
        margin="normal"
      />
      <TextField
        {...register('password', { required: true })}
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </LoginForm>
  );
};

export default Login;
