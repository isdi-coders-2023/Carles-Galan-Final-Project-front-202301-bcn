export interface UserStructure {
  username: string;
  id: string;
  token: string;
}

export interface UserState extends UserStructure {
  isLogged: boolean;
}
