import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

function Layout() {
  return (
    <div className={styles.app}>
      <div className={styles.wrap}>
        <Outlet />
        <nav className={styles.nav} />
      </div>
    </div>
  );
}

export default Layout;
