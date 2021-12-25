import React from "react";

function HeroSteps(props) {
  return (
    <section className="skilify-info-sec">
      <div className="container">
        <ul
          className="
              d-flex
              flex-wrap
              align-items-center
              justify-content-center
              skilify-info-points
              bg-white
              position-relative
              p-2
            "
        >
          <li className="skilify-info-point d-flex align-items-center p-2 p-md-4">
            <div className="skilify-info-point-img me-3">
              <img src="/svg/courses.svg" alt="Image Description" />
            </div>
            <div className="skilify-info-point-txt">
              <h3 className="card-title m-0">100k Online Courses</h3>
            </div>
          </li>
          <li
            className="
                skilify-info-point
                info-point-primary
                d-flex
                align-items-center
                p-2 p-md-4
              "
          >
            <div className="skilify-info-point-img me-3">
              <img src="/svg/expert.svg" alt="Image Description" />
            </div>
            <div className="skilify-info-point-txt">
              <h3 className="card-title m-0">Expert Instruction</h3>
            </div>
          </li>
          <li className="skilify-info-point d-flex align-items-center p-2 p-md-4">
            <div className="skilify-info-point-img me-3">
              <img src="/svg/courses.svg" alt="Image Description" />
            </div>
            <div className="skilify-info-point-txt">
              <h3 className="card-title m-0">Lifetime Access</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HeroSteps;
