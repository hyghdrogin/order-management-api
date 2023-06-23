export interface UserData extends RegisterData {
  id: number;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface loginData {
  email: string;
  password: string;
}

export interface JwtGenerationPayload {
  id: string;
  email: string;
}
