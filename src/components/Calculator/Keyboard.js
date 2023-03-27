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

const Keyboard = () => {
   return (
      <div className={styles.keyboard}>
         <Button icon={IconPercentage} type="dark" />
         <Button icon={IconSquareLetterC} type="dark" />
         <Button icon={IconLetterC} type="dark" />
         <Button icon={IconBackspace} type="dark" />
         <Button icon={IconMathXDivide2} type="dark" />
         <Button icon={IconSuperscript} type="dark" />
         <Button icon={IconSquareRoot2} type="dark" />
         <Button icon={IconDivide} type="dark" />
         <Button icon={IconNumber7} />
         <Button icon={IconNumber8} />
         <Button icon={IconNumber9} />
         <Button icon={IconX} type="dark" />
         <Button icon={IconNumber4} />
         <Button icon={IconNumber5} />
         <Button icon={IconNumber6} />
         <Button icon={IconMinus} type="dark" />
         <Button icon={IconNumber1} />
         <Button icon={IconNumber2} />
         <Button icon={IconNumber3} />
         <Button icon={IconPlus} type="dark" />
         <Button icon={IconPlusMinus} />
         <Button icon={IconNumber0} />
         <Button value="." />
         <Button icon={IconEqual} type="equal" />
      </div>
   );
};

export default Keyboard;
