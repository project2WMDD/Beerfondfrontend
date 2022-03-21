import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PictureSide from './PictureSide';
import Footer from './Footer';
import './LoginForm.css';
import { useGlobalContext } from '../context/globalContext';
// import Navbar from "./Navbar";

const initialState = {
  email: '',
  password: '',
};

function LoginForm() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading, loginUser } = useGlobalContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    console.log(values);
    if (!email || !password) {
      console.log('Please fill all things');
      return;
    }
    const userParams = { email, password };
    loginUser(userParams);
  };

  useEffect(() => {
    if (user) {
      navigate('/preferences');
    }
  }, [user, navigate]);

  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <div className='logo-form'>
          <div className='image-people'>
            <PictureSide />
          </div>

          <div className='login-form'>
            <div className='form-heading'>
              <h2>LOGIN</h2>
              <p>Welcome:)</p>
            </div>
            <form className='form-log-in' onSubmit={onSubmit}>
              <div className='form-div'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={values.emai}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className='form-div'>
                <label htmlFor='pwd'>Password</label>
                <input
                  type='password'
                  name='password'
                  id='pwd'
                  value={values.password}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className='btn-sub'>
                {/* <Link to='/preferences'><button type="submit">Submit</button></Link> */}
                {/* <Link to='/preferences'> */}
                <button type='submit'>Submit</button>
                {/* </Link> */}
              </div>

              <div className='pwd-forgot'>
                <p>Forgot Password?</p>
              </div>

              <div className='acct-signup'>
                <p>
                  Don't have an account? <Link to='/signup'>Sign Up?</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div style={{ backgroundColor: '#F7D04B' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
