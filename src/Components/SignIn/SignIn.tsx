import { useState } from 'react';
import {  Button, TextField } from '@mui/material';
import {loginUser, LoginCredentials} from '../../httpRequests/api';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const credentials: LoginCredentials = {
    Email: Email,
    Password: Password,
  };

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
      const token = await loginUser(credentials);
      localStorage.setItem('token', token);
      navigate("/");
    } catch (error : any) {
      setError(error.message || 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
        display: 'flex', 
        width:'max-content',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 40, 
        border:'1px solid grey',
        background: '#dedede',
        textAlign:'center',
        padding:25
        }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
      <label style={{ marginBottom: 3, fontSize: 22 }}>
        Sign In
      </label>
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
          <div>
          {error && <label  style={{ color: 'red' }}>{error}</label>}
          </div>
          <Button type="submit" variant="contained" disabled={isLoading} sx={{ mt: 2 }}>
          Sign In
          </Button>
        </form>
      </div>
      <Link to="/auth" style={{marginTop:10}}>
        Forgot your password?
      </Link>
      <Link to="/auth/signUp" style={{marginTop:10}}>
        Create a new account
      </Link>
    </div>
  );
};

export default SignIn;