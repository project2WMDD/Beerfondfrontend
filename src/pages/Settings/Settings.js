import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import { useGlobalContext } from '../../context/globalContext';
import PageHeading from '../../globalComponents/PageHeading/PageHeading';
import './Settings.css';

const initialState = {
  name: '',
  email: '',
  mobile: '',
  password: '',
};

export default function Setting() {
  const [values, setValues] = useState(initialState);
  let { logoutUser, user } = useGlobalContext();

  let navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
    setValues((state) => {
      return {
        ...state,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      };
    });
  }, [user, navigate]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, password } = values;
    console.log(values);
    if (!name || !email || !mobile || !password) {
      console.log('Please fill all things');
      return;
    }
    // const userParams = { name, email, mobile, password };
    // createUser(userParams);
  };
  return (
    <div>
      <PageHeading style={{ margin: '20px' }}>Edit</PageHeading>
      <div className='form-container'>
        <form onSubmit={onSubmit}>
          <div className='form'>
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
          </div>
          <div className='btn-signup'>
            <button type='submit'>SAVE</button>
          </div>
        </form>
      </div>
      <PageHeading style={{ margin: '20px' }}>Your Bookings</PageHeading>
      <div className='form-container'>
      You do not have any booking yet. 
      </div>
      <button className='logout-button' onClick={logoutUser}>
        Log out
      </button>
      <div className='signup-footer'>
          <Footer />
        </div>
    </div>
  );
}
