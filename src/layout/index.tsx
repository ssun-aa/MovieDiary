import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import React from 'react';
import styles from './layout.module.scss';

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.wrap}>
        <Navigation />
        <React.Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </React.Suspense>
      </div>
    </div>
  );
}

export default Layout;
