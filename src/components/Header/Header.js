import React from 'react';

import Logo from './../../assets/images/logo.png';

import styles from './Header.scss';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <img src={Logo} />
            <div className={styles.headerText}>
                <p className={styles.title}>Friend-Ly!</p>
                <p className={styles.subtitle}>Never lose track of your friends!</p>
            </div>
        </div>
    )
}

export default Header;
