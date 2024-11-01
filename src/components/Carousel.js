import React from 'react';
import time1 from '../components/time1.jpg';
import time2 from '../components/time2.jpg';
import time3 from '../components/time3.jpg';
import time4 from '../components/time4.jpg';

// <img src={time1} className="d-block w-100" alt="Motivational Quotes" />
import '../App.css'; // Adjust the import path based on file location

const Carousel = () => {
  return (
    <div>
        <h2 className='heading'>Motivational Quotes</h2>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={time1} className="d-block w-100" alt="Motivational Quotes"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={time2} className="d-block w-100" alt="Motivational Quotes"/>
          </div>
          <div className="carousel-item">
            <img src={time3} className="d-block w-100" alt="Motivational Quotes"/>
          </div>
          <div className="carousel-item">
            <img src={time4} className="d-block w-100" alt="Motivational Quotes"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
