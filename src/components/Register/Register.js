import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { registerParking } from '../../api';
import MessageBox from '../MessageBox/MessageBox';

const Register = () => {

  const initialUserData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    aadhar: '',
    pan: '',
    parkName: '',
    street: '',
    city: '',
    pincode: '',
    twoWheelers: '',
    fourWheelers: '',
    directions: '',
    description: ''
  };
  const [userData, setUserData] = useState(initialUserData);
  const [response, setResponse] = useState(null);

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(userData);
    const {data} = await registerParking(userData);
    // console.log(data);
    setResponse(data);
    setUserData(initialUserData);
  }

  const restrictLength = (event, n) => {
    const value = String(event.target.value);
    if(value.length > n) {
      event.target.value = isNaN(Number(value.substr(0, n))) 
                      ? value.substr(0, n) 
                      : Number(value.substr(0, n));
    }
  };

  return (
    <section id="register">
      <div className="max-width">
        <p><Link to='/'><i className="fas fa-arrow-left"></i> Back to Home</Link></p>
        <h2 className="title">Register</h2>
        <div className="content justify-center">
          <form autoComplete="off" onSubmit={handleSubmit}>
            
            <h3 className="text">Personal Details:</h3>
            <div className="fields">
              <div className="field mr-5">
                <input type="text" name="firstName" placeholder="First Name" value={userData.firstName} onChange={(e) => setUserData({...userData, firstName: e.target.value})} required />
              </div>
              <div className="field ml-5">
                <input type="text" name="lastName" placeholder="Last Name" value={userData.lastName} onChange={(e) => setUserData({...userData, lastName: e.target.value})} required />
              </div>
            </div>
            <div className="field">
              <input type="email" name="email" placeholder="Personal Email Id" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} required />
            </div>
            <div className="field">
              <input type="tel" name="phone" pattern="^\d{10}$" placeholder="Phone Number" value={userData.phone} required
              onChange={(e) => { 
                restrictLength(e, 10);
                setUserData({...userData, phone: e.target.value});
              }}  />
            </div>

            <h3 className="text">Identity Verification:</h3>
            <div className="field">
              <input type="number" name="aadhar" placeholder="Aadhar Card Number" value={userData.aadhar} required
              onChange={(e) => {
                restrictLength(e, 12);
                setUserData({...userData, aadhar: e.target.value});
              }} />
            </div>
            <div className="field">
              <input type="text" name="pan" placeholder="Pan Card Number" value={userData.pan} required
              onChange={(e) => {
                restrictLength(e, 10);
                setUserData({...userData, pan: e.target.value});
              }} />
            </div>

            <h3 className="text">Parking Area Details:</h3>
            <div className="field">
              <input type="text" name="parkName" placeholder="Parking Name" value={userData.parkName} required onChange={(e) => setUserData({...userData, parkName: e.target.value})}/>
            </div>
            <div className="field">
              <input type="text" name="street" placeholder="Street or Area" value={userData.street} required onChange={(e) => setUserData({...userData, street: e.target.value})}/>
            </div>
            <div className="fields">
              <div className="field mr-5">
                <input type="text" name="city" placeholder="City" value={userData.city} required onChange={(e) => setUserData({...userData, city: e.target.value})}/>
              </div>
              <div className="field ml-5">
                <input type="number" name="pincode" min={100000} max={999999} placeholder="Pincode" value={userData.pincode} required 
                onChange={(e) => {
                  restrictLength(e, 6);
                  setUserData({...userData, pincode: e.target.value});
                }} />
              </div>
            </div>
            <div className="field">
              <input type="number" name="twoWheelers" placeholder="Number of 2-wheeler Parkings" value={userData.twoWheelers} required onChange={(e) => setUserData({...userData, twoWheelers: e.target.value})}/>
            </div>
            <div className="field">
              <input type="number" name="fourWheelers" placeholder="Number of 4-wheeler Parkings" value={userData.fourWheelers} required onChange={(e) => setUserData({...userData, fourWheelers: e.target.value})}/>
            </div>
            <div className="field">
              <input type="url" name="directions" placeholder="Link Google Map Location" value={userData.directions} required onChange={(e) => setUserData({...userData, directions: e.target.value})}/>
            </div>
            <div className="field textarea">
              <textarea name="description" cols="30" rows="10" placeholder="Description" value={userData.description} required onChange={(e) => setUserData({...userData, description: e.target.value})}></textarea>
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
    </section>
  )
}

export default Register
