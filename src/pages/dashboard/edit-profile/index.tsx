import React from 'react';
import ProfileForm from '@/components/Form/ProfileForm';
import { useAuth } from '@/context/AuthContext';

const EditProfilePage: React.FC = () => {
  const { id } = useAuth();

  if (!id) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <ProfileForm />
    </div>
  );
};

export default EditProfilePage;
