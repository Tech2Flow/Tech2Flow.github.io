import React from "react"
import { Link } from "gatsby"

const ServicesOne = () => {
  return (
    <>
      <section className="solutions-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-rocket"></i>
                </div>
                <h3>
                  <Link to=">">Cutting-Edge Expertise</Link>
                </h3>
                <p>
                  We stay at the forefront of technological advancements, ensuring that our
                  solutions are always up-to-date and aligned with the latest trends. Our team is
                  well-versed in a wide range of technologies, from cloud computing and cybersecurity
                  to mobile development and artificial intelligence.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>

                <h3>
                  <Link to="#">Tailored <br />Solutions</Link>
                </h3>

                <p>
                  We don't believe in one-size-fits-all solutions. Each business has its own unique
                  challenges and aspirations, and we take the time to understand your specific needs
                  before designing a personalised solution. We work closely with you to ensure that our
                  solutions are aligned with your long-term goals and business objectives.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link to="#">Responsive and Dedicated Support</Link>
                </h3>

                <p>
                  We're committed to providing exceptional customer support, and are always available to assist
                  you with any questions or issues you may encounter. Our team is responsive and
                  proactive, ensuring that you have the support you need to get the most out of our
                  solutions.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-money"></i>
                </div>

                <h3>
                  <Link to="#">Affordable and Value-Driven Solutions</Link>
                </h3>

                <p>
                  We understand that businesses have varying budgets. That's why we offer a range of
                  affordable solutions that are tailored to your specific needs and requirements.
                  We believe in providing value for your investment and delivering solutions that drive
                  real business outcomes.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesOne
