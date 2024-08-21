export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    token: string;
  }
  
  export interface RegisterData {
    email: string;
    password: string;
  }
  

  export interface AuthContextData {
    token: string | null;
    setToken: (token: string) => void;
    signIn: (token: string) => void;
    signOut: () => void;
  }