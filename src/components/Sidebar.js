import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDollarSign, faBriefcase, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="hire-btn">
        <NavLink to='/contat'>Hire Me </NavLink>
      </div>
      <h2>Audio Engineer</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              <FontAwesomeIcon icon={faHome} className="icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" activeClassName="active">
              <FontAwesomeIcon icon={faDollarSign} className="icon" />
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/gig" activeClassName="active">
              <FontAwesomeIcon icon={faBriefcase} className="icon" />
              Gig Description
            </NavLink>
          </li>
          <li>
            <NavLink to="/previouswork" activeClassName="active">
              <FontAwesomeIcon icon={faFolderOpen} className="icon" />
              Previous Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="social">
        <div className="social-icons">
          <NavLink target='blank' to="/www.instagram.com">
            Insta

          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
