import { useState } from 'react';
import { forgotPassword } from '../../../httpRequests/authApi';
import {  useNavigate, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await forgotPassword(Email);

    if(result.data){
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
        <h1 className="title is-4 has-text-centered">Restore Password</h1>
        <div className='block'>
              <p>Enter your email, we will send you link to password recovery page</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control  has-icons-left">
              <input className="input" type="email" placeholder="Enter your email" required value={Email} onChange={handleEmailChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
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
              <button className={`button is-info ${isLoading ? 'is-loading' : ''} is-fullwidth is-rounded`} type="submit">
                Send email
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="has-text-centered">
        <div className='block'>
          <Link to="/auth/login">Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;