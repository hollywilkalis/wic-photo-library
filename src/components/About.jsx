import React from 'react';
import PropTypes from 'prop-types';

function About(){
  return (
    <div className='about-container'>
      <style jsx>{`

        .imagedropshadow {
          width: 40%;
          float: right;
          margin: 20px;
          padding: 8px;
          border: solid 1px #EFEFEF;
          -moz-box-shadow: 1px 1px 5px #999;
          -webkit-box-shadow: 1px 1px 5px #999;
              box-shadow: 1px 1px 5px #999;
        }

        h2 {
          color: #2e3192;
          font-size: 30px;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .about-container {
          padding: 20px;
        }

        `}</style>
      <img className='imagedropshadow' src='https://firebasestorage.googleapis.com/v0/b/photo-library-7d682.appspot.com/o/FAM_024_FB.jpg?alt=media&token=eacee439-e891-4a1a-a6ad-26e24c149e34'/>

      <h2>About the WIC Photo Library</h2>

      <p>For guidelines on the use of photos from this library, please see our <a href='http://www.oregon.gov/oha/PH/HEALTHYPEOPLEFAMILIES/WIC/Documents/Photo%20Project/photo-project-user-guide.pdf'>Photo Project User's Guide</a>.</p>

      <p>They say that a picture is worth a thousand words, and we believe that the images we use in our educational and outreach materials are every bit as important as the words we use to convey our messages. The images we use help convey our vision and our values to our participants and partners.</p>

      <p>This project came to life in response to the need for relevant stock photography to better represent WIC and our participants. In 2016, the National WIC Association (NWA) developed a new branding campaign, which the Oregon WIC Program decided to adopt. This meant not only offering up a new logo, it offered the opportunity to rebrand WIC to more accurately represent our values as a program. The look and feel of the materials we provide sets the tone for our work. The guiding principles we put forth for our photo usage is this:</p>

      <blockquote>“We use photos that are natural, real, and don’t feel staged. When looking for photos, you should avoid studio photography. Try to choose photos that feature parents and children in their natural settings, such as in their homes. Be sure to include people of different ethnicities, as well as moms, dads, and grandparents.”</blockquote>

      <p>We at the State office decided to invest in some quality photos to help in this rebranding effort, and wanted to include the local agencies, which led to this project.</p>

      <p>All of the photos in this collection are of actual Oregon WIC participants and their family members, and we are proud to present them to our local agencies for use in all their stock photo needs. The photographers, in many cases, are parents themselves, and some are also current or former WIC participants!</p>

      <p>There are over 150 photos in this collection, all submitted from five local agencies. We would like to thank the following agencies for taking the initiative on hiring local photographers, all of whom made this project such a success! Thanks to Washington County, Jackson County, North Central Health District, Josephine County, and UCAN - Umpqua Community Action Network. You help us look good!</p>

      <h3>About this site</h3>
      <p>This site was created Holly Wilkalis, our former Publications Coordinator, who always wished she had a photo library like this to draw on when creating materials. When she needed a project for her code school's capstone, she eagerly volunteered to take on the task of creating a library interface to show off the beautiful work of our local staff and partner photographers. If you have technical questions about the library, she can be reached at <a href='mailto:holly.wilkalis@gmail.com'>holly.wilkalis@gmail.com</a> or via <a href='https://www.linkedin.com/in/holly-wilkalis/'>LinkedIn account.</a></p>
    </div>
  );
}

export default About;
