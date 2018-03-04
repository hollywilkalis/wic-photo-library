import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import { Carousel } from 'react-bootstrap';


function Home(){
  return (
    <div className="home-container">
      <style jsx>{`
        .home-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          }

        h3 {
          color: cream;
          font-weight: bold;
          font-size: 35px;
        }

        p {
          font-size: 20px;
        }
        }
        `}</style>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://github.com/hollywilkalis/capstone-planning/blob/master/samples/BFMB_035_PPT.jpg?raw=true" />
            <Carousel.Caption>
              <h3>WIC clinics</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://github.com/hollywilkalis/capstone-planning/blob/master/samples/CLN_014_PPT.jpg?raw=true" />
            <Carousel.Caption>
              <h3>Families</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://github.com/hollywilkalis/capstone-planning/blob/master/samples/FAM_036_PPT.jpg?raw=true" />
            <Carousel.Caption>
              <h3>Breastfeeding</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Footer />
    </div>
  );
}

export default Home;
