// pages/register.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { registerUser } from '@/services/api';
import RegisterForm from '@/components/RegisterForm';
import { RegisterFormValues } from '@/@types/user';

const RegisterPage: React.FC = () => {
  const router = useRouter();

  const handleRegister = async (data: RegisterFormValues) => {
    try {
      await registerUser(data);
      router.push('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
