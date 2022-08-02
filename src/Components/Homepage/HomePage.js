import React from 'react'
import './HomePage.Styles.scss'
import vitLogo from '../../Assets/images/logo.png'
import viteconLogo from '../../Assets/images/vitecon-logo1.png'
import ieeeLogo from '../../Assets/images/ieee-logo.png'
import vitImg from '../../Assets/images/vit-clg.jpg'
import { IoCalendarNumberSharp, IoLocationSharp } from 'react-icons/io5'

const HomePage = () => {
    return (
        <div className='homepage'>
            <section className='landing-section'>
                <div className='content'>
                    <div className='heading-logo-container'>
                        <img src={viteconLogo} alt='vit-logo' />
                    </div>
                    <div className='heading-primary'>
                        7th International Conference on <br />
                        Communication and Electronics Systems <br />
                        ICCES 2022
                    </div>
                    <div className='details'>
                        <span className='detail event-date'><IoCalendarNumberSharp />23-24 May, 2023</span>
                        <span className='detail event-date'><IoLocationSharp />Anna Auditorium, VIT</span>
                    </div>
                    <div className='buttons'>
                        <button className='btn'>Presentation Schedule</button>
                        <button className='btn'>Brochure</button>
                        <button className='btn'>IEEE Website</button>
                    </div>
                    <div className='event-handlers'>
                        <div className='handler ieee-details'>
                            <div className='logo-container'>
                                <img src={ieeeLogo} alt='IEEE Logo' />
                            </div>
                        </div>
                        <div className='other-details'>
                            <div className='ids'>
                                XPLORE COMPLIANT ISBN: 978-1-6654-9634-6<br />
                                DVD ISBN: 978-1-6654-9633-9
                            </div>
                            <div className='prev-ieee'>
                                ICCES Previous Publications
                                <div className='links'>
                                    2021  2020  2019  2018  2017  2016
                                </div>
                            </div>
                        </div>
                        <div className='handler clg-details'>
                            <div className='logo-container'>
                                <img src={vitLogo} alt='Vit Logo' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dates-part'>
                    <div className='date-container'>
                        <div className='date-heading'>Conference Date</div>
                        <div className='date'>30 April, 2023</div>
                    </div>
                    <div className='date-container'>
                        <div className='date-heading'>Final Paper Submission Deadline</div>
                        <div className='date'>30 April, 2023</div>
                    </div>
                    <div className='date-container'>
                        <div className='date-heading'>Last Date of Registration</div>
                        <div className='date'>30 April, 2023</div>
                    </div>
                </div>
            </section>

            <section className='about-us-section'>
                <div className='content scope'>
                    <h1 className='heading-secondary'>Scope</h1>
                    <div className='text'>Following the consecutive success of Communication and Electronics Systems [CES], 
                    the conference committee is pleased to announce the 7th International Conference on Communication and 
                    Electronics Systems [ICCES 2022] in emerging information and communication technologies [ICT] and smart 
                    electronics. ICCES 2022 will be organized from PPG Institute of Technology Campus on June 22-24, 2022. 
                    ICCES 2022 seeks potential research submissions that solicit the state-of-the-art applications, 
                    innovative methods, and analyse the unexplored and unsolved challenges to establish the relative 
                    solutions to advance the existing applications and theories of ICT & smart electronics systems. 
                    Potential researchers and authors are invites to submit their novel, unpublished papers of significant 
                    research quality that addresses the advances and challenges in the interdisciplinary areas both system 
                    theories and applications.</div>
                </div>
                <div className='content about'>
                    <h1 className='heading-secondary'>About VIT</h1>
                    <div className='text'>
                        VIT was established with the aim of providing quality higher education on par with 
                        international standards. It persistently seeks and adopts innovative methods to improve the quality of 
                        higher education on a consistent basis.The campus has a cosmopolitan atmosphere with students from all 
                        corners of the globe. Experienced and learned teachers are strongly encouraged to nurture the students. 
                        The global standards set at VIT in the field of teaching and research spur us on in our relentless 
                        pursuit of excellence. In fact, it has become a way of life for us. The highly motivated youngsters on 
                        the campus are a constant source of pride. Our Memoranda of Understanding with various international 
                        universities are our major strength. They provide for an exchange of students and faculty and encourage 
                        joint research projects for the mutual benefit of these universities. Many of our students, who pursue 
                        their research projects in foreign universities, bring high quality to their work and esteem to India 
                        and have done us proud. With steady steps, we continue our march forward. We look forward to meeting 
                        you here at VIT.
                        <div className='img-container'>
                            <img src={vitImg} alt='vit university' />
                        </div>
                        It was established under Section 3 of the University Grants Commission (UGC) Act, 1956, and was founded 
                        in 1984 as a self-financing institution called the Vellore Engineering College. The Union Ministry of 
                        Human Resources Development conferred University status on Vellore Engineering College in 2001. The 
                        University is headed by its founder and Chancellor, Dr. G. Viswanathan, a former Parliamentarian and 
                        Minister in the Tamil Nadu Government. In recognition of his service to India in offering world class 
                        education, he was conferred an honorary doctorate by the West Virginia University, USA. Mr.Sankar 
                        Viswanathan, Dr.Sekar Viswanathan and Mr.G.V. Selvam are the Vice-Presidents; Dr. Rambabu Kodali is the 
                        Vice-Chancellor and Dr. S. Narayanan is the Pro-Vice-Chancellor.
                    </div>
                </div>
            </section>
        </div>
    )
}

// <div className='logo-container'>
//     <img src={vitLogo} alt='vit-logo' />
// </div>

export default HomePage