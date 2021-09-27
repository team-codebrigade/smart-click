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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius, officiis nobis dolor ab iste accusantium harum et dicta qui amet fugiat obcaecati, corporis aliquid, beatae molestias. Accusamus, nam ut.</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repellat dolores amet et necessitatibus quis odio in eos repellendus alias at, modi rerum hic vel, consequatur, id temporibus!</p>
          </div>
        </div>

        <div className="content wrap-reverse">
          <div className="column left">
            <h3 className="text"><i className="fas fa-parking"></i> Solving Roadside Parking</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius, officiis nobis dolor ab iste accusantium harum et dicta qui amet fugiat obcaecati, corporis aliquid, beatae molestias. Accusamus, nam ut.</p>
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
