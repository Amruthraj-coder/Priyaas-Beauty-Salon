import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.scss';

// Updated NAV_ITEMS with hash links for home sections + full pages
const NAV_ITEMS = [
  { path: '/#services', label: 'Services', fullPath: '/services' },
  { path: '/#about', label: 'About', fullPath: '/aboutus' },
  { path: '/#location', label: 'Location', fullPath: '/SalonLocation' },
  // { path: '/blog', label: 'Blog', fullPath: '/blog' },
  { path: '/#contact', label: 'Contact', fullPath: '/contact' },
  // Home is handled separately since it's the landing page
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  // Extract pathname for active state (ignore hash)
  const activePath = location.pathname;

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu on route change
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <nav 
      className={`pretty-navbar${isSticky ? ' sticky' : ''}`} 
      id="navbar" 
      style={{ 
        background: "linear-gradient(to bottom, #FDEDF0 0%, #f1ecedff 40%, #ffffff 100%)" 
      }}
    >
      <div className="navbar-content">
        <Link className="navbar-brand" to="/">
          {/* Your SVG logo here - unchanged */}
          <svg width="350" height="100" viewBox="0 0 350 110" xmlns="http://www.w3.org/2000/svg">
            {/* ... your existing SVG content ... */}
            <text x={70} y={65} fontSize={36} fill="#D678D0" filter="url(#shadow)">
              Priyaa's
            </text>
            <text 
              x={73} 
              y={87} 
              fontFamily="'Poppins', sans-serif"
              fontSize={12} 
              fill="#D678D0" 
              letterSpacing="1.2" 
              filter="url(#shadow)"
            >
              Beauty Salon
            </text>
          </svg>
        </Link>
        
        <button 
          className="navbar-toggler" 
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle navigation menu"
        >
          <span>&#9776;</span>
        </button>
        
        <ul className={`navbar-links${showMenu ? ' show' : ''}`}>
          {/* Home link - always goes to top of home */}
          <li className={activePath === '/' ? 'active' : ''}>
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </Link>
          </li>

          {NAV_ITEMS.map((item, index) => (
            <li 
              key={item.path} 
              className={
                activePath === item.fullPath || 
                (activePath === '/' && location.hash === item.path.replace('/', '#'))
                ? 'active' 
                : ''
              }
            >
              <Link 
                to={item.path}  // Hash link first (e.g., /#services)
                state={{ fromFullPage: item.fullPath }} // Optional: track if coming from full page
              >
                {item.label}
              </Link>
              
              {/* Optional: "Full Page" indicator or separate link */}
              {/* <span className="full-page-link">
                <Link to={item.fullPath} className="small">
                  ↗ Full Page
                </Link>
              </span> */}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
