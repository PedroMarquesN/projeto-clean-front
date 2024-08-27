import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getProfile } from "@/services/api";
import { Button, TextField, Typography } from "@mui/material";
import { useAuth } from "@/context/AuthContext";
import { FormBase } from "./styles";
import { ProfileFormValues } from "@/@types/profile";
import { useRouter } from "next/router";



const ProfileForm: React.FC = () => {
  const { id } = useAuth();
  const { register, handleSubmit, setValue } = useForm<ProfileFormValues>();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const fetchProfile = async () => {
        try {
          const profileData = await getProfile(id);

          setValue("name", profileData.name);
          setValue("adress", profileData.adress);
          setValue("bitrhDate", profileData.bitrhDate);
          setValue("phone", profileData.phone);
        } catch (error) {
          console.error("Failed to fetch profile data", error);
        }
      };
      fetchProfile();
    }
  }, [id, setValue]);

  const updateProfile = async (userId: string, data: ProfileFormValues) => {
    try {
      const token = localStorage.getItem('token'); 
      
      const response = await fetch(`https://localhost:7137/api/profile/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
  
      const result = await response.json();
      console.log('Profile updated successfully:', result);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  
  const onSubmit = (data: ProfileFormValues) => {
    if (id) { 
      updateProfile(id, data);
      router.push('/dashboard');
    } else {
      console.error("User ID is not defined");
    }
  };
  

  return (
    <FormBase onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom>
        Edit Profile
      </Typography>
      <TextField
        {...register("name")}
        label="Name"
        variant="outlined"
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        {...register("adress")}
        label="Address"
        variant="outlined"
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        {...register("bitrhDate")}
        label="Birth Date"
        variant="outlined"
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        {...register("phone")}
        label="Phone"
        variant="outlined"
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </FormBase>
  );
};

export default ProfileForm;
