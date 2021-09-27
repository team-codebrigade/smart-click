import React, { useState } from 'react';
import { searchLocation } from '../../api';
import './Search.css';
import SearchResults from '../SearchResults/SearchResults';
import MessageBox from '../MessageBox/MessageBox';

const Search = () => {
  const [location, setLocation] = useState('');
  const [parkings, setParkings] = useState(null);
  const [noParkings, setNoParkings] = useState(false);

  const getParkings = async () => {
    // console.log(location);
    const { data } = await searchLocation(location);
    // console.log(data.message);

    if(data.message.length !== 0) {
      setNoParkings(false);
      setParkings(data.message);
    }
    else {
      setNoParkings(true);
      setParkings(null);
    }
  }

  const handleChange = (event) => {
    const value = event.target.value;
    // console.log(value);
    if (value) {
      setLocation(value); 
      getParkings(); 
    }
    else {
      setLocation('');
      setNoParkings(false);
      setParkings(null);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getParkings();
  }

  return (
    <section id="search">
      <div className="max-width">
        <h2 className="title">Search For Parking</h2>
        <div className="content wrap-reverse">
          <div className="column left">
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_9ee7bmlt.json"  background="transparent"  speed="1"  style={{width: "100%", height: "100%"}}  loop autoplay></lottie-player>
          </div>
          <div className="column right">
            <h3 className="text">Ready to park !</h3>
            <p>You can search for parking location by either providing area name and city name or just by city name. If the results doesn't match your expectations, try by checking the correct spelling of the names. </p>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="d-flex">
                <div className="field">
                  <input type="text" name="location" placeholder="Search here" onChange={handleChange}/>
                </div>
                <div className="button">
                  <button type="submit"><i className="fas fa-search"></i></button>
                </div>
              </div>
            </form>
            {
              noParkings && (
                <MessageBox message={'No Parkings Found!'}></MessageBox>
              )
            }
          </div>
        </div>
      </div>
      
      {
        parkings &&
        <SearchResults data={parkings}></SearchResults>
      }
    </section>
  )
}

export default Search;
