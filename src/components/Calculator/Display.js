import React from 'react';
import { Textfit } from 'react-textfit';

import styles from './Display.module.css';

const Display = (props) => {
   const { operationString, value } = props;
   return (
      <div className={styles.display}>
         <p className={styles['previous-value']}>{operationString}</p>
         <p className={styles['current-value']}>
            <Textfit mode="single" max={40}>
               {value}
            </Textfit>
         </p>
      </div>
   );
};

export default Display;
