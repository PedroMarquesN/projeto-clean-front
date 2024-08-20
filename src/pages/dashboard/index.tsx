import { useAuth } from '@/hooks/useAuth';
import React from 'react';


const Dashboard: React.FC = () => {
  useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the protected dashboard!</p>
    </div>
  );
};

export default Dashboard;

