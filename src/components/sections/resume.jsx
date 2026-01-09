import React from 'react'
import { RiBookLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-12">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list experience-grid">
                                    <Card year={'04/2025 - Present'} title={'UI/UX Web Developer'} institution={'Centripetal'} />
                                    <Card year={'02/2021 - 04/2025'} title={'Web & Digital Growth Manager'} institution={'Activated Insights'} />
                                    <Card year={'02/2020 - 01/2021'} title={'Senior Web Developer & Digital Strategist'} institution={'The Related Group'} />
                                    <Card year={'11/2018 - 02/2020'} title={'Web Production Coordinator'} institution={'MEDNAX, Health Solutions Partner'} />
                                    <Card year={'05/2018 - 11/2018'} title={'Digital Media Designer'} institution={'Crius Energy, LLC'} />
                                    <Card year={'01/2018 - 05/2018'} title={'Marketing Manager (Contract)'} institution={'Family Office Club'} />
                                    <Card year={'01/2013 - 01/2018'} title={'Digital Media Manager'} institution={'ZipLine'} />
                                    <Card year={'09/2012 - 12/2012'} title={'Freelance Web Designer & Ad Manager'} institution={'Abritt Publishing'} />
                                    <Card year={'10/2009 - 09/2012'} title={'Jr Art Director'} institution={'SapientNitro'} />
                                    <Card year={'11/2007 - 10/2009'} title={'Web Master'} institution={'Auto Alea Global'} />
                                    <Card year={'07/2006 - 11/2007'} title={'Web Designer'} institution={'CompuWizards'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-12 mt-4">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'01/2010 - 12/2013'} title={'B.A. Web Design and Development'} institution={'Full Sail University'} />
                                    <Card year={'01/2006 - 12/2009'} title={'A.A. Computer & Information Sciences'} institution={'Miami Dade College'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}
