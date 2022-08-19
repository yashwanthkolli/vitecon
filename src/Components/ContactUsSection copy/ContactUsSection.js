import React from 'react';
import { FiPhoneCall, FiMapPin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './ContactUsSection.Styles.scss';
import logo from '../../Assets/images/logo-white.png'

const ContactUsSection = () => {
  return (
    <section className='contact-us-section'>
      <div className='contacts' data-aos="fade-up">
          <div className='contact'>
            <Link to='/' className='contact-icon'>
              <FiPhoneCall />
            </Link>
            <div className='contact-detail'>
              <span>Call Us</span>
              <span>+91 999999999</span>
            </div>
          </div>
          <div className='contact'>
            <Link to='/' className='contact-icon'>
              <FiMail />
            </Link>
            <div className='contact-detail'>
              <span>Write To Us</span>
              <span>gmailIdrequired@gmail.com</span>
            </div>
          </div>
          <div className='contact'>
            <Link to='/' className='contact-icon'>
              <FiMapPin />
            </Link>
            <div className='contact-detail'>
              <span>Vellore Institute of Technology, </span>
              <span>Vellore- 632014</span>
            </div>
          </div>
      </div>
      <div className='details'>
        <div className='company-text' data-aos="fade-up">
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
        </div>
        <div className='subscribe' data-aos="fade-up">
          <p className='subscribe-heading'>Dr. ThanikaSelvan V</p>
          <p className='subscribe-text'>Department of Communication Engineering, </p>
          <p className='subscribe-text'>School of Electronics Engineering, </p>
          <p className='subscribe-text'>VIT, Vellore </p>
        </div>
      </div>
      <div className='footer'>
        Made to Perfection by <span><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/yashwanth-kolli-b8b413208/'>Yashwanth Kolli</a></span> and <span><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/yashwanth-kolli-b8b413208/'>Aneesh S</a></span>
      </div>
    </section>
  )
}

export default ContactUsSection