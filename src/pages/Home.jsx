import '../styles/Home.scss'; // You can place your CSS/SCSS here

const Home = () => (
  <div className="home-hero">
    <div className="overlay">
      <div className="hero-content">
        <div className="logo-icon">{/* Optionally use an inline SVG or image for the logo */}</div>
        <h1 className="subtitle">PRIYAA'S</h1>
        <h1 className="title">BEAUTY SALON</h1>
        <p className="credit">Created by Priyaa'sBeautySalon.com</p>
        <a href="/services" className="cta-btn">View Our Services</a>
      </div>
    </div>
  </div>
);

export default Home;
