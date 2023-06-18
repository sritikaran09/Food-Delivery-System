import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Great offers. User-friendly interface. Edit: Would be much better and convenient if there's an option for the users to choose the outlet of the restaurant and not automatically display the one that'll the deliver the fastest. It's not always about delivery time. Sometimes it's about the variation in food quality among different outlets!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Searching for places to eat and ordering online is quick and easy. Keeping a history of earlier visits and favourite places is nice. Sometimes the app doesnt detect the location correctly but that can be fixed with a little manual entry. Ability to filter by type of cuisine, dine in or take away etc is good. The new food category filter is very good. The ordering process has become easier. "
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Amazing app, but it is a little difficult to navigate, especially when I need to order food. Update: Tech feedback: the app when minimized, just disappears, you have to go to apps and open it again, though context is restored, but everytime you have to go open it again, if you minimize. Which most people I think do a lot. Update: this has been fixed now"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
