import React, { useEffect, useState } from 'react';
import './Contact.css';
import { sendInfo } from '../../api';
import MessageBox from '../MessageBox/MessageBox';

const Contact = () => {

  const initialContactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  const [contactData, setContactData] = useState(initialContactData);

  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(contactData);
    const {data} = await sendInfo(contactData);
    // console.log(data);
    setResponse(data);
    setContactData(initialContactData);
  }

  useEffect(() => {}, [response]);

  return (
    <section id="contact">
      <div className="max-width">
        <h2 className="title">Contact Us</h2>
        <div className="content">

          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>We welcome every response of our user. Share your feedback and do suggest us the areas of improvement. We will surely work on it to provide our users the best support.</p>
            <div className="icons">

              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Code Brigade</div>
                  <div className="sub-title">Smart-Click Team</div>
                </div>
              </div>

              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Jabalpur, India</div>
                </div>
              </div>

              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">smartclick.teach@gmail.com</div>
                </div>
              </div>

            </div>
          </div>

          <div className="column right">
            <div className="text">Message Us</div>
            <form autoComplete="off" onSubmit={handleSubmit}>

              <div className="fields">
                <div className="field mr-5">
                  <input type="text" name="name" value={contactData.name} onChange={(e) => setContactData({...contactData, name: e.target.value})} placeholder="Name" required />
                </div>
                <div className="field ml-5">
                  <input type="email" name="email" value={contactData.email} onChange={(e) => setContactData({...contactData, email: e.target.value})} placeholder="Email" required />
                </div>
              </div>

              <div className="field subject">
                <input type="text" name="subject" value={contactData.subject} onChange={(e) => setContactData({...contactData, subject: e.target.value})} placeholder="Subject" required />
              </div>

              <div className="field textarea">
                <textarea name="message" cols="20" rows="10" value={contactData.message} onChange={(e) => setContactData({...contactData, message: e.target.value})} placeholder="Message" required></textarea>
              </div>
              
              {
                response && (
                  <MessageBox message={response.message} variant={response.status === 'Failure' ? 'error' : 'success'}></MessageBox>
                )
              }

              <div className="button">
                <button type="submit"><i className="fas fa-arrow-right"></i></button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
