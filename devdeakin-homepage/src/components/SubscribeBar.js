import React from 'react';

const SubscribeBar = () => (
  <form
    method="POST"
    action="/subscribe"
    style={{
      background: '#ddd',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    }}
  >
    <strong>SIGN UP FOR OUR DAILY INSIDER</strong>
    <input name="firstName" type="text" placeholder="Your Name" required />
    <input name="email" type="email" placeholder="Your Email" required />
    <button type="submit">Subscribe</button>
  </form>
);

export default SubscribeBar;
