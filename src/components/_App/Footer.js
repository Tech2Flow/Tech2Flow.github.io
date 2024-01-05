import React from "react"
import { Link } from "gatsby"
import logo from "../../images/tech2flow_logo.svg"
import footerMap from "../../images/footer-map.png"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { title, description, siteEmail, address, country, phoneNumber, social } = useSiteMetadata()

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 text-center text-lg-start">
            <div className="single-footer-widget">
              <Link to="/" className="logo">
                <img src={logo} alt="logo" />
              </Link>
              <p>
                {description}
              </p>

              <ul className="social-link">
                <li>
                  <Link
                    to={`https://www.facebook.com/` + social?.facebook}
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`https://www.twitter.com/` + social?.twitter}
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`https://www.linkedin.com/` + social?.linkedin}
                    className="d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6 text-center text-sm-start">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 text-center text-sm-start">
            <div className="single-footer-widget">
              <h3>Address</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map d-none d-sm-inline-block"></i>
                  {address}, <br /> {country}
                </li>
                <li>
                  <i className="bx bx-phone-call d-none d-sm-inline-block"></i>
                  {phoneNumber}
                </li>
                <li>
                  <i className="bx bx-envelope d-none d-sm-inline-block"></i>
                  <Link to={`mailto:` + siteEmail}>{siteEmail}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <p>
                Copyright @{currentYear} - All rights
                reserved{" "}
                <Link
                  to="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="map" />
      </div>
    </footer>
  )
}

export default Footer
