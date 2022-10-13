import React from 'react';
import { FiPhoneCall, FiMapPin, FiMail } from 'react-icons/fi';
import './ContactUsSection.Styles.scss';
import logo from '../../Assets/images/logo-white.png'

const ContactUsSection = () => {
  return (
    <section className='contact-us-section'>
      <div className='contacts' data-aos="fade-up">
          <div className='contact'>
            <a href='tel:99999999' className='contact-icon'>
              <FiPhoneCall />
            </a>
            <div className='contact-detail'>
              <span>Call Us</span>
              <span>+91 999999999</span>
            </div>
          </div>
          <div className='contact'>
            <a href="mailto:someone@example.com" className='contact-icon'>
              <FiMail />
            </a>
            <div className='contact-detail'>
              <span>Write To Us</span>
              <span>gmailIdrequired@gmail.com</span>
            </div>
          </div>
          <div className='contact'>
            <a href='https://goo.gl/maps/nmKPznJYbMZ6hcoM8' target='_blanck' rel='noreferrer' className='contact-icon'>
              <FiMapPin />
            </a>
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
        Made to Perfection by <span><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/yashwanth-kolli-b8b413208/'>Yashwanth Kolli</a></span>
      </div>
    </section>
  )
}

export default ContactUsSection