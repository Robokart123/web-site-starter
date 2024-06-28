import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import CoduxSvg from '../../assets/codux.svg';
import About_module from '../about/about.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/" className={About_module.title}>
                <CoduxSvg width="100px" height="100px" />
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
