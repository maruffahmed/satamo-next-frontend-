import React from "react";

function Header(props) {
  return (
    <header className="header header-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="index.html">
            <img src="/img/SatamoLogoBg.png" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 rounded">
              <li className="nav-item dropdown mega-nav-item mx-lg-4 mt-lg-0 mt-2">
                <a
                  className="nav-link p-0 py-lg-0 py-2 d-flex align-items-center"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown mt-lg-0 mt-2">
                <button
                  className="
                    nav-link
                    p-0
                    py-lg-0 py-2
                    dropdown-toggle
                    d-flex
                    align-items-center
                  "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                  <span className="dropdown-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        className="header-svg-fill"
                        d="M12,15.5a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.79L12,13.1l3.3-3.18a1,1,0,1,1,1.38,1.44l-4,3.86A1,1,0,0,1,12,15.5Z"
                      ></path>
                    </svg>
                  </span>
                </button>
                <ul className="dropdown-menu border-0">
                  <li>
                    <a className="dropdown-item" href="courses.html">
                      All Courses
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="courses.html">
                      Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="courses.html">
                      Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="courses.html">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="courses.html">
                      Photography
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-lg-4 mt-lg-0 mt-2">
                <button
                  className="
                    nav-link
                    p-0
                    py-lg-0 py-2
                    dropdown-toggle
                    d-flex
                    align-items-center
                  "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features
                  <span className="dropdown-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        className="header-svg-fill"
                        d="M12,15.5a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.79L12,13.1l3.3-3.18a1,1,0,1,1,1.38,1.44l-4,3.86A1,1,0,0,1,12,15.5Z"
                      ></path>
                    </svg>
                  </span>
                </button>
                <ul className="dropdown-menu border-0">
                  <li>
                    <a className="dropdown-item" href="course-detail.html">
                      Programing Courses
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="course-detail-version2.html"
                    >
                      Security Courses
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mt-lg-0 mt-2">
                <button
                  className="
                    nav-link
                    p-0
                    py-lg-0 py-2
                    dropdown-toggle
                    d-flex
                    align-items-center
                  "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                  <span className="dropdown-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        className="header-svg-fill"
                        d="M12,15.5a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.79L12,13.1l3.3-3.18a1,1,0,1,1,1.38,1.44l-4,3.86A1,1,0,0,1,12,15.5Z"
                      ></path>
                    </svg>
                  </span>
                </button>
                <ul className="dropdown-menu border-0">
                  <li>
                    <a className="dropdown-item" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-detail.html">
                      Blog details
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <a
              className="d-block d-sm-none mt-4 mx-2 btn btn-primary"
              href="register.html"
            >
              Register
            </a>
          </div>
          <div className="d-flex align-items-center">
            <a className="header-search-btn btn me-2" href="courses.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  className="header-svg-fill"
                  d="M20.71,19.29l-3.4-3.39A7.92,7.92,0,0,0,19,11a8,8,0,1,0-8,8,7.92,7.92,0,0,0,4.9-1.69l3.39,3.4a1,1,0,1,0,1.42-1.42ZM5,11a6,6,0,1,1,6,6,6,6,0,0,1-6-6Z"
                ></path>
              </svg>
            </a>
            <a className="header-cart-btn mx-2" href="cart.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  className="header-svg-fill"
                  d="M21.08,7a2,2,0,0,0-1.7-1H6.58L6,3.74A1,1,0,0,0,5,3H3A1,1,0,0,0,3,5H4.24L7,15.26A1,1,0,0,0,8,16h9a1,1,0,0,0,.89-.55l3.28-6.56A2,2,0,0,0,21.08,7Zm-4.7,7H8.76L7.13,8H19.38Z"
                ></path>
                <circle
                  className="header-svg-fill"
                  cx="1.5"
                  cy="1.5"
                  r="1.5"
                  transform="translate(6 18)"
                ></circle>
                <circle
                  className="header-svg-fill"
                  cx="1.5"
                  cy="1.5"
                  r="1.5"
                  transform="translate(16 18)"
                ></circle>
              </svg>
            </a>
            <button
              className="navbar-toggler ms-2 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <a
              className="btn btn-primary d-none d-sm-block ms-4"
              href="register.html"
            >
              Register
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
