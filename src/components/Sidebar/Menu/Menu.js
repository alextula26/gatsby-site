import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Menu.module.scss';

const Menu = ({ menu }) => (
  <nav className={styles.menu}>
    <ul className={styles.menuList}>
      {menu.map((item) => (
        <li className={styles.menuListItem} key={item.path}>
          <Link
            to={item.path}
            className={styles.menuListItemLink}
            activeClassName={styles.menuListItemLinkActive}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
