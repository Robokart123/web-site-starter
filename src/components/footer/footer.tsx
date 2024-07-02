import classNames from 'classnames';
import styles from './footer.module.scss';
import FacebookIcon from '../../assets/facebook.svg?react';
import TwitterxIcon from '../../assets/twitterx.svg?react';
import DiscordIcon from '../../assets/discord.svg?react';
import YoutubeIcon from '../../assets/youtube.svg?react';
import MediumIcon from '../../assets/medium.svg?react';
import GithubIcon from '../../assets/github.svg?react';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                <div>Contact Us</div>
                <div className={styles.small}>
                    robokart.com
                    <br />
                    Number
                </div>
            </div>
            <div className={styles.social}>
                <a href="http://robokart.com">
                    <TwitterxIcon className={styles.icon} />
                </a>
                <a href="http://robokart.com">
                    <FacebookIcon className={styles.icon} />
                </a>
                <a href="http://robokart.com">
                    <DiscordIcon className={styles.icon} />
                </a>
                <a href="http://robokart.com">
                    <YoutubeIcon className={styles.icon} />
                </a>
                <a href="http://robokart.com">
                    <MediumIcon className={styles.icon} />
                </a>
                <a href="http://robokart.com">
                    <GithubIcon className={styles.icon} />
                </a>
            </div>
        </div>
    );
};
