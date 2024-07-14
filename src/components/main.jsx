import React from "react";
import "./Home.css"; // Custom CSS file for additional styling

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            className="card-img img-fluid"
            src="./assets/front.jpg"
            alt="Card"
          />
          <div className="card-img-overlay d-flex align-items-center justify-content-center">
            <div className="container">
              <h5 className="card-title-overlay fs-1 text fw-lighter word">
                <span>Dance Your Heart Out with NYD</span>
              </h5>
              <p className="card-text-overlay fs-5 word">
                <span>Join us and experience the joy of dance.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
