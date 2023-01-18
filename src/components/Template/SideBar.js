import React from 'react';

import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ayushya Jaiswal</h2>
        <p><a href="mailto:ayushyajaiswal@gmail.com">ayushyajaiswal@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ayushya. I like building things beautiful.
        I am a <a href="https://vit.ac.in/">Vellore Institute of Technology, B.Tech. CSE</a> graduate. Currently, I am Senior Software Engineer
        at <a href="https://uipath.com">UiPath</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ayushya Jaiswal <Link to="/">https://ayushya.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
