import React from "react"
import { Link } from "gatsby"
import shape from "../../images/shape/circle-shape1.png"

const ProjectStartArea = () => {
  return (
    <>
      <div className="project-start-area ptb-100">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-12 col-md-12">
              <div className="project-start-content">
                <h2>Embark on Your Project Journey with Us!</h2>
                <p>
                  At our core, we thrive on initiating projects with a passion for innovation and dedication. Experience a seamless journey as we bring your ideas to life, ensuring excellence from inception to completion.
                </p>

                <Link to="/contact" className="default-btn">
                  <i className="flaticon-web"></i>
                  Get Started
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape1">
          <img src={shape} alt="project" />
        </div>
      </div>
    </>
  )
}

export default ProjectStartArea
