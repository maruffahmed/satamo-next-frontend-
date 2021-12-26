import React from "react";

function Categories({ categories }) {
  return (
    <section className="categories-crd-sec-v3 py-8 bg-secondary">
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
          <h2 className="m-0 sec-heading">Top categories</h2>
          <div className="sec-header-btn mt-4 m-md-0">
            <a className="btn btn-primary" href="courses.html">
              See all Categories
            </a>
          </div>
        </div>
        <div className="sec-content">
          <div className="row categories-crd-list categories-crd-list-v3">
            {categories.data.courseCategories.data?.map((item) => (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={item.id}>
                <a
                  className="categories-crd bg-white text-center"
                  href="courses.html"
                >
                  <div className="categories-crd-img">
                    <picture>
                      {/* <source
                        srcSet="images/webp/designimg.webp"
                        type="image/webp"
                      /> */}
                      <img
                        src={`${process.env.PUBLIC_API_URL}${item.attributes.thumbnail.data[0].attributes.url}`}
                        alt="Image Description"
                      />
                    </picture>
                  </div>
                  <div className="crd-content">
                    <h3 className="card-title mt-3 mb-0 text-primary">
                      {item.attributes.title}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
