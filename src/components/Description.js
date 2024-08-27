import React from 'react';
import './styles/Description.css';
import image from './images/profile.png'
function Description() {
  return (
    <div className="description-container">
      <div className="description">
        <div className="intro-text">
          <h2 className="greeting">Hey, there!</h2>
          <h1 className="name">I'M MUHAMMAD NAUMAN</h1>
          <h3 className="profession">Professional Audio Engineer</h3>
          <p className="bio">
            With four years of dedicated service, I’ve edited/mastered 100s of podcasts and 1000+ audiobooks for ACX, Audible, Findaway, and Author's Republic. Collaborating with publishing houses, narrators, and authors, I ensure a reliable editing experience.
          </p>
        </div>
        <div className="profile-img">
          <img src={image} alt="" />
        </div>

      </div>
    </div>
  );
}

export default Description;
