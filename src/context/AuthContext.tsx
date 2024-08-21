import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContextData } from '@/@types/auth';



const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      router.push('/login');
    }
  }, []);

  const signIn = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    router.push('/dashboard');
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setToken(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
