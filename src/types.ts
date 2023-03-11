export interface User {
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

interface UiStructure {
  isLoading: boolean;
}

export default UiStructure;
