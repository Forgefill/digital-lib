import { useState } from 'react';
import {  Button, TextField } from '@mui/material';
import { registerUser, RegisterCredentials } from '../../httpRequests/authApi';
import {  useNavigate, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const credentials: RegisterCredentials = {
    Email: Email,
    Username:Username,
    Password:Password,
    ConfirmPassword:ConfirmPassword,
  };

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

    const result = await registerUser(credentials);

    if(result.data){
      localStorage.setItem('token', result.data.token);
      navigate("/");
    }
    else if(result.errors){
      setError(result.errors.join('\n'));
    }
    setIsLoading(false);
  };

  return (
    <div className="box" style={{ borderRadius: 40, border: '1px solid grey', background: '#dedede', padding: 25, width:400 }}>
      <div className='block'>
        <h1 className="title is-4 has-text-centered">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control  has-icons-left">
              <input className="input" type="text" placeholder="Enter your username" required value={Username} onChange={handleUsernameChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control  has-icons-left">
              <input className="input" type="email" placeholder="Enter your email" required value={Email} onChange={handleEmailChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left">
              <input className="input" type="password" placeholder="Enter your password" required value={Password} onChange={handlePasswordChange} />
              <span className="icon is-small is-left">
              <i className="fa-solid fa-lock"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control has-icons-left">
              <input className="input" type="password" placeholder="Enter your password again" required value={ConfirmPassword} onChange={handleConfirmPasswordChange} />
              <span className="icon is-small is-left">
              <i className="fa-solid fa-lock"></i>
              </span>
            </div>
          </div>
          {error && (
            <div className="field">
              <p className="help is-danger" style={{ fontSize: '1rem' }}>{error}</p>
            </div>
          )}
          <div className="field has-text-centered" style={{ marginTop: 20 }}>
            <div className="control">
              <button className={`button is-primary ${isLoading ? 'is-loading' : ''} is-fullwidth is-rounded`} type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="has-text-centered">
        <div className='block'>
          <Link to="/auth/login">Already have an account? Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;