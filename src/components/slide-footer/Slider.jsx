import React, { Component } from "react";
import SliderMain from "react-slick";
import image1 from "../../images/menu images/KEBAB/Picture1.jpg"
import image2 from "../../images/landing page images/second section images/Pepperoni-Pizza 1.png"
import Item from '../Prodects/Item'
import "slick-carousel/slick/slick.css";
import "./slider.css"
import "slick-carousel/slick/slick-theme.css";

function CenterMode() {
  
  const settings = {
    className: "slider-main",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll:1, 
    speed: 400
  };
  return (
    <div className="slider-container-main">
      <SliderMain {...settings}>
        <div className="shadow">
        <Item price={"18"} image1={image2}/>
        </div>
        <div className="shadow">
        <Item price={"18"} image1={image2}/>
        </div>
        <div className="shadow">
        <Item price={"18"} image1={image2}/>
        </div>
        <div className="shadow">
        <Item price={"18"} image1={image2}/>
        </div>
        <div className="shadow">
        <Item price={"18"} image1={image2}/>
        </div>
        <div className="shadow">
        <Item price={"18"} image1={image2}/>
        </div>
        
      </SliderMain>
    </div>
  );
}

export default CenterMode;