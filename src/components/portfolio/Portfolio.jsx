import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Python.jpg'
import IMG2 from '../../assets/Socket.webp'
import IMG3 from '../../assets/library.jpg'
import IMG4 from '../../assets/startup.jpeg'
import IMG5 from '../../assets/weed.jpg'
import IMG6 from '../../assets/todo.png'


const Portfolio = () => (

  

  <section id='portfolio'>
    <h5>Projects with Programming Languages</h5>
    <h2>My Projects</h2>
    <div className="container portfolio__container">


      {/* New Projects Updated */}

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG4} alt="" />
        </div>
        <h3>Upstart </h3>
        <div className="portfolio__item-cta">
          <a href="https://21-crawlers.vercel.app/" className='btn' target='_blank'>Live</a>
          <a href="https://github.com/khushalmalu0401/Upstart" className='btn' target='_blank'>Github</a>
        </div>
      </article>
      
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG6} alt="" />
        </div>
        <h3> To Do List </h3>
        <div className="portfolio__item-cta">
          <a href="https://todo-list-brown-pi.vercel.app/" className='btn' target='_blank'>Live</a>
          <a href="https://github.com/khushalmalu0401/Basic-Todo-List-Project-" className='btn' target='_blank'>Github</a>
        </div>
      </article>


      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG5} alt="" />
        </div>
        <h3>Weed Detection </h3>
        <div className="portfolio__item-cta">
          <a href="https://drive.google.com/file/d/1Y1jZ9oseoRXY7ssy4XGqvrMvqQKhAAj5/view?usp=sharing" className='btn' target='_blank'>Live</a>
          <a href="https://github.com/RiteshLade28/Weeds-Detection-Using-YOLOv5-Terminal-Based" className='btn' target='_blank'>Github</a>
        </div>
        
      </article>


      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG2} alt="" />
        </div>
        <h3>Socket Programming </h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/khushalmalu0401/Socket-Programming.git" className='btn' target='_blank'>Github </a>
        </div>

      </article>



      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG1} alt="" />
        </div>
        <h3>Countdown , Clock & Timer </h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/khushalmalu0401/Countdown-Clock-Timer-using-Python.git" className='btn' target='_blank'>Github </a>
        </div>
      </article>

      
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img className="imageStyle" src={IMG3} alt="" />
        </div>
        <h3>Library Management</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/khushalmalu0401/Library-Managememnt-using-Linked-List.git" className='btn' target='_blank'>Github </a>
        </div>

      </article>


    </div>
  </section>
)

export default Portfolio