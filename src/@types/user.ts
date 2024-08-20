export interface User {
    id: number;
    email: string;
  }
  
  export interface Profile {
    id: number;
    name: string;
    adress: string;
    phone: string;
    bithday: string;
  }
  
  export interface UpdateProfileData {
    name?: string;
    bithday?: string;
    adress?: string;
    phone?: string;
  }
  