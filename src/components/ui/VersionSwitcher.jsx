'use client';
import { useState, useEffect } from 'react';

const WP_URL    = 'https://dannyportal.xgroupsystems.kinsta.cloud/';
const REACT_URL = 'https://dannyportal.github.io/';
const SESSION_KEY = 'dp-vsw-dismissed';

const WPIcon = () => (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <circle cx="13" cy="13" r="12.5" stroke="currentColor" strokeWidth="1"/>
        <path d="M3 13C3 7.477 7.477 3 13 3s10 4.477 10 10-4.477 10-10 10S3 18.523 3 13Z"
              fill="currentColor" fillOpacity="0.08"/>
        <text x="13" y="17.5" textAnchor="middle" fontSize="12" fontWeight="700"
              fill="currentColor" fontFamily="serif">W</text>
    </svg>
);

const ReactIcon = () => (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <ellipse cx="13" cy="13" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.1"/>
        <ellipse cx="13" cy="13" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.1"
                 transform="rotate(60 13 13)"/>
        <ellipse cx="13" cy="13" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.1"
                 transform="rotate(120 13 13)"/>
        <circle cx="13" cy="13" r="2" fill="currentColor"/>
    </svg>
);

export default function VersionSwitcher() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (typeof sessionStorage !== 'undefined' &&
            sessionStorage.getItem(SESSION_KEY)) return;
        const t = setTimeout(() => setShow(true), 4000);
        return () => clearTimeout(t);
    }, []);

    function dismiss() {
        setShow(false);
        try { sessionStorage.setItem(SESSION_KEY, '1'); } catch (_) {}
    }

    return (
        <div className={`dp-vsw-wrap${show ? ' dp-vsw-wrap--show' : ''}`}
             role="dialog" aria-label="Switch site version" aria-hidden={!show}>

            <div className="dp-vsw-card">
                <button className="dp-vsw-close" onClick={dismiss} aria-label="Dismiss">×</button>

                <p className="dp-vsw-eyebrow">✦ Danny Portal</p>
                <p className="dp-vsw-title">Same portfolio,<br/>two different builds.</p>

                <div className="dp-vsw-toggle">
                    {/* WordPress chip — link to WP site */}
                    <a href={WP_URL} className="dp-vsw-opt dp-vsw-opt--wp-link"
                       target="_blank" rel="noreferrer">
                        <span className="dp-vsw-opt-icon"><WPIcon /></span>
                        <span>WordPress</span>
                        <span className="dp-vsw-opt-sub">visit →</span>
                    </a>

                    {/* React chip — active (you're here) */}
                    <div className="dp-vsw-opt dp-vsw-opt--react-active">
                        <span className="dp-vsw-opt-icon"><ReactIcon /></span>
                        <span>React</span>
                        <span className="dp-vsw-opt-sub">you're here</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
