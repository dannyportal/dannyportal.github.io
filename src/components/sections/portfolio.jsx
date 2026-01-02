'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { RiArrowRightUpLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp';
// Using the new content management system
import { getAllProjects, getAllCategories, getProjectsByCategory } from '@/content';
import Image from 'next/image';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');

    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }

    // Get categories and projects from content management system
    const filteredCategory = getAllCategories();
    const filteredProjects = getProjectsByCategory(category);


    return (
        <section id="portfolio" className={`projects-area ${className}`}>
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <h2>Works & Projects</h2>
                                    <p>Check out some of my design projects, meticulously crafted with love and dedication,
                                        each one reflecting the passion and soul I poured into every detail.</p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <SlideUp>
                        <ul className="project-filter filter-btns-one justify-content-left pb-15">
                            {filteredCategory.map((item, id) => <li key={id} onClick={() => handleCategoryClick(item)} className={item === category ? "current" : ""}>{item}</li>)}
                        </ul>
                    </SlideUp>
                    <div className="row project-masonry-active overflow-hidden">
                        {filteredProjects.map((project) => <Card key={project.id} project={project} animationClass={animationClass} />)}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio


const Card = ({ project, animationClass }) => {
    return (
        <div className={`col-lg-4 col-md-6 item branding game ${animationClass}`}>
            <SlideUp delay={project.id}>
                <div className="project-item style-two">
                    <div className="project-image">
                        <Image width={383} height={249} sizes='100vw' style={{width:"100%", height:"auto"}} src={project.src} alt={project.title} />
                        <Link href={`/single-project?slug=${project.slug}`} className="details-btn"><RiArrowRightUpLine /> </Link>
                    </div>
                    <div className="project-content">
                        <span className="sub-title">{project.category}</span>
                        <h3>{project.title}</h3>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}