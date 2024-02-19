
const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-content">
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>1120 Tanley Rd </p>
          <p>Silver Spring, Maryland</p>
          <p>Email: 1120 Tanley Rd Silver Spring, MD 20904</p>
          <p>Phone: +1 (240) 316-1353</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="www.facebook.com"><i className="fab fa-facebook"></i></a></li>
            <li><a href="www.twitter.com"><i className="fab fa-twitter"></i></a></li>
            <li><a href="www.facebook.com"><i className="fab fa-instagram"></i></a></li>
            {/* Add more social media icons as needed */}
          </ul>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2024</p>
        </footer>
    )

}

export default Footer;