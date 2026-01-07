'use client'
import React from 'react'
import Link from 'next/link';
import { RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';
import AboutContentWaves from "@/components/ui/aboutContentWaves";

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <div className="profile-card">
                                    <div className="scanlines" aria-hidden="true"></div>
                                    <div className="noise" aria-hidden="true"></div>
                                    <img src={"/images/about/profile.png"} alt="About Me" />
                                </div>
                                <h2>Danny Portal</h2>
                                <p>I am a Web Developer based in Miami, Florida with who specializes in Digital Production and Marketing.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href="https://www.linkedin.com/in/dannyportal"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link href="https://github.com/dannyportal"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <AboutContentWaves />
                                <p>Hello There!</p>
                                <h2>
                                    I'm a Web Developer and Designer who loves crafting digital experiences.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Work</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <a
                                        href="/images/Danny%20Portal%20Resume.pdf"
                                        className="theme-btn"
                                        download
                                    >
                                        Download CV <i><RiDownloadLine size={16} /></i>
                                    </a>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero
