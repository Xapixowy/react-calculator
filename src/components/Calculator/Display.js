import React from 'react';

import styles from './Display.module.css';

const Display = (props) => {
   return <div className={styles.display}>{props.value}</div>;
};

export default Display;
