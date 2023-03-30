import React, { useReducer } from 'react';

import styles from './Calculator.module.css';

import { IconCalculator } from '@tabler/icons-react';
import TitleBar from './Windows/TitleBar.js';
import MenuBar from './Calculator/MenuBar.js';
import Display from './Calculator/Display.js';
import Keyboard from './Calculator/Keyboard.js';

const defaultCalculator = {
   comma: false,
   inverse: false,
   operation: '',
   operationString: null,
   prevValue: 0,
   value: 0,
   valueString: '',
   history: [],
};

const reducerCalculator = (state, action) => {
   const newState = { ...state };
   if (action.type === 'PERCENTAGE') {
      newState.value = (newState.prevValue / 100) * newState.value;
   } else if (action.type === 'CLEAR-ENTRY') {
      newState.value = 0;
   } else if (action.type === 'CLEAR') {
      newState.value = 0;
      newState.operation = '';
      newState.operationString = null;
      newState.prevValue = 0;
   } else if (action.type === 'BACKSPACE') {
      if (newState.value > 9) newState.value = newState.value.slice(0, newState.value.length - 1);
      else newState.value = 0;
   } else if (action.type === 'VALUE') {
      if (action.value === 0) {
         if (newState.value !== 0) newState.value = `${newState.value}${action.value}`;
      } else {
         if (newState.value !== 0) newState.value = `${newState.value}${action.value}`;
         else newState.value = `${action.value}`;
      }
   } else if (action.type === 'COMMA') {
      if (!newState.comma) {
         newState.value = `${newState.value}.`;
         newState.comma = true;
      }
   } else if (action.type === 'INVERSE') {
      if (newState.inverse) {
         newState.value = newState.value.slice(1, newState.value.length);
         newState.inverse = false;
      } else {
         newState.value = `-${newState.value}`;
         newState.inverse = true;
      }
   }
   console.log(newState.value);
   return newState;
};

const Calculator = () => {
   const [calculator, dispatchCalculator] = useReducer(reducerCalculator, defaultCalculator);

   return (
      <div className={styles.calculator}>
         <TitleBar icon={IconCalculator} title="Calculator" />
         <MenuBar mode="Standard" />
         <Display operationString={calculator.operationString} value={calculator.value} />
         <Keyboard dispatchCalculator={dispatchCalculator} />
      </div>
   );
};

export default Calculator;
