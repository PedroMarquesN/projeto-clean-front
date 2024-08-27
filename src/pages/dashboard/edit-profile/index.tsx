import React from 'react';
import ProfileForm from '@/components/Form/ProfileForm';
import { useAuth } from '@/hooks/useAuth';

const EditProfilePage: React.FC = () => {
 useAuth();



  return (
    <div>
      <ProfileForm />
    </div>
  );
};

export default EditProfilePage;
