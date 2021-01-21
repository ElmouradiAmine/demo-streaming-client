import React from 'react';

import FacebookIcon from '../../assets/facebook-white.svg';
import TwitterIcon from '../../assets/twitter-white.svg';
import InstagramIcon from '../../assets/instagram-white.svg';

import AppStore from '../../assets/app-store.svg';
import PlayStore from '../../assets/play-store.svg';
import WindowsStore from '../../assets/windows-store.svg';


import './Footer.css';

const FooterPageLinks = () => (
  <ul className="footer__page-links">
    <li>
      <a href="/">Home</a>
      <span className="separator">|</span>
    </li>
    <li>
      <a href="/">Terms and Conditions</a>
      <span className="separator">|</span>
    </li>
    <li>
      <a href="/">Privacy Policy</a>
      <span className="separator">|</span>
    </li>
    <li>
      <a href="/">Collection Statement</a>
      <span className="separator">|</span>
    </li>
    <li>
      <a href="/">Help</a>
      <span className="separator">|</span>
    </li>
    <li>
      <a href="/">Management Account</a>
    </li>
  </ul>
);

const FooterCopyrights = () => (
  <div className="footer__copyrights">
    Copyright &copy; 2021 DEMO Streaming. All Right Reserved.
  </div>
);

const FooterSocialLinks = () => (
  <ul className="footer__social-links">
    <li>
      <a href="/">
        <img className="icon" src={FacebookIcon} alt="facebook link icon" />
      </a>
    </li>

    <li>
      <a href="/">
        <img className="icon" src={TwitterIcon} alt="facebook link icon" />
      </a>
    </li>

    <li>
      <a href="/">
        <img className="icon" src={InstagramIcon} alt="facebook link icon" />
      </a>
    </li>
  </ul>
);

const FooterStoreLinks = () => (
  <ul className="footer__store-links">
    <li>
      <a href="/">
        <img className="store-img" src={AppStore} alt="facebook link icon" />
      </a>
    </li> 

    <li>
      <a href="/">
        <img className="store-img" src={PlayStore} alt="facebook link icon" />
      </a>
    </li> 

    <li>
      <a href="/">
        <img className="store-img" src={WindowsStore} alt="facebook link icon" />
      </a>
    </li> 
  </ul>
);

const Footer = () => (
  <footer className="footer">
    <FooterPageLinks />
    <FooterCopyrights />
    <div className="footer__links">
      <FooterSocialLinks />
      <FooterStoreLinks />
    </div>
  </footer>
);

export default Footer;
