import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './home-page.module.scss';
import videoSrc from '../../assets/Demo_Video.mp4'; // Adjust the path as needed

export interface HomePageProps {
    className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error('Error attempting to play video:', error);
            });
        }
    }, []);

    const handlePlayToPercentage = (percentage: number) => {
        if (videoRef.current) {
            const duration = videoRef.current.duration;
            videoRef.current.currentTime = duration * (percentage / 100);
            videoRef.current.play();
        }
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.overlay}>
                <div className={styles.title}>RoboKart</div>
                <div className={styles.paragraph}>
                    <div className={styles.text}>
                        {'Our Mission :-'}
                        <br />
                        Transforming kids from consumers to creators of technology
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => handlePlayToPercentage(100)}>
                        Go to 100%
                    </button>
                    <button className={styles.button} onClick={() => handlePlayToPercentage(75)}>
                        Go to 75%
                    </button>
                    <button className={styles.button} onClick={() => handlePlayToPercentage(50)}>
                        Go to 50%
                    </button>
                    <button className={styles.button} onClick={() => handlePlayToPercentage(25)}>
                        Go to 25%
                    </button>
                </div>
                <video ref={videoRef} className={styles.video} src={videoSrc} autoPlay muted loop />
                {/*
                    <div className={styles.buttons} onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';}}>
                    <img
                        src="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dwixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles.image}
                    />
                </div>
                */}
            </div>
        </div>
    );
};
