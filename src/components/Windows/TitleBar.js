import React from 'react';

import styles from './TitleBar.module.css';

import { IconX } from '@tabler/icons-react';
import { IconSquareRounded } from '@tabler/icons-react';
import { IconMinus } from '@tabler/icons-react';

const TitleBar = (props) => {
   const { icon: Icon, title, onClose } = props;

   return (
      <div className={styles['title-bar']}>
         <Icon size={18} className={styles.icon} />
         <p className={styles.title}>{title}</p>
         <div className={styles.buttons}>
            <button className={styles['button']}>
               <IconMinus size={15} />
            </button>
            <button className={styles['button']}>
               <IconSquareRounded size={13} />
            </button>
            <button className={styles['button']}>
               <IconX size={15} />
            </button>
         </div>
      </div>
   );
};

export default TitleBar;
