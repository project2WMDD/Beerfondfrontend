import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import photo from '../../images/33Acres7-1024x768.jpg';
// import About from './About'
import Footer from '../../components/Footer';
import PageHeading from '../../globalComponents/PageHeading/PageHeading';
import { apiBreweries, color2 } from '../../constants';
import styles from './Brewery.module.css';

const initialState = {
  brewer_name: '',
  brewer_link: '',
  beer_contact: [],
  beer_menu: [],
  brewer_location: '',
};

const Brewery = () => {
  const [brewery, setBrewery] = useState(initialState);
  const [tabIndex, setTabIndex] = useState('');
  const { id } = useParams();

  const tabs = [
    {
      title: 'About',
      content: 'About',
    },
    {
      title: 'Menu',
      content: 'Menu',
    },
    {
      title: 'Location',
      content: 'Location',
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
        <div className={styles.upperPart}>
          <PageHeading style={{padding: '20px'}}>{brewery.brewer_name}</PageHeading>

          <div className={styles.imgContainer}>
            <img className={styles.img} src={photo} alt='Acres' />
          </div>

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
        </div>

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
      </div>
      <div style={{ backgroundColor: 'rgba(255, 198, 5, 0.4)' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Brewery;
