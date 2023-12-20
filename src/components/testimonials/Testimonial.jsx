import React from "react";
import "./testimonial.css";
import AVT1 from "../../assets/Certificate.jpg";
import AVT2 from "../../assets/Bootcamp.jpeg";
import AVT3 from "../../assets/RCVIIT.png";
import AVT4 from "../../assets/Google.png";
import AVT5 from "../../assets/Web Dev.png";
import AVT6 from "../../assets/Udemy.png";
import AVT7 from "../../assets/Public Speaking.jpeg";
import AVT8 from "../../assets/reactboot.jpeg";
import AVT9 from "../../assets/CN.jpg";
import AVT10 from "../../assets/Code.jpg";


// import Swiper core and required modules
import {Pagination} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Certifications</h5>
      <h2>FUN AND LEARN</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >


        <SwiperSlide className="testimonial">
          <h3 className="client__name">DSA by Coding Ninjas</h3>
          <small className="client__review">
            Learned all Linear , Non-Linear Data Structures availble in Course Work by Coding Ninjas.
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT9} alt="Avatar 1" />
          </div>
        </SwiperSlide>



        <SwiperSlide className="testimonial">
          <h3 className="client__name">OOP by Coding Ninjas</h3>
          <small className="client__review">
            Learned all the concepts of Object Oriented Programming availble in Course Work by Coding Ninjas(Codestudio).
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT10} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        <SwiperSlide className="testimonial">
          <h3 className="client__name">ROTARACT CLUB OF VIIT</h3>
          <small className="client__review">
            I was in Professional Development Section , arranged Events attended
            Events at Distict Level.
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT3} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        <SwiperSlide className="testimonial">
          <h3 className="client__name">Google CloudReady Facilitator Program</h3>
          <small className="client__review">
            Worked with Cloud Computing and completed the Labs as Instructed and
            acheived Milestone 1
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT4} alt="Avatar 1" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <h3 className="client__name">ReactJs and BootStrap</h3>
          <small className="client__review">
            Got to learn how to use Bootstrap for Styling in ReactJs for Websites .
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT8} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        <SwiperSlide className="testimonial">
          <h3 className="client__name">Public Speaking Skills</h3>
          <small className="client__review">
            Got to learn how to interact with People how to boost up the confidence during Speech and Public Speaking .
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT7} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        {/* <SwiperSlide className="testimonial">
          <h3 className="client__name">C++ Programming</h3>
          <small className="client__review">
            Studied and debugged the Programs from begineer to advance in C++.Course instructor was Abdul Bari.
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT6} alt="Avatar 1" />
          </div>
        </SwiperSlide> */}



        <SwiperSlide className="testimonial">
          <h3 className="client__name">Full Stack Web Development</h3>
          <small className="client__review">
            Our College has Orgainsed this 1 Month Bootcamp and learned skills
            about Web Dev , MERN Stack , FrontEnd , Backend ,etc.
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT5} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        


        <SwiperSlide className="testimonial">
          <h3 className="client__name">C++ BOOTCAMP</h3>
          <small className="client__review">
            The Bootcamp was orgainsed by Alumni of VIT College which was 3 Days
            Bootcamp. Got to know various C++ Concepts
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT2} alt="Avatar 1" />
          </div>
        </SwiperSlide>


        {/* <SwiperSlide className="testimonial">
          <h3 className="client__name">RoadMap for Competative Progeramming</h3>
          <small className="client__review">
            Attended the Event hosted by Codechef VIIT Roadmap for Competetive
            Programming, skills required for the same.
          </small>
          <small className="client__review"></small>
          <div className="client__avatar">
            <img src={AVT1} alt="Avatar 1" />
          </div>
        </SwiperSlide> */}
      
      </Swiper>
    </section>
  );
};

export default Testimonial;
