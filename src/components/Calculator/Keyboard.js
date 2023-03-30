import React from 'react';
import Button from './Button';

import styles from './Keyboard.module.css';

import { IconBackspace } from '@tabler/icons-react';
import { IconSuperscript } from '@tabler/icons-react';
import { IconSquareRoot2 } from '@tabler/icons-react';
import { IconMathXDivide2 } from '@tabler/icons-react';
import { IconDivide } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import { IconMinus } from '@tabler/icons-react';
import { IconPlus } from '@tabler/icons-react';
import { IconPlusMinus } from '@tabler/icons-react';
import { IconEqual } from '@tabler/icons-react';
import { IconNumber0 } from '@tabler/icons-react';
import { IconNumber1 } from '@tabler/icons-react';
import { IconNumber2 } from '@tabler/icons-react';
import { IconNumber3 } from '@tabler/icons-react';
import { IconNumber4 } from '@tabler/icons-react';
import { IconNumber5 } from '@tabler/icons-react';
import { IconNumber6 } from '@tabler/icons-react';
import { IconNumber7 } from '@tabler/icons-react';
import { IconNumber8 } from '@tabler/icons-react';
import { IconNumber9 } from '@tabler/icons-react';
import { IconLetterC } from '@tabler/icons-react';
import { IconPercentage } from '@tabler/icons-react';
import { IconSquareLetterC } from '@tabler/icons-react';

const Keyboard = (props) => {
   const { dispatchCalculator } = props;

   return (
      <div className={styles.keyboard}>
         <Button onClick={dispatchCalculator} dispatchType="PERCENTAGE" icon={IconPercentage} type="dark" />
         <Button onClick={dispatchCalculator} dispatchType="CLEAR-ENTRY" icon={IconSquareLetterC} type="dark" />
         <Button onClick={dispatchCalculator} dispatchType="CLEAR" icon={IconLetterC} type="dark" />
         <Button onClick={dispatchCalculator} dispatchType="BACKSPACE" icon={IconBackspace} type="dark" />
         <Button onClick={dispatchCalculator} icon={IconMathXDivide2} type="dark" />
         <Button onClick={dispatchCalculator} icon={IconSuperscript} type="dark" />
         <Button onClick={dispatchCalculator} icon={IconSquareRoot2} type="dark" />
         <Button onClick={dispatchCalculator} icon={IconDivide} type="dark" />
         <Button onClick={dispatchCalculator} dispatchType="VALUE" dispatchValue={7} icon={IconNumber7} />
         <Button onClick={dispatchCalculator} dispatchType="VALUE" dispatchValue={8} icon={IconNumber8} />
         <Button onClick={dispatchCalculator} dispatchType="VALUE" dispatchValue={9} icon={IconNumber9} />
         <Button onClick={dispatchCalculator} icon={IconX} type="dark" />
         <Button onClick={dispatchCalculator} dispatchType="VALUE" dispatchValue={4} icon={IconNumber4} />
         <Button onClick={dispatchCalculator} dispatchType="VALUE" dispatchValue={5} icon={IconNumber5} />
         <Button onClick={dispatchCalculator} dispatchType="VALUE" dispatchValue={6} icon={IconNumber6} />
         <Button onClick={dispatchCalculator} icon={IconMinus} type="dark" />
         <Button onClick={dispatchCalculator} dispatchType="VALUE" dispatchValue={1} icon={IconNumber1} />
         <Button onClick={dispatchCalculator} dispatchType="VALUE" dispatchValue={2} icon={IconNumber2} />
         <Button onClick={dispatchCalculator} dispatchType="VALUE" dispatchValue={3} icon={IconNumber3} />
         <Button onClick={dispatchCalculator} icon={IconPlus} type="dark" />
         <Button onClick={dispatchCalculator} dispatchType="INVERSE" icon={IconPlusMinus} />
         <Button onClick={dispatchCalculator} dispatchType="VALUE" dispatchValue={0} icon={IconNumber0} />
         <Button onClick={dispatchCalculator} dispatchType="COMMA" value="." />
         <Button onClick={dispatchCalculator} icon={IconEqual} type="equal" />
      </div>
   );
};

export default Keyboard;
