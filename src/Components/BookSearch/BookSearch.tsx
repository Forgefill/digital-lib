import React, { useState } from "react";
import 'bulma/css/bulma.min.css';

function BookSearch() {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    // call API
    alert("Submit")
  };

  return (
        <form onSubmit={handleSubmit}>
          <div className="field columns has-addons is-gapless">
            <div className="control column is-one-fifth">
              <button
                type="submit"
                className={`button is-info is-rounded is-grey-lighter is-fullwidth is-size-5 ${isLoading ? 'is-loading' : ''}`}
                disabled={isLoading}
                style={{backgroundColor:'lightgrey'}}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="control column">
              <input
                id="title"
                className="input is-rounded is-grey-lighter is-size-5"
                type="text"
                placeholder="Search book by title"
                value={title}
                onChange={handleTitleChange}
                required
              />
            </div>
          </div>
          {error && (
            <div className="field">
              <p className="help is-danger">{error}</p>
            </div>
          )}
        </form>
  );
};

export default BookSearch;