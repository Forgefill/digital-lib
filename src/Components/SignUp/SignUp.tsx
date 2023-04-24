import { useState } from 'react';
import {  Button, TextField, Typography } from '@mui/material';
import { registerUser} from '../../httpRequests/api';
import {  useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const token = await registerUser({ Email, Username, Password, ConfirmPassword });
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
        Register
      </label>
        <form onSubmit={handleSubmit}>
        <TextField
            id="username"
            label="Username"
            type='text'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={Username}
            onChange={handleUsernameChange}
          />
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
          <TextField
            id="password"
            label="Password again"
            type='password'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={ConfirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <div>
          {error && <label  style={{ color: 'red' }}>{error}</label>}
          </div>
          <Button type="submit" variant="contained" disabled={isLoading} sx={{ mt: 2 }}>
            Sign In
          </Button>
        </form>
        <Link to="/auth/signIn" style={{marginTop:10}}>
          Already have an account?
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;