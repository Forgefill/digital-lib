const apiBaseURL = "https://localhost:44322"

type LoginCredentials = {
  Email: string;
  Password: string;
};

const loginUser = async (credentials: LoginCredentials): Promise<string> => {
  const response = await fetch(`${apiBaseURL}/Account/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to log in');
  }
  const token = data.token;
  localStorage.setItem('token', token);
  return token;
};

export default loginUser;