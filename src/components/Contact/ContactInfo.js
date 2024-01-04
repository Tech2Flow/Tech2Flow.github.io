import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { Link } from "gatsby"

const ContactInfo = () => {
  const { address, country, siteEmail, phoneNumber } = useSiteMetadata()

  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-map"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-map"></i>
                </div>
                <h3>Our Address</h3>
                <p>{address}</p>
                <p>{country}</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <h3>Contact</h3>
                <p>
                  Mobile: {phoneNumber}
                </p>
                <p>
                  E-mail: <Link to={`mailto:` + siteEmail}>{siteEmail}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
