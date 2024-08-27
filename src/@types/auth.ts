export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    token: string;
    userId: string;
    role: string;
  }

  
  export interface RegisterData {
    email: string;
    password: string;
  }

  

  export interface AuthContextData {
    token: string | null;
    id: string | null;
    role: string | null;
    setToken: (token: string) => void;
    setUserId: (id: string) => void;
    setRole: (role: string) => void;
    signIn: (token: string, userId: string, userRole: string) => void;
    signOut: () => void;
  }