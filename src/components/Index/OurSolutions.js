import React from "react"
import { Link } from "gatsby"
import starIcon from "../../images/star-icon_.png"
import "./OurSolutions.scss"

const OurSolutions = () => {
  return (
    <>
      <section className="solutions-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="star" />
              Our Solutions
            </span>
            <h2>Why Choose Tech2Flow?</h2>
            <p>
              At Tech2Flow, we're passionate about helping businesses of all sizes harness the power
              of technology to achieve their goals. Our team of experienced professionals is committed
              to providing innovative, cost-effective solutions that meet your unique needs. Here are
              just a few reasons why you should choose Tech2Flow:
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-rocket"></i>
                </div>
                <h3>
                  <Link to="/services/service-details">Cutting-Edge Expertise</Link>
                </h3>
                <p>
                  We stay at the forefront of technological advancements, ensuring that our
                  solutions are always up-to-date and aligned with the latest trends. Our team is
                  well-versed in a wide range of technologies, from cloud computing and cybersecurity
                  to mobile development and artificial intelligence.
                </p>

                <Link to="/services/service-details" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>

                <h3>
                  <Link to="/services/service-details">Tailored Solutions</Link>
                </h3>

                <p>
                  We don't believe in one-size-fits-all solutions. Each business has its own unique
                  challenges and aspirations, and we take the time to understand your specific needs
                  before designing a personalized solution. We work closely with you to ensure that our
                  solutions are aligned with your long-term goals and business objectives.
                </p>

                <Link to="/services/service-details" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link to="/services/service-details">Responsive and Dedicated Support</Link>
                </h3>

                <p>
                  We're committed to providing exceptional customer support, always available to assist
                  you with any questions or issues you may encounter. Our team is responsive and
                  proactive, ensuring that you have the support you need to get the most out of our
                  solutions.
                </p>

                <Link to="/services/service-details" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link to="/services/service-details">Affordable and Value-Driven Solutions</Link>
                </h3>

                <p>
                  We understand that businesses have varying budgets. That's why we offer a range of
                  affordable solutions that are tailored to your specific needs and requirements.
                  We believe in providing value for your investment, delivering solutions that drive
                  real business outcomes.
                </p>

                <Link to="/services/service-details" className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurSolutions
