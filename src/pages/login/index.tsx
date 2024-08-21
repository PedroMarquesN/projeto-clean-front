import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { LoginData } from '@/@types/auth';
import { authService } from '@/services/authService';
import { useAuth } from '@/context/AuthContext';


export const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 50px;
  gap: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const router = useRouter();
  const {setToken} = useAuth();

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      const response = await authService.login(data);
      localStorage.setItem('token', response.token);
      setToken(response.token);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <FormBase onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('email', { required: true })}
        label="Email"
        variant="outlined"

      />
      <TextField
        {...register('password', { required: true })}
        label="Password"
        type="password"
        variant="outlined"

      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </FormBase>
  );
};

export default Login;
