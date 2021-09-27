import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchResult from './SearchResult/SearchResult';
import './SearchResults.css';

const SearchResults = (props) => {

  const [flag, setFlag] = useState('');
  const data = props.data;
  
  return (
    <section id="search-results">
      <div className="max-width">
        <h2 className="text">Search Results <i className="fas fa-search-location"></i></h2>
        {flag ?
          <>
            <p><Link to="#" onClick={() => setFlag('')}><i className="fas fa-arrow-left"></i> Back to results</Link></p>
            <SearchResult item={flag}/>
          </> :
          <table>
            <thead>
              <tr>
                <th>Park Name</th>
                <th>Direction</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map(item => (
                  <tr key={item._id}>
                    <td>{item.parkName + ", " + item.street}</td>
                    <td><a target="_blank" rel="noreferrer" href={item.directions}><i className="fas fa-directions"></i></a></td>
                    <td><button onClick={() => {
                      setFlag(item);
                    }}>View</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
      }
      </div>
    </section>
  )
}

export default SearchResults
