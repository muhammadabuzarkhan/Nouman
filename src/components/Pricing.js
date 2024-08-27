import React from 'react';
import './styles/Pricing.css';
function Pricing() {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">Packages and Pricing</h2>
      <div className="packages">
        {/* Podcast Package */}
        <div className="package-card">
          <h3 className="package-title">Podcast Package</h3>
          <div className="package-price">$40 / HR</div>
          <p className="package-description">Complete Podcast Editing Package</p>
          <ul className="package-features">
            <li>Delete unwanted parts (uhms, repeats, filler words etc.)</li>
            <li>Normalize/Leveling the volume</li>
            <li>Removal of Echo, Background, and other heavy mouth Noises, etc.</li>
            <li>Add Background Music and sound effects (provided)</li>
            <li>Add your intro and outro and deliver mp3 or any other format you want.</li>
          </ul>
          <button className="package-button">Get started</button>
        </div>

        {/* Premium Package */}
        <div className="package-card most-popular">
          <div className="most-popular-tag">Most Popular 🌟</div>
          <h3 className="package-title">Premium Package</h3>
          <div className="package-price">$50 / HR</div>
          <p className="package-description">Complete Audiobook Editing & Mastering Package</p>
          <ul className="package-features">
            <li>Everything in Basic Package</li>
            <li>Removal of Extraneous Background and Mouth Noises (Clicks, Plosives, Pops etc.)</li>
            <li>Repeats, bad takes and mistakes</li>
            <li>Manual Breath Control and space adjustments to ensure smooth flow.</li>
            <li>Proofing the audio with the script.</li>
          </ul>
          <button className="package-button">Get started</button>
        </div>

        {/* Basic Package */}
        <div className="package-card">
          <h3 className="package-title">Basic Package</h3>
          <div className="package-price">$10 / HR</div>
          <p className="package-description">Audiobook Mastering Package</p>
          <ul className="package-features">
            <li>Fixing/Checking and mastering Audiobooks for:</li>
            <li>RMS, Peak Level, Noise Floor, Spacing</li>
            <li>CBR, VBR, Project Rate, Bitrate, Split Chapters</li>
            <li>Title discrepancy across the cover/audio credits/metadata</li>
            <li>Writing contains interlacing and much more..!</li>
          </ul>
          <button className="package-button">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
