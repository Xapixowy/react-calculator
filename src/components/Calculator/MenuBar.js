import React from 'react';

import styles from './MenuBar.module.css';

import { IconMenu2 } from '@tabler/icons-react';
import { IconHistory } from '@tabler/icons-react';

const MenuBar = (props) => {
   const { mode } = props;

   return (
      <div className={styles['menu-bar']}>
         <button className={styles['hamburger-menu']}>
            <IconMenu2 size={15} />
         </button>
         <p className={styles.mode}>{mode}</p>
         <button className={styles.history}>
            <IconHistory size={15} />
         </button>
      </div>
   );
};

export default MenuBar;
