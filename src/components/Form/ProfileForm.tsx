import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getProfile } from "@/services/api";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { useAuth } from "@/context/AuthContext";

interface ProfileFormValues {
  name: string;
  address: string;
  birthDate: string;
  phone: string;
}

interface ProfileFormProps {
  userId: string;
}
const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 50px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfileForm: React.FC = () => {
  const { id } = useAuth();
  const { register, handleSubmit, setValue } = useForm<ProfileFormValues>();

  useEffect(() => {
    console.log("ID from useAuth:", id);
    if (id) {
      const fetchProfile = async () => {
        try {
          const profileData = await getProfile(id);
          console.log(profileData);
          setValue("name", profileData.name);
          setValue("address", profileData.adress);
          setValue("birthDate", profileData.bitrhDate);
          setValue("phone", profileData.phone);
        } catch (error) {
          console.error("Failed to fetch profile data", error);
        }
      };

      fetchProfile();
    }
  }, [id, setValue]);

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Updated profile data:", data);
    // Add your update logic here
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
        {...register("address")}
        label="Address"
        variant="outlined"
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        {...register("birthDate")}
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
