import React, { useRef } from 'react';

import styles from './Button.module.css';

const Button = (props) => {
   const { value, icon: Icon, onClick, type, rotate } = props;

   const className = `${styles.button} ${props.className ? props.className : ''} ${type === 'dark' ? 'dark' : 'light'}`;

   const element = useRef();

   if (rotate) element.current.style.transform = `rotate(${rotate}deg)`;

   return (
      <button className={className} onClick={onClick} ref={element}>
         {Icon && <Icon />}
         {value}
      </button>
   );
};

export default Button;
