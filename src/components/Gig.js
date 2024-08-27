// GigDescription.js
import React from 'react';
import './styles/GigDescription.css';
import gigimg from './images/gigimg1.png'
import footerimg1 from './images/gig3.png'
import footerimg2 from './images/gig2.png'
import footerimg3 from './images/gig4.png'
import footerimg4 from './images/speaker.png'
const GigDescription = () => {
  return (
  <div className="gig-component">
      <div className="gig-description">
      <div className="gig">
        <div className="gig-img">
        <img src={gigimg} alt="" />
        </div>
        <div className="gig-header">
          <h2>Here's a glimpse of what my services encompass:</h2> 
        <ul className="gig-services">
          <li>
            Meticulously meeting all ACX technical requirements, from project rates to bitrate, peak levels, noise floor, and channel specifications.
          </li>
          <li>
            Skillful manual breath control and precise space adjustments for a seamless flow.
          </li>
          <li>
            Thorough elimination of unwanted elements like mouth clicks, plosives, pops, sibilance, and background noises.
          </li>
          <li>
            Precise removal of repeats, mistakes, coughs, and unnecessary words, ensuring a polished final product.
          </li>
          <li>
            Rigorous proofreading by listening attentively and cross-referencing with the script.
          </li>
          <li>
            Platforms I’m proficient with include ACX/Audible, Findaway Voices, Authors’ Republic, and more.
          </li>
        </ul>
        </div>
      </div>

      <div className="gig-footer">
        <div className="footer-gig">
        <p>
          I am eager to address any questions or concerns you may have about this Gig. I derive immense satisfaction from building lasting relationships with individuals seeking consistent and reliable editing services. Feel free to reach out, whether it's to inquire or place an order. You can simply express your interest by saying “I will soon approach you” or seamlessly proceed by clicking the continue button to initiate your order.
     
          Thank you for considering my services; please be assured that all projects are handled with the utmost confidentiality.
        </p>
        </div>
        <div className="gig-footer-img">
          <img src={footerimg1} alt="" />
          <img src={footerimg2} alt="" />
          <img src={footerimg3} alt="" />
          <img src={footerimg4} alt="" />
        </div>
      
      </div>
    </div>
  </div>
  );
};

export default GigDescription;
