import React from 'react';
import ProfileForm from '@/components/Form/ProfileForm';
import { useAuthenticate } from '@/hooks/useAuth';


const EditProfilePage: React.FC = () => {
 useAuthenticate();



  return (
    <div>
      <ProfileForm />
    </div>
  );
};

export default EditProfilePage;
