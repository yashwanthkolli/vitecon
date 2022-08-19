import React from 'react'
import './Publication.Styles.scss'

const Publication = () => {
  return (
    <div className='publication'>
        <div className='content'>
            <h1 className='heading-secondary'>Publication Details</h1>
            <ul>
                <li className='text'>All the registered and presented papers will be published in conference proceedings with ISBN number.</li>
                <li className='text'>Also the selected papers will be published in SCOPUS indexed journals based on author's consent. List of journals will be announced soon.</li>
            </ul>
        </div>
    </div>
  )
}

export default Publication