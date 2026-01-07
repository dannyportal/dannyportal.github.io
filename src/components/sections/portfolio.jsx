'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { RiArrowRightUpLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp';
import Image from 'next/image';
import { sanityClient } from '@/lib/sanity';
import { urlFor } from '@/lib/sanityImage';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const getEmbedSrc = (embed) => {
    if (!embed) return null;
    const trimmed = embed.trim();
    const iframeMatch = trimmed.match(/src\s*=\s*["']([^"']+)["']/i);
    if (iframeMatch?.[1]) return iframeMatch[1];
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return null;
};

const Portfolio = ({ className, limit }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState(['All']);
    const [activeProject, setActiveProject] = useState(null);
    const [autoAnimationSize, setAutoAnimationSize] = useState(null);

    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }

    const openProject = (project) => {
        setActiveProject(project);
    };

    const closeProject = () => {
        setActiveProject(null);
    };

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"] | order(year desc) {
                _id,
                title,
                "slug": slug.current,
                year,
                client,
                services,
                "projectType": projectType->title,
                description,
                vimeoUrl,
                videoEmbed,
                animationPath,
                animationWidth,
                animationHeight,
                image
            }`)
            .then((data) => {
                setProjects(data || []);
                const types = Array.from(
                    new Set((data || []).map((item) => item.projectType).filter(Boolean))
                );
                setCategories(['All', ...types]);
            })
            .catch(() => {
                setProjects([]);
                setCategories(['All']);
            });
    }, []);

    useEffect(() => {
        if (typeof document === 'undefined') return;
        if (!activeProject) {
            document.body.classList.remove('modal-open');
            return;
        }

        document.body.classList.add('modal-open');

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeProject();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.classList.remove('modal-open');
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeProject]);

    useEffect(() => {
        if (!activeProject?.animationPath) {
            setAutoAnimationSize(null);
            return;
        }

        if (Number.isFinite(activeProject.animationWidth) && Number.isFinite(activeProject.animationHeight)) {
            setAutoAnimationSize(null);
            return;
        }

        let cancelled = false;
        fetch(activeProject.animationPath, { cache: 'no-store' })
            .then((response) => (response.ok ? response.text() : Promise.reject(response)))
            .then((html) => {
                if (cancelled) return;
                const match = html.match(/ad\.size\" content=\"width=(\d+),height=(\d+)\"/i);
                if (!match) return;
                const width = Number.parseInt(match[1], 10);
                const height = Number.parseInt(match[2], 10);
                if (!Number.isFinite(width) || !Number.isFinite(height)) return;
                setAutoAnimationSize({ width, height });
            })
            .catch(() => {
                if (!cancelled) setAutoAnimationSize(null);
            });

        return () => {
            cancelled = true;
        };
    }, [activeProject?.animationPath, activeProject?.animationWidth, activeProject?.animationHeight]);

    const filteredCategory = categories;
    const filteredProjects =
        category === 'All'
            ? projects
            : projects.filter((project) => project.projectType === category);
    const visibleProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;
    const embedSrc = activeProject ? getEmbedSrc(activeProject.videoEmbed) : null;
    const hasAnimation = Boolean(activeProject?.animationPath);
    const animationWidth =
        activeProject && Number.isFinite(activeProject.animationWidth)
            ? activeProject.animationWidth
            : autoAnimationSize?.width || null;
    const animationHeight =
        activeProject && Number.isFinite(activeProject.animationHeight)
            ? activeProject.animationHeight
            : autoAnimationSize?.height || null;
    const animationBoxStyle = hasAnimation
        ? {
            width: animationWidth ? `${animationWidth}px` : '100%',
            height: animationHeight ? `${animationHeight}px` : '46vh',
        }
        : undefined;


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
                            {filteredCategory.map((item, id) => (
                                <li key={id} onClick={() => handleCategoryClick(item)} className={item === category ? "current" : ""}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SlideUp>
                    <div className="row project-masonry-active overflow-hidden">
                        {visibleProjects.map((project, index) => (
                            <Card
                                key={project._id || project.slug || index}
                                project={project}
                                animationClass={animationClass}
                                onOpen={openProject}
                            />
                        ))}

                    </div>
                    {limit && filteredProjects.length > limit ? (
                        <div className="row">
                            <div className="col-lg-12 text-center pt-40">
                                <Link href="/works" className="theme-btn">View All Projects</Link>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            {activeProject ? (
                <div className="project-modal" role="dialog" aria-modal="true">
                    <button type="button" className="project-modal__backdrop" onClick={closeProject} aria-label="Close project details"></button>
                    <div className={`project-modal__content ${hasAnimation ? 'project-modal__content--animation' : ''}`}>
                        <button type="button" className="project-modal__close" onClick={closeProject} aria-label="Close">
                            ×
                        </button>
                        <div className={`project-modal__media ${hasAnimation ? 'project-modal__media--animation' : ''}`}>
                            {activeProject.animationPath ? (
                                <div className="project-modal__animation" style={animationBoxStyle}>
                                    <iframe
                                        src={activeProject.animationPath}
                                        title={`${activeProject.title} animation`}
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                        scrolling="no"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                </div>
                            ) : embedSrc ? (
                                <div className="project-modal__video">
                                    <iframe
                                        src={embedSrc}
                                        title={`${activeProject.title} video`}
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : activeProject.vimeoUrl ? (
                                <div className="project-modal__video">
                                    <iframe
                                        src={activeProject.vimeoUrl}
                                        title={`${activeProject.title} video`}
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : activeProject.image ? (
                                <a
                                    href={urlFor(activeProject.image).width(2000).url()}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`Open full image for ${activeProject.title}`}
                                >
                                    <Image
                                        width={1200}
                                        height={800}
                                        sizes="100vw"
                                        style={{ width: "100%", height: "auto" }}
                                        src={urlFor(activeProject.image).url()}
                                        alt={activeProject.title}
                                    />
                                </a>
                            ) : null}
                        </div>
                        <div className="project-modal__body">
                            <div className="project-modal__meta">
                                <div className="project-modal__meta-item">
                                    <span>Year</span>
                                    <strong>{activeProject.year || '—'}</strong>
                                </div>
                                <div className="project-modal__meta-item">
                                    <span>Client</span>
                                    <strong>{activeProject.client || '—'}</strong>
                                </div>
                                <div className="project-modal__meta-item">
                                    <span>Services</span>
                                    <strong>
                                        {Array.isArray(activeProject.services) && activeProject.services.length
                                            ? activeProject.services.join(', ')
                                            : '—'}
                                    </strong>
                                </div>
                                <div className="project-modal__meta-item">
                                    <span>Project</span>
                                    <strong>{activeProject.projectType || '—'}</strong>
                                </div>
                            </div>
                            <div className="project-modal__description">
                                <h3>Description</h3>
                                <p>{activeProject.description || 'No description provided.'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    )
}

export default Portfolio


const Card = ({ project, animationClass, onOpen }) => {
    const imageUrl = project.image ? urlFor(project.image).width(800).height(520).url() : null;
    return (
        <div className={`col-lg-4 col-md-6 item branding game ${animationClass}`}>
            <SlideUp delay={project._id || 0}>
                <div className="project-item style-two">
                    <div className="project-image">
                        {imageUrl ? (
                            <button
                                type="button"
                                className="project-image__button"
                                onClick={() => onOpen(project)}
                                aria-label={`Open ${project.title}`}
                            >
                                <Image
                                    width={383}
                                    height={249}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    src={imageUrl}
                                    alt={project.title}
                                />
                            </button>
                        ) : null}
                        <button type="button" className="details-btn" onClick={() => onOpen(project)} aria-label={`Open ${project.title}`}>
                            <RiArrowRightUpLine />
                        </button>
                    </div>
                    <div className="project-content">
                        <span className="sub-title">{project.projectType}</span>
                        <h3>{project.title}</h3>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}
