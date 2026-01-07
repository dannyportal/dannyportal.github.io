import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import AboutContentWaves from "@/components/ui/aboutContentWaves";

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <AboutContentWaves />
                                <h2>
                                    I'm Danny Portal, a multidisciplinary Web Developer and Digital Strategist.
                                </h2>
                                <p>Multidisciplinary developer and digital strategist with 15+ years of experience creating high-performing, user-focused web experiences. Expert in HTML, CSS, JavaScript, PHP, and CMS platforms including WordPress, Webflow, and custom frameworks.</p>
                                <p>Skilled in ACF, Figma, Adobe Creative Suite, branding, motion graphics, and social-first content. Proficient in PPC, display ads, and Google Analytics/GA4 to drive data-informed decisions that connect design and development.</p>
                                <div className="hero-btns">
                                    <a href="/contact" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery
