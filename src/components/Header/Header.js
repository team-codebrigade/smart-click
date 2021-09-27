import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  useEffect(() => {
    function write(text, onCompletion) {
      let currentIndex = 0;

      function loop() {
        const animatedText = document.querySelector(".animated-text");
        if (animatedText) {
          animatedText.innerHTML = text.substring(0, currentIndex);

          if (currentIndex === text.length) {
            onCompletion();
            return;
          }

          currentIndex++;
          setTimeout(loop, 100);
        }
      }

      loop();
    }

    function erase(text, onCompletion) {
      let currentIndex = text.length - 1;

      function loop() {
        const animatedText = document.querySelector(".animated-text");
        if (animatedText) {
          animatedText.innerHTML = text.substring(0, currentIndex);

          if (currentIndex === 0) {
            onCompletion();
            return;
          }

          currentIndex--;
          setTimeout(loop, 100);
        }
      }

      loop();
    }

    function animate() {
      const text = ['best', 'nearest'];

      function run(currentText) {
        write(currentText, () => {
          wait(() => {
            erase(currentText, () => {
              let changedText;

              if (currentText === text[0])
                changedText = text[1];
              else
                changedText = text[0];

              run(changedText);
            });
          });
        });
      }

      run(text[0]);
    }

    function wait(onCompletion) {
      setTimeout(onCompletion, 2000);
    }
    animate();
  }, []);

  return (
    <header>
      <div className="max-width">
        <div className="content">
          <div className="column left">
            <h2>Get your vehicle <i className="fas fa-car-side"></i> parked safely.</h2>
            <p>It's a big world out there, go explore and leave your vehicle security to us. We can provide you with the <strong className="animated-text"></strong> parking location.</p>
            <p><strong>Go and search for it now !</strong></p>
            <div className="row">
              <div className="call-action"><Link to='#search' onClick={(e) => document.getElementById("search").scrollIntoView()}>Search for Parking</Link></div>
              <div className="call-action"><Link to='/register'>Add your Parking</Link></div>
            </div>
          </div>
          <div className="column right">
            <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_lytjbphc.json" background="transparent" speed="1" style={{ width: "100%", height: "100%" }} loop autoplay></lottie-player>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
