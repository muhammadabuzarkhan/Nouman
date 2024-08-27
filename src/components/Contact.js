import React from "react";
import "./styles/Contact.css";
import iconstar1 from './images/star01.png'
import iconstar2 from './images/star01.png'

const ContactMe = () => {
  return (
  <div className="contact-component">  
  <div className="contact-container">
    <div className="form-section">
      <h2>Contact <span>Me</span></h2>
      <form className="contact-form">
        <label htmlFor="">Name</label>
        <input type="text"  required />
        <div className="input-cell">
          <div className="email">
          <label htmlFor="">E mail</label>
          <input type="email" required /></div>
       <div className="phone">   <label htmlFor="">Phone #</label>
       <input type="tel" required /></div>
        </div>
        <label htmlFor="">Message</label>
        <textarea  rows="5" required></textarea>
      </form>
      <div className="below-msg"> <p className="or">Or</p>
      <p className="email-contact">
        Email : <a href="mailto:contact@audioeditingguy.com">contact@audioeditingguy.com</a>
      </p>
      <p className="footer-text">Looking forward to hearing from you..!!</p></div>
    </div>
    <div className="description-section">
      <img src={iconstar1} alt="" />
      <img src={iconstar2} alt="" />
      <div className="contact-msg">
      <p>
        As a dedicated professional in audiobook and podcast editing, I understand the critical importance of capturing the essence of your content right from the start. Whether it’s ensuring clarity and coherence or refining the audio for your audience, I am committed to excellence in every project.
      </p>
      <p>
        Before committing to my services, I'm delighted to offer a complimentary sample editing. This allows you to gauge my suitability for the role with confidence.
      </p>
      <p>
        My standard turnaround time is within 24 hours, but I’m flexible to accommodate your project’s timeline, ensuring a swift delivery.
      </p>
      <p>
        In essence, I adapt to your unique requirements. I eagerly anticipate the opportunity to collaborate with you and fulfill your editing needs promptly and effectively, delivering results in your preferred formats, be it mp3 or wav.
      </p>
      </div>
    </div>
  </div></div>
  );
};

export default ContactMe;
