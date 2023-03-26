import React from 'react';

import styles from './Calculator.module.css';

import { IconCalculator } from '@tabler/icons-react';
import TitleBar from './Windows/TitleBar.js';
import MenuBar from './Calculator/MenuBar.js';
import Display from './Calculator/Display.js';
import Keyboard from './Calculator/Keyboard.js';

const Calculator = () => {
   return (
      <div className={styles.calculator}>
         <TitleBar icon={IconCalculator} title="Calculator" />
         <MenuBar mode="Standard" />
         <Display value={0} />
         <Keyboard />
      </div>
   );
};

export default Calculator;
