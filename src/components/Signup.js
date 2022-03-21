import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import LoginForm from './LoginForm'
import PictureSide from './PictureSide';
import './Signup.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/globalContext';
// import Navbar from "./Navbar";

const initialState = {
  name: '',
  email: '',
  mobile: '',
  dob: '',
  password: '',
};

function Signup() {
  let [values, setValues] = useState(initialState);
  let { user, isLoading, createUser } = useGlobalContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, dob, password } = values;
    console.log(values);
    if (!name || !email || !mobile || !dob || !password) {
      console.log('Please fill all things');
      return;
    }
    const userParams = { name, email, mobile, dob, password };
    createUser(userParams);
  };

  useEffect(() => {
    if (user) {
      navigate('/preferences');
    }
  }, [user, navigate]);

  return (
    <div>
      {/* <Navbar />  */}
      <div>
        <div className='signup-parent'>
          <div className='image-people'>
            <PictureSide />
          </div>
          <div className='sign-child'>
            <div className='signup-heading'>
              <h2>SIGN UP</h2>
              <p>Welcome:)</p>
            </div>
            <div className='signup-form'>
              <form className='form' onSubmit={onSubmit}>
                <div className='signup-div'>
                  <label htmlFor='fname'>Full Name</label>
                  <input
                    type='text'
                    name='name'
                    id='fname'
                    value={values.name}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className='signup-div'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={values.email}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className='signup-div'>
                  <label htmlFor='mobile'>Mobile</label>
                  <input
                    type='number'
                    name='mobile'
                    id='mobile'
                    value={values.mobile}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className='signup-div'>
                  <label htmlFor='dob'>Date of Birth</label>
                  <input
                    type='date'
                    name='dob'
                    id='dob'
                    value={values.dob}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className='signup-div'>
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
                {/* <div className='signup-div'>
                  <label htmlFor='cpwd'>Confirm Password</label>
                  <input type='password' name='cpwd' id='cpwd'></input>
                </div> */}
                <div className='btn-signup'>
                  <button type='submit' disabled={isLoading}>
                    SIGN UP
                  </button>
                </div>
                <div className='pwd-forgot'>
                  <p>
                    Already have an account? <Link to='/login'>Login</Link>{' '}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#F7D04B' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Signup;
