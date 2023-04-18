import React from 'react'

const Login = () => (
    <main className="flex-row justify-center">
      <div className="col-11 col-md-8">
        <div className="card">
          <h3 className="card-header" style={{fontWeight: 'bold'}}>sign in</h3>
          <div className="card-body">
            <form >
              <input
                className="form-input"
                placeholder="Your email"
                name="email address"
                type="email"
              />
              <input
                className="form-input"
                placeholder='pasword'
                name="password"
                type="password"
              />
              <button className="btn d-block" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
  
  export default Login;

