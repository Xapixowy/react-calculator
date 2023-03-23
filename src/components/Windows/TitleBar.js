import React from 'react';

import styles from './TitleBar.module.css';

import { IconX } from '@tabler/icons-react';
import { IconSquareRounded } from '@tabler/icons-react';
import { IconMinus } from '@tabler/icons-react';

const TitleBar = (props) => {
   const { icon: Icon, title, onClose } = props;

   return (
      <div className={styles['title-bar']}>
         <Icon />
         <p className={styles.title}>{title}</p>
         <div className={styles.buttons}>
            <button className={styles['button']}>
               <IconMinus />
            </button>
            <button className={styles['button']}>
               <IconSquareRounded />
            </button>
            <button className={styles['button']}>
               <IconX />
            </button>
         </div>
      </div>
   );
};

export default TitleBar;
