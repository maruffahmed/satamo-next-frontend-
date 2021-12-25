import React from "react";

function Hero(props) {
  return (
    <section
      className="
          hero-banner-v3
          position-relative
          bg-dark
          d-flex
          align-items-center
        "
    >
      <div className="container">
        <div className="banner-content text-center">
          <h1 className="banner-heading text-white">
            To expand your career, get in touch with us.
          </h1>
          <p className="banner-brief text-white mt-3 my-md-4">
            Here you can select the best course for your career from a wide
            range of courses.
          </p>
          <a className="btn btn-primary" href="courses.html">
            Get Started Now for Free
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
