import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id='service'>
      <h5>Learn Lead Inspire</h5>
      <h2>Education</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>B. Tech (Information Technology)</h3>
          </div>
          <ul className='service__list'>
          <li>
            <p>Vishwakarma Institute of Information Technology , Pune.</p>
          </li>
          <li>
            <p>Status : Pursuing 2020-2024</p>
          </li>
          <li>
            <p>Result : 9.55 CGPA </p>
          </li>
          </ul>
        </article>
        {/* END OF Btech */}
        <article className='service'>
          <div className='hello'>
          <div className="service__head">
            <h3>12th HSC</h3>
          </div>
          <ul className='service__list'>
          <li>
            <p>Manere HighSchool & Junior College , Ichalkaranji.</p>
          </li>
          <li>
            <p>Status : Passed 2020</p>
          </li>
          <li>
            <p>Result : 83.08%</p>
          </li>
          </ul>
          </div>
        </article>
        {/* END OF HSC*/}
        <article className='service'>
          <div className="service__head">
            <h3>10th CBSE</h3>
          </div>
          <ul className='service__list'>
          <li>
            <p>Late Mrs. Housabai Jayapal Magdum Public HighSchool , Nimshirgaon.</p>
          </li>
          <li>
            <p>Status : Passed 2018</p>
          </li>
          <li>
            <p>Result : 82.6%</p>
          </li>
          </ul>
        </article>
        {/* END OF Content */}
      </div>
    </section>
  )
}

export default Services