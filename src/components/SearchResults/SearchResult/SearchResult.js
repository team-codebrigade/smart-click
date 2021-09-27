import React from 'react';
import './SearchResult.css'

const SearchResult = (props) => {
  const { item } = props;
  
  return (
    <div id="search-result">
      <div className="max-width">
        <div className="content">
          <div className="column left">

            <div className="row">
              <div className="info">
                <h3>{item.parkName}</h3>
                <div className="sub-title">{item.description}</div>
              </div>
            </div>

            <div className="row">
              <div className="info">
                <div className="head">Address</div>
                <div className="sub-title">{item.street + ", " + item.city}</div>
              </div>
            </div>

            <div className="row">
              <div className="info">
                <div className="head">Available Parkings</div>
                <div className="sub-title">Four Wheeler- {item.fourWheelers}</div>
                <div className="sub-title">Two Wheeler- {item.twoWheelers}</div>
              </div>
            </div>

            <div className="row">
              <div className="info">
                <div className="head">Directions <a target="_blank" rel="noreferrer" href={item.directions}><i className="fas fa-directions"></i></a></div>
                <div className="sub-title"></div>
              </div>
            </div>

            <div className="button">
              <button disabled="disabled">Book Now</button>
            </div>

          </div>

          <div className="column right">
            <div>
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_fxblhe7v.json"  background="transparent"  speed="1"  style={{width: "100%", height: "100%"}}  loop  autoplay></lottie-player>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default SearchResult;
