import { useState } from 'react';
import { recoverPassword, RecoverPasswordCredentials } from '../../../httpRequests/authApi';
import {  useNavigate, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const RecoverPasswordForm = () => {
  const navigate = useNavigate();
  const [NewPassword, setNewPassword] = useState('');
  const [ConfirmNewPassword, setConfirmNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const credentials: RecoverPasswordCredentials = {
    NewPassword: NewPassword,
    ConfirmNewPassword:ConfirmNewPassword,
  };

  const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmNewPassword(event.target.value);
  };
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await recoverPassword(credentials);

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
        <h1 className="title is-4 has-text-centered">Restore Password</h1>
        <form onSubmit={handleSubmit}>

          <div className="field">
            <label className="label">New Password</label>
            <div className="control has-icons-left">
              <input className="input" type="password" placeholder="Enter your password" required value={NewPassword} onChange={handleNewPasswordChange} />
              <span className="icon is-small is-left">
              <i className="fa-solid fa-lock"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control has-icons-left">
              <input className="input" type="password" placeholder="Enter your password again" required value={ConfirmNewPassword} onChange={handleConfirmNewPasswordChange} />
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
              <button className={`button is-info ${isLoading ? 'is-loading' : ''} is-fullwidth is-rounded`} type="submit">
                Register
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

export default RecoverPasswordForm;