import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FavIcon } from 'assets/svgs';
import { logoImage } from 'assets/images';
import styles from './navigation.module.scss';

function Navigation() {
  const [nickname] = useState('나서');
  return (
    <nav className={styles.wrap}>
      <div className={styles.navBar}>
        <img src={logoImage} width="100px" alt="logo" />
        <div className={styles.navRight}>
          <NavLink
            to="/fav"
            className={styles.icon}
            style={({ isActive }) => (isActive ? { fill: 'black' } : {})}
          >
            <FavIcon />
          </NavLink>
          <p>{nickname}님</p>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
