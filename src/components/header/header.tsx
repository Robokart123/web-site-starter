import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import CoduxSvg from '../../assets/codux.svg';
import About_module from '../about/about.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/" className={About_module.title}>
                <CoduxSvg />
            </a>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    About
                </NavLink>
            </div>
        </div>
    );
};
