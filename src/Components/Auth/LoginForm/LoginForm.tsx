import { useState } from 'react';
import { loginUser, LoginCredentials } from '../../../httpRequests/authApi';
import { useNavigate, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const credentials: LoginCredentials = {
    Email: email,
    Password: password,
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

    const result = await loginUser(credentials);

    if (result.data) {
      localStorage.setItem('token', result.data.token);
      navigate('/');
    } else if (result.errors) {
      setError(result.errors.join('\n'));
    }
    setIsLoading(false);
  };

  return (
    <div className="box" style={{ borderRadius: 40, border: '1px solid grey', background: '#dedede', padding: 25, width:400 }}>
      <div className='block'>
          <h1 className="title is-4 has-text-centered">Sign In</h1>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control  has-icons-left">
                  <input className="input" type="email" placeholder="Enter your email" required value={email} onChange={handleEmailChange} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input className="input" type="password" placeholder="Enter your password" required value={password} onChange={handlePasswordChange} />
                  <span className="icon is-small is-left">
                  <i className="fa-solid fa-lock"></i>
                  </span>
                </div>
              </div>
              {error && (
                <div className="field">
                  <p className="help is-danger">{error}</p>
                </div>
              )}
              <div className="field has-text-centered" style={{marginTop: 20}}>
                <div className="control">
                  <button className={`button is-primary ${isLoading ? 'is-loading' : ''} is-fullwidth is-rounded`} type="submit">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
      </div>
      <div className="has-text-centered">
        <div className='block'>
          <Link to="/auth/forgotPassword">Forgot your password?</Link>
        </div>
        <div className='block'>
          <Link to="/auth/register">Create a new account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;