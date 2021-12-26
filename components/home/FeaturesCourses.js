import React from "react";

function FeaturesCourses(props) {
  return (
    <section className="multi-course-crd-sec py-8 bg-white">
      <div className="container">
        <div
          className="
              sec-header
              mb-5
              d-md-flex
              align-items-center
              justify-content-between
              text-center text-md-start
            "
        >
          <h2 className="m-0 sec-heading">Get choice of your course</h2>
          <div className="sec-header-btn mt-4 m-md-0">
            <a className="btn btn-primary" href="courses.html">
              View all
            </a>
          </div>
        </div>
        <div className="sec-content">
          <div className="row multi-course-crd-list">
            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img object-position-left"
                        src="images/img/Courses/system design and analysis.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.5</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">49,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">9</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      Learn System Design and Analysis
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img1.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img1.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Petey Cruiser</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">৳200.00</del>
                      <span>৳150.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img object-position-left"
                        src="images/img/Courses/computer network.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.5</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">49,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">9</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">Learn Computer Network</h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img1.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img1.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Petey Cruiser</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">৳200.00</del>
                      <span>৳150.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/Cyber security.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.5</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">49,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">9</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">Learn Cyber Security</h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img1.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img1.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Petey Cruiser</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">৳200.00</del>
                      <span>৳150.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img object-position-left"
                        src="images/img/Courses/eithical hacking.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.5</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">49,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">9</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">Learn Eithical Hacking</h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img1.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img1.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Petey Cruiser</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">৳200.00</del>
                      <span>৳150.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/java.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.3</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">23,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">7</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">Learn Java Programming</h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Nicole Brown</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">৳150</del>
                      <span>৳99.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/Network security.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.3</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">23,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">7</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">Learn Network Security</h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Nicole Brown</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">৳150</del>
                      <span>৳99.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/HTML (2).png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.7</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">70,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">15</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      Learn HTML5 Programming Beginning
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img2.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img2.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Anna Sthesia</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">৳100.00</del>
                      <span>৳70.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/css.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.2</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">35,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">12</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">Learn CSS Zero To Hero</h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img3.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img3.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Anna Sthesia</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">৳250.00</del>
                      <span>৳220.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/boostrap.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.5</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">49,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">9</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      Learn Bootstrap 5 Css Framework
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img4.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img4.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Paul Molive</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">৳100.00</del>
                      <span>৳50.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/Angular.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.8</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">85,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">17</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      The Complete Angular Course Beginner
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img5.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img5.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Pankaj Kumar</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">320.00</del>
                      <span>৳270.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/REACT.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.8</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">85,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">17</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      The Complete React Course Beginner
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img5.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img5.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Pankaj Kumar</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">320.00</del>
                      <span>৳270.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/Jquery.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.8</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">85,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">17</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      The Complete Jquery Course Beginner To Advance
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img5.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img5.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Pankaj Kumar</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">320.00</del>
                      <span>৳270.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/PHP.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.8</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">85,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">17</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      Learm PHP Programming Zero To Hero
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img5.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img5.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Pankaj Kumar</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">320.00</del>
                      <span>৳270.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/PYTHON (1).png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.8</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">85,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">17</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      Learm Python Programming Zero To Hero
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img5.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img5.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Pankaj Kumar</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">320.00</del>
                      <span>৳270.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/nodejs.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.8</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">85,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">17</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      Learm NodeJS Zero To Hero
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img5.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img5.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Pankaj Kumar</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">320.00</del>
                      <span>৳270.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/MY sql.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.8</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">85,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">17</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      Advanced MySQL course for all
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img5.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img5.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Pankaj Kumar</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">320.00</del>
                      <span>৳270.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/VUE JS.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.8</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">85,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">17</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      The Complete Vue JS Course
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img5.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img5.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Pankaj Kumar</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">320.00</del>
                      <span>৳270.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/c.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.8</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">85,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">17</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      The Complete C Programing Course
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img5.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img5.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Pankaj Kumar</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">320.00</del>
                      <span>৳270.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/cs.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.8</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">85,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">17</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      The Complete C# Programing Course
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img5.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img5.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Pankaj Kumar</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">320.00</del>
                      <span>৳270.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="course-card">
                <div className="crd-img-wrap position-relative">
                  <button className="wish-heart" type="button">
                    <svg
                      className="heart__svg"
                      height="20px"
                      viewbox="0 -20 480 480"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heart__path"
                        d="m348 8c-44.773438.003906-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.195313-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      ></path>
                      <path
                        className="heart__stroke"
                        d="m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0"
                      ></path>
                    </svg>
                  </button>
                  <a href="course-detail.html">
                    <picture>
                      <img
                        className="crd-img"
                        src="images/img/Courses/c++.png"
                        alt="Image Description"
                      />{" "}
                    </picture>
                  </a>
                </div>
                <div className="crd-content">
                  <div
                    className="
                        crd-info
                        py-2
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/star.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">4.8</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-view.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">85,00</span>
                    </div>
                    <div className="crd-info-item d-flex align-items-center">
                      <img
                        className="me-1"
                        src="images/svg/crd-play.svg"
                        alt="Image Description"
                      />
                      <span className="crd-info-txt">17</span>
                    </div>
                  </div>
                  <a href="course-detail.html">
                    <h3 className="card-title my-3">
                      The Complete C++ Programing Course
                    </h3>
                  </a>
                  <div
                    className="
                        crd-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                  >
                    <a
                      className="crd-profile d-flex align-items-center"
                      href="teacher-profile.html"
                    >
                      <picture>
                        <source
                          srcSet="images/webp/profile-img5.webp"
                          type="image/webp"
                        />
                        <img
                          src="images/img/profile-img5.jpg"
                          alt="Image Description"
                        />{" "}
                      </picture>
                      <span className="profile-name ms-2">Pankaj Kumar</span>
                    </a>
                    <div className="crd-price d-flex align-items-baseline">
                      <del className="me-2">320.00</del>
                      <span>৳270.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesCourses;
