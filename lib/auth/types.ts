export interface SessionPayload {
  userId: string;
  username: string;
  expiresAt: Date;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  error?: string;
}
