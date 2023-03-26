import React, { useRef } from 'react';

import styles from './Button.module.css';

const Button = (props) => {
   const { value, icon: Icon, onClick, type } = props;

   let buttonType = styles.light;

   if (type === 'dark') buttonType = styles.dark;
   else if (type === 'equal') buttonType = styles.equal;

   const className = `${styles.button} ${props.className ? props.className : ''} ${buttonType}`;

   return (
      <button className={className} onClick={onClick}>
         {Icon && <Icon size={15} />}
         {value}
      </button>
   );
};

export default Button;
