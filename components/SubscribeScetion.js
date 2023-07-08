"use client"
import '../styles/endpart.css'
import { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the subscription, such as sending the email to a server or displaying a success message
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <section className="subscribe-section">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay up-to-date with our latest news and updates</p>
      <form className='sub_form' onSubmit={handleSubmit}>
        <div className="input-group">
          <input className='sub_input' type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
          <button className='sub_but' type="submit">Subscribe</button>
        </div>
      </form>
      <br></br>
      <div className="social-links">
          <img className="soc" src="/com_soc.png"/>
        </div>
      
    </section>
  );
};

export default SubscribeSection;
