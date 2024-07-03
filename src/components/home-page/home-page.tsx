import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './home-page.module.scss';
import videoSrc from '../../assets/Demo_Video.mp4'; // Adjust the path as needed

export interface HomePageProps {
    className?: string;
}

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

export const HomePage = ({ className }: HomePageProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const animationRef = useRef<number | null>(null);
    const [enabledButtons, setEnabledButtons] = useState<number[]>([1, 5]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && videoRef.current) {
                videoRef.current.play().catch((error) => {
                    console.error('Error attempting to play video:', error);
                });
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error('Error attempting to play video:', error);
            });
        }

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const handlePlayToPercentage = (percentage: number, index: number) => {
        if (videoRef.current) {
            const video = videoRef.current;
            const targetTime = video.duration * (percentage / 100);
            const currentTime = video.currentTime;
            const timeDifference = targetTime - currentTime;

            if (timeDifference < 0) {
                video.currentTime = targetTime;
                video.playbackRate = 1;
                video.play();
                return;
            }

            const transitionDuration = 5; // 5 seconds
            let requiredRate = timeDifference / transitionDuration;

            requiredRate = clamp(requiredRate, 0, 16);

            video.playbackRate = requiredRate;

            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }

            const animate = () => {
                if (Math.abs(video.currentTime - targetTime) < 0.1) {
                    video.currentTime = targetTime;
                    video.playbackRate = 1;
                    video.play();
                    setEnabledButtons((prev) => {
                        if (index < 15 && !prev.includes(index + 5)) {
                            return [...prev, index + 5];
                        }
                        return prev;
                    });
                    return;
                }

                animationRef.current = requestAnimationFrame(animate);
            };

            video.play();
            animate();
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
                    {[1, 5, 10, 15].map((percentage, index) => (
                        <button
                            key={index}
                            className={classNames(styles.button, {
                                [styles.disabled]: !enabledButtons.includes(percentage),
                            })}
                            onClick={() => handlePlayToPercentage(percentage, percentage)}
                            disabled={!enabledButtons.includes(percentage)}
                        >
                            Go to {percentage}%
                        </button>
                    ))}
                </div>
                <video
                    ref={videoRef}
                    className={classNames(styles.video, styles.backgroundVideo)}
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                />
            </div>
        </div>
    );
};
