import React, { useState, useEffect } from 'react';
import PageHeading from '../../globalComponents/PageHeading/PageHeading';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiBeers, color1, color2, color3 } from '../../constants';
import { Button } from 'react-bootstrap';
import Footer from '../../components/Footer';
import styles from './YourResults.module.css';

export default function YourResults() {
  let [beers, setBeers] = useState([]);
  let query = useQuery();
  let queryString = query.get('alcoholPercent');

  useEffect(() => {
    let fetchBeers = async () => {
      try {
        let result = await axios.get(
          `${process.env.REACT_APP_API_URL}/${apiBeers}?alcohol_percent=${queryString}`
        );
        setBeers([...result.data.beers]);
      } catch (error) {}
    };
    fetchBeers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryString]);

  return (
    <>
      <div style={{ margin: 'auto', padding: '20px' }}>
        <PageHeading>YOUR RESULTS</PageHeading>
        <div style={beersContainer}>
          {beers.length > 0 &&
            beers.map((beer) => {
              return <BeerOverview beer={beer} key={beer._id} />;
            })}
        </div>
      </div>
      <div style={{ backgroundColor: 'rgba(255, 198, 5, 0.4)' }}>
        <Footer />
      </div>
    </>
  );
}

function BeerOverview({ beer }) {
  let navigate = useNavigate();

  const goToBeerDetails = (id) => {
    navigate(`/beers/${id}`);
  };
  return (
    <div style={container}>
      <div style={imgContainer}>
        <img src={beer.beer_pic} style={imgStyle} alt={beer.beer_name} />
      </div>
      <div style={textContainer}>
        <h4 style={beerTitle}>{beer.beer_name}</h4>
        <p>{beer.beer_descr}</p>
        <p>
          <button
            className={styles.btnLink}
            style={btnLink}
            onClick={() => goToBeerDetails(beer._id)}
          >
            More...
          </button>
        </p>
      </div>
    </div>
  );
}

const beersContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
};

const container = {
  display: 'grid',
  gridTemplateColumns: '1fr 10fr',
};
const imgContainer = {
  width: '200px',
  height: '200px',
  position: 'relative',
};
const textContainer = {
  backgroundColor: color3,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '10px',
};

const beerTitle = {
  color: color2,
  fontSize: '30px'
};

const imgStyle = {
  width: '200px',
  height: '200px',
  objectFit: 'contain',
};

const btnLink = {
  color: color2,
};

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
