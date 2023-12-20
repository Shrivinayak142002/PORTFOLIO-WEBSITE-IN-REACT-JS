import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {MdOutlineContactMail} from 'react-icons/md'
import './header.css';
const headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/khushal-malu-69b5a3211/" target="_blank"><GrLinkedin size={30}/></a>
        <a href="https://github.com/khushalmalu0401" target="_blank"><BsGithub size={30}/></a>
        <a href="#contact"><MdOutlineContactMail size={30}/></a>
    </div>
  )
}

export default headersocial