const apiBaseURL = "https://localhost:44322"

export type LoginCredentials = {
  Email: string;
  Password: string;
};

export const loginUser = async (credentials: LoginCredentials): Promise<string> => {
  const response = await fetch(`${apiBaseURL}/Account/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      
    }, 
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to sign in');
  }
  const token = data.token;
  localStorage.setItem('token', token);
  return token;
};

type RegisterCredentials = {
  Email: string;
  Username:string;
  Password: string;
  ConfirmPassword: string;
};

export const registerUser = async (credentials: RegisterCredentials): Promise<string> => {
  const response = await fetch(`${apiBaseURL}/Account/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to register');
  }
  const token = data.token;
  localStorage.setItem('token', token);
  return token;
};

export default {
  registerUser,
  loginUser,
};