import React from "react";

function StudentReview(props) {
  return (
    <section className="testimonial-slider-v3 py-8 bg-dark custom-slider-btn">
      <div className="container">
        <div
          className="
              sec-header
              mb-5
              d-md-flex
              align-items-center
              justify-content-between
              text-center text-md-start text-white
            "
        >
          <h2 className="m-0 sec-heading">What our students have to say</h2>
          <div className="sec-slide-btns mt-4 m-md-0 d-none d-md-block">
            <div className="crd-slider-btns d-flex justify-content-between">
              <button className="btn slide-btn slide-prev" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path
                    className="b"
                    d="M5,11H16.86L13.23,6.64a1,1,0,0,1,1.54-1.28l5,6a1.19,1.19,0,0,1,.09.15.127.127,0,0,0,.07.13.961.961,0,0,1,0,.72.127.127,0,0,1-.07.13,1.19,1.19,0,0,1-.09.15l-5,6a1,1,0,1,1-1.54-1.28L16.86,13H5a1,1,0,0,1,0-2Z"
                    transform="translate(0)"
                  ></path>
                </svg>
              </button>
              <button className="btn slide-btn ms-4 slide-next" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path
                    className="b"
                    d="M5,11H16.86L13.23,6.64a1,1,0,0,1,1.54-1.28l5,6a1.19,1.19,0,0,1,.09.15.127.127,0,0,0,.07.13.961.961,0,0,1,0,.72.127.127,0,0,1-.07.13,1.19,1.19,0,0,1-.09.15l-5,6a1,1,0,1,1-1.54-1.28L16.86,13H5a1,1,0,0,1,0-2Z"
                    transform="translate(0)"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="testimonial-list">
            <div className="testimonial-item">
              <div className="row align-items-center justify-content-between">
                <div className="col-md-5 testimonial-profile-img">
                  <picture>
                    <source
                      srcset="images/webp/testimonial-v2-2.webp"
                      type="image/webp"
                    />
                    <img
                      className="m-auto m-md-0"
                      src="images/img/testimonial-v2-2.png"
                      alt="Image Description"
                    />
                  </picture>
                </div>
                <div className="col-md-7 testimonial-txt mt-4 mt-md-0">
                  <i className="card-title text-white mb-4 lh-lg d-block">
                    Satamo Intelligence is the best platform that gives us the
                    most meaningful complete courses for your career.
                  </i>
                  <p className="card-text text-white mt-2 d-block">
                    Riaz Surti | Hearthy Foods
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="row align-items-center justify-content-between">
                <div className="col-md-5 testimonial-profile-img">
                  <picture>
                    <source
                      srcset="images/webp/testimonial-v2-1.webp"
                      type="image/webp"
                    />
                    <img
                      className="m-auto m-md-0"
                      src="images/img/testimonial-v2-1.png"
                      alt="Image Description"
                    />
                  </picture>
                </div>
                <div className="col-md-7 testimonial-txt mt-4 mt-md-0">
                  <i className="card-title text-white mb-4 lh-lg d-block">
                    If you want to grow your career in the correct direction,
                    you must register on Satamo Intelligence. This will allow
                    you to learn many things from different courses
                  </i>
                  <p className="card-text text-white mt-2 d-block">
                    Bradley Smythe | Student
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="row align-items-center justify-content-between">
                <div className="col-md-5 testimonial-profile-img">
                  <picture>
                    <source
                      srcset="images/webp/girl-img-study.webp"
                      type="image/webp"
                    />
                    <img
                      className="m-auto m-md-0"
                      src="images/img/girl-img-study.png"
                      alt="Image Description"
                    />
                  </picture>
                </div>
                <div className="col-md-7 testimonial-txt mt-4 mt-md-0">
                  <i className="card-title text-white mb-4 lh-lg d-block">
                    Are you finding a place where you will get all courses
                    related to your career, then Satamo Intelligence is the
                    right place. Here you will get a wide range of courses from
                    which you can select the one for you.
                  </i>
                  <p className="card-text text-white mt-2 d-block">
                    Mahir Dindsa | Student
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentReview;
