import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Router, useRouter } from 'next/router';
import { AuthContextData } from '@/@types/auth';


interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [id, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const router = useRouter();

  const signIn = (token: string, userId: string, userRole: string) => {
    setToken(token);
    setUserId(userId);
    setRole(userRole);
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('userRole', userRole);
  };

  const signOut = () => {
    setToken(null);
    setUserId(null);
    setRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    router.push('/');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUserId = localStorage.getItem('userId');
    const storedUserRole = localStorage.getItem('userRole');

    if (storedToken && storedUserId && storedUserRole) {
      setToken(storedToken);
      setUserId(storedUserId);
      setRole(storedUserRole);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, id, role, setToken, setUserId, setRole, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};