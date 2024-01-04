import React from "react"
import service2 from "../../images/services/service2_.png"
import starIcon from "../../images/star-icon_.png"

const OurServices = () => {
  return (
    <>
      <div className="our-mission-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="our-mission-content">
                <div className="content">
                  <span className="sub-title">
                    <img src={starIcon} alt="icon" /> Services
                  </span>

                  <h2>Design & Development</h2>
                  <p>
                    Our design and development team transforms ideas into captivating realities. From pixel-perfect designs to robust code, we breathe life into your vision.
                  </p>

                  <ul className="our-mission-list mb-0">
                    <li>
                      <i className="flaticon-tick"></i>
                      Drupal Development
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Responsive Design
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      UX/UI Design
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      React Development
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      E-commerce Design
                    </li>
                    <li>
                      <i className="flaticon-tick"></i>
                      Web Design
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="our-mission-image">
                <img src={service2} alt="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurServices
