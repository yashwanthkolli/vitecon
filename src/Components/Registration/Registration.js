import React from 'react'
import './Registration.Styles.scss'

const Registration = () => {
  return (
    <div className='registration'>
        <h1 className='heading-secondary'>Registration Details</h1>
        <div className='content'>
            <div className='pricing'>
                <h3>Pricing:</h3>
                <p className='text'>For Faculty/ Research Scholar: ₹2000 + APC</p>
                <p className='text'>For Student: ₹2000 + APC</p>
                <p className='text'>For Industry: ₹2000 + APC</p>
                <p className='note'>
                    All the prices are incluisve of tax
                    <br />
                    APC- Article Processing Charges will depend on Journal norms
                </p>
            </div>
            <div className='buttons'>
                <button className='btn'>IEEE Paper Format</button>
                <button className='btn'>IEEE Copyright Form</button>
                <button className='btn'>Submit Copyright Form</button>
            </div>
        </div>
        <button className='btn-secondary'>Register Now</button>
    </div>
  )
}

export default Registration