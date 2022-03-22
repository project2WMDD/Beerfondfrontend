import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import photo from '../../images/33Acres7-1024x768.jpg';
// import About from './About'
import Footer from '../../components/Footer';
import PageHeading from '../../globalComponents/PageHeading/PageHeading';
import { apiBookings, apiBreweries, color2 } from '../../constants';
import { useGlobalContext } from '../../context/globalContext';
import styles from './Brewery.module.css';

const initialState = {
  brewer_name: '',
  brewer_link: '',
  beer_contact: [],
  beer_menu: [],
  brewer_location: '',
};

const bookingInitialState = {
  people: 0,
  date: '',
};

const Brewery = () => {
  const [brewery, setBrewery] = useState(initialState);
  const [tabIndex, setTabIndex] = useState('');
  const { id } = useParams();
  const [values, setValues] = useState(bookingInitialState);
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const { user } = useGlobalContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const goToBooking = () => {
    setIsBooking(true);
  };

  const goToBrewer = () => {
    setIsBooking(false);
  };

  const doBook = () => {
    setIsBooked(true);
  };

  //booking
  useEffect(() => {
    if (!isBooked) {
      return;
    }
    let bookNow = async () => {
      try {
        let result = await axios.post(
          `${process.env.REACT_APP_API_URL}/${apiBookings}`,
          { ...values, user: user._id, brewery: brewery._id }
        );
        console.log(result);
        setIsBooked(true);
      } catch (error) {
        console.log(error);
      }
    };
    bookNow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBooked]);

  const tabs = [
    {
      title: 'About',
    },
    {
      title: 'Menu',
    },
    {
      title: 'Location',
    },
  ];

  useEffect(() => {
    let fetchBrewery = async () => {
      try {
        let result = await axios.get(
          `${process.env.REACT_APP_API_URL}/${apiBreweries}/${id}`
        );
        console.log(result.data);
        setBrewery(result.data.brewery);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrewery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //jsx
  return (
    <div>
      <div className={styles.container}>
        <div
          className={!isBooking ? styles.upperPart : styles.upperPartBooking}
        >
          <PageHeading
            style={
              isBooking
                ? { padding: '0px', alignSelf: 'end' }
                : { padding: '20px' }
            }
          >
            {brewery.brewer_name}
          </PageHeading>

          <div
            className={
              !isBooking ? styles.imgContainer : styles.imgContainerBooking
            }
          >
            <img
              className={isBooking ? styles.bookingImg : styles.img}
              src={photo}
              alt='Acres'
            />
          </div>

          {isBooking ? (
            <BookingForm
              handleChange={handleChange}
              values={values}
              goToBrewer={goToBrewer}
              doBook={doBook}
              isBooked={isBooked}
            />
          ) : (
            <button
              className={styles.btnPrimary}
              style={{
                marginTop: '20px',
                backgroundColor: color2,
                color: 'white',
                padding: '10px 20px',
              }}
              onClick={goToBooking}
            >
              Book
            </button>
          )}
          {/* } */}
        </div>

        {!isBooking && (
          <section className={styles.lowerPart}>
            {
              <div className={styles.btnGroup}>
                {tabs.map((tab, idx) => {
                  return (
                    <button
                      className={
                        tabIndex === idx || tabIndex === ''
                          ? styles.btn
                          : styles.btnWhite
                      }
                      key={tab.title}
                      onClick={() => setTabIndex(idx)}
                    >
                      {tab.title}
                    </button>
                  );
                })}
              </div>
            }

            <div className={styles.allTabs}>
              {(tabIndex === '' || tabIndex === 0) && (
                <div className={styles.itemStyle}>
                  {brewery.beer_contact.map((item, i) => {
                    return (
                      <p className={styles.childItem} key={i}>
                        {item}
                      </p>
                    );
                  })}
                </div>
              )}

              {(tabIndex === '' || tabIndex === 1) && (
                <div className={styles.itemStyle}>
                  {brewery.beer_menu.map((item, i) => {
                    return (
                      <p key={i} className={styles.childItem}>
                        {item.beer_name}
                      </p>
                    );
                  })}
                </div>
              )}

              {(tabIndex === '' || tabIndex === 2) && (
                <div className={styles.itemStyle}>
                  <p className={styles.childItem}>{brewery.brewer_location}</p>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
      <div style={{ backgroundColor: 'rgba(255, 198, 5, 0.4)' }}>
        <Footer />
      </div>
    </div>
  );
};

function BookingForm({ values, handleChange, goToBrewer, doBook, isBooked }) {
  return (
    <form
      className={styles.bookingForm}
      onSubmit={(e) => {
        e.preventDefault();
        doBook();
      }}
    >
      {isBooked && (
        <div style={{ marginBottom: '10px' }}>Booking done! Thank you!</div>
      )}
      <div className={styles.inputPart}>
        <div className={styles.bookingFormControl}>
          <label className={styles.bookingLabel} htmlFor='people'>
            Number of People
          </label>
          <input
            className={styles.bookingInput}
            type='number'
            name='people'
            id='people'
            value={values.mobile}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className={styles.bookingFormControl}>
          <label className={styles.bookingLabel} htmlFor='date'>
            Booking Date
          </label>
          <input
            className={styles.bookingInput}
            type='datetime-local'
            name='date'
            id='date'
            value={values.date}
            onChange={handleChange}
            required
          ></input>
        </div>
      </div>
      <div className={styles.btnBookingGroup}>
        <button
          className={styles.btnPrimary}
          style={{
            marginTop: '20px',
            backgroundColor: color2,
            color: 'white',
            padding: '10px 20px',
          }}
          type='submit'
        >
          Book
        </button>
        <button
          className={styles.btnPrimary}
          style={{
            marginTop: '20px',
            backgroundColor: 'white',
            color: color2,
            border: `${color2} solid 1px`,
            padding: '10px 20px',
          }}
          onClick={goToBrewer}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Brewery;
