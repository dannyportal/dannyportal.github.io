 'use client'
import React, { useEffect, useState } from 'react'
import { RiMailLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ContactForm = () => {
    const [showSuccess, setShowSuccess] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return
        const params = new URLSearchParams(window.location.search)
        setShowSuccess(params.get('success') === '1')
    }, [])

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form
                        className="contactForm"
                        action="https://formspree.io/f/xqeararq"
                        method="POST"
                    >
                        <input type="hidden" name="_next" value="https://dannyportal.github.io/contact?success=1" />
                        <input type="hidden" name="_subject" value="Email from Folio Site" />
                        <input type="text" name="_gotcha" className="visually-hidden" tabIndex="-1" autoComplete="off" />
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Steve Milner" required data-error="Please enter your Name" />
                                    <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="_replyto" className="form-control" placeholder="hello@websitename.com" required data-error="Please enter your Email" />
                                    <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Your message" required data-error="Please Write your Message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn">
                                        Send Me Message <i><RiMailLine size={15} /></i>
                                    </button>
                                    <p
                                        id="msgSubmit"
                                        className="h4"
                                        style={{ display: showSuccess ? 'block' : 'none' }}
                                        aria-live="polite"
                                    >
                                        Thanks! Your message has been sent.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm
