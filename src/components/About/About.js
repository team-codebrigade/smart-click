import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="max-width">
        <h2 className="title">About Us</h2>

        <div className="content wrap-reverse">
          <div className="column left">
            <h3 className="text"><i className="fas fa-shield-alt"></i> Secure Parking</h3>
            <p>Don't have enough space to park your vehicle inside your house? Searching for nearby safe parking area? Then let us make your task easy by providing you the safest parking. All parkings are under CCTV Surveillance.</p>
          </div>
          <div className="column right">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_rpzcuwpl.json"  background="transparent"  speed="1"  style={{width: "100%", height: "100%"}}  loop autoplay></lottie-player>
          </div>
        </div>

        <div className="content">
          <div className="column left">
            <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_kiy0l79z.json"  background="transparent"  speed="1"  style={{width: "100%", height: "90%"}}  loop autoplay></lottie-player>
          </div>
          <div className="column right">
            <h3 className="text"><i className="fas fa-car"></i> Available for all vehicles</h3>
            <p>Availability of parking for small vehicles and big vehicles is becoming a serious problem for you? Then let us lighten your burden. Whether your vehicle is a bicycle or a truck, we provide the best parking services for all vehicles.</p>
          </div>
        </div>

        <div className="content wrap-reverse">
          <div className="column left">
            <h3 className="text"><i className="fas fa-parking"></i> Solving Roadside Parking</h3>
            <p>Are you afraid about your vehicle getting towed by RTO or about your vehicle getting scratched? This may happen to your vehicle any day. Whenever you park it on the roadside, you've to bear the risk of the worst.</p> 
            <p>Roadside Parking is not safe for you, not for your vehicle and not for anyone passing from that road. Come to our parkings and solve this problem with us.</p>
          </div>
          <div className="column right">
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_rddfnr10.json"  background="transparent"  speed="0.5"  style={{width: "100%", height: "100%"}}  loop autoplay></lottie-player>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;
