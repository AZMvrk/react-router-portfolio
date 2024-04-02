import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import your CSS file

function Header({ lang }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link to='/'>{lang ? "Home" : "Kezdőlap"}</Link>
      <Link to='/pages'>{lang ? "Pages" : "Oldalak"}</Link>
      <Link to='/gallery'>{lang ? "Gallery" : "Galéria"}</Link>
      <Link to='/media'>{lang ? "Media" : "Média"}</Link>
    </header>
  );
}

export default Header;
