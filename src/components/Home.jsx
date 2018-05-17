import React from 'react';

import { Carousel } from 'react-bootstrap';


function Home(){
  return (
    <div className="home-container">
      <style jsx>{`
        .home-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          height: auto;
          }

        .caption {
          color: cream;
          font-weight: bold;
          font-size: 35px;
        }

        `}</style>
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/photo-library-7d682.appspot.com/o/BFMB_035_PPT.jpg?alt=media&token=12b8fead-3d5e-4dd8-8a3e-4f7fa897b9e5" />
          <Carousel.Caption>
            <h3 className="caption">Breastfeeding</h3>
            <p>Link to breastfeeding category</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/photo-library-7d682.appspot.com/o/CLN_014_PPT.jpg?alt=media&token=40cfabe6-4572-4189-8e97-dae53a65cb03" />
          <Carousel.Caption>
            <h3 className="caption">WIC clinics</h3>
            <p>Link to clinic category</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/photo-library-7d682.appspot.com/o/FAM_036_PPT.jpg?alt=media&token=eb82dd10-db3a-43a7-a8d9-247a904a946d" />
          <Carousel.Caption>
            <h3 className="caption">Families</h3>
            <p>Link to families category</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
