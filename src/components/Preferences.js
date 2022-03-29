// import './LoginForm.css'
// import peopleImg from '../images/people.png';
import { useState, useEffect } from 'react';
import PageHeading from '../globalComponents/PageHeading/PageHeading';
import PictureSide from '../globalComponents/PictureSide/PictureSide';
import logo2 from '../images/logo2.png';
import { Form, Button } from 'react-bootstrap';
import {useGlobalContext} from '../context/globalContext'
import Footer from './Footer';
import { color2 } from '../constants';
import { useNavigate } from 'react-router-dom';
import './Preferences.css';

const initialState = {
  flavour: '',
  favFood: '',
  alcoholPercent: '',
};

function Preferences() {
  let [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  let {user} = useGlobalContext();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const onChange = (e) => {
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    console.log(values);
    navigate(`/results?alcoholPercent=${values.alcoholPercent}`);
  };

  return (
    <>
      <div className='preferences-container'>
        <div>
          <PictureSide src={logo2} />
        </div>

        <div>
          <PageHeading style={{ margin: '20px' }}>
            We want to know your preferences
          </PageHeading>

          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label style={labelStyle}>
                What is your favorite flavour?
              </Form.Label>

              {['Sweet', 'Spicy', 'Fruit', 'Sour'].map((type) => (
                <Form.Check
                  style={formCheckStyle}
                  key={type}
                  id={`check-api-${type}`}
                >
                  <Form.Check.Input
                    type='checkbox'
                    value={type}
                    onChange={onChange}
                    name='flavour'
                  />
                  <Form.Check.Label>{`${type}`}</Form.Check.Label>
                </Form.Check>
              ))}
            </Form.Group>

            <br />

            <Form.Label style={labelStyle}>
              What is your favorite food?
            </Form.Label>
            {['Meat', 'Fresh Vegetables', 'Cheese', 'Desert4'].map((type) => (
              <Form.Check
                style={formCheckStyle}
                key={type}
                id={`check-api-${type}`}
              >
                <Form.Check.Input
                  type='checkbox'
                  value={type}
                  onChange={onChange}
                  name='favFood'
                />
                <Form.Check.Label>{`${type}`}</Form.Check.Label>
              </Form.Check>
            ))}

            <br />

            <Form.Label style={labelStyle}>
              How much % alcohol do you want? What is your favorite food?
            </Form.Label>
            {['Light-1', 'Medium-light', 'Medium-high', 'High-4'].map(
              (type) => (
                <div key={type} className='mb-3 ml-3'>
                  <Form.Check
                    key={type}
                    id={`check-api-${type}`}
                    style={formCheckStyle}
                  >
                    <Form.Check.Input
                      type='radio'
                      value={type}
                      onChange={onChange}
                      name='alcoholPercent'
                    />
                    <Form.Check.Label>{`${type}`}</Form.Check.Label>
                  </Form.Check>
                </div>
              )
            )}

            <div className='text-center'>
              <button className='done-btn' type='submit'>
                Done
              </button>
            </div>
          </Form>
        </div>
      </div>

      <div className='pref-footer'>
        <Footer />
      </div>
    </>
  );
}

export default Preferences;

const labelStyle = { fontWeight: 'bold', marginLeft: '20px' };
const formCheckStyle = { display: 'flex', gap: '10px', margin: '20px 20px' };
