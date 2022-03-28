import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import beer from '../images/pale-glass.png';
import { apiBeers, apiBreweries, color1, color2, color3 } from '../../constants';
import Footer from '../../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import './Beerinfo.css';

const initialState = {
  beer_name: '',
  beer_descr: '',
  beer_pic: '',
};

function BeerInfo() {
  const [beer, setBeer] = useState(initialState);
  const [breweries, setBreweries] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    
    let fetchBreweries = async () => {
      try {
        let result = await axios.get(
          `${process.env.REACT_APP_API_URL}/${apiBreweries}?beer_menu=${id}`
        );
        setBreweries(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBreweries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    let fetchBeer = async () => {
      try {
        let result = await axios.get(
          `${process.env.REACT_APP_API_URL}/${apiBeers}/${id}`
        );
        setBeer(result.data.beer);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBeer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {/* <NavNew /> */}
      <div
        className='
            beer-info'
      >
        <div className='beerinfo-img'>
          <h2>{beer.beer_name}</h2>
          <img src={beer.beer_pic} alt='pale beer' />
        </div>

        <div className='char-container'>
          <div className='beer-character'>
            <h1>Characteristics</h1>
            <p>{beer.beer_descr}</p>
          </div>
          <div className='food-match'>
            <h3>Food Match</h3>
            <ul>
              <li>Salads</li>
              <li>grilled Meats</li>
              <li>Medium cheese</li>
              <li>Desserts</li>
              <li>Seafood</li>
            </ul>
          </div>
          <div className='find-it'>
            <h3>Where to find it</h3>
            <ul>
              {breweries.length > 0 &&
                breweries.map((brewery) => {
                  return (
                    <Link to={`/details/${brewery._id}`}  key={brewery._id}>
                      <li>33 Acres</li>
                    </Link>
                  );
                })}
            </ul>
          </div>
          {/* <div className='brands-place'>
            <h3>Brands</h3>
            <ul>
              <li>Vancouver Island</li>
              <li>Parkate</li>
              <li>Athletic brewing</li>
              <li>lupolo</li>
              <li>Stanely Park Brewing</li>
            </ul>
          </div> */}
        </div>
      </div>
      <div style={{ backgroundColor: 'rgba(255, 198, 5, 0.4)' }}>
        <Footer />
      </div>
    </div>
  );
}

export default BeerInfo;
