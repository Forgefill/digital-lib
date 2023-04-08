import { useState } from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import loginUser from '../../httpRequests/api';

type LoginFormProps = {
    setIsLogin: (isLogin: boolean) => void;
  };

const LoginForm = ({ setIsLogin }: LoginFormProps) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const token = await loginUser({ Email, Password });
      localStorage.setItem('token', token);
      setIsLogin(true);
      // Redirect to dashboard or home page
    } catch (error : any) {
      setError(error.message || 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ 
        display: 'flex', 
        width:'max-content',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 8, 
        border:'1px solid grey',
        background: '#dedede',
        textAlign:'center',
        p:2
        }}>
      <Box sx={{ width: '100%', maxWidth: 400 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Sign In
      </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={Email}
            onChange={handleEmailChange}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={Password}
            onChange={handlePasswordChange}
          />
          {error && <Typography variant="body2" sx={{ color: 'red' }}>{error}</Typography>}
          <Button type="submit" variant="contained" disabled={isLoading} sx={{ mt: 2 }}>
          Sign In
          </Button>
        </form>
      </Box>
      <Link href="#" variant="body2" marginTop={1}>
            Forgot your password?
      </Link>
      <Link href="#" variant="body2" marginTop={1}>
            Create a new account
      </Link>
    </Box>
  );
};

export default LoginForm;