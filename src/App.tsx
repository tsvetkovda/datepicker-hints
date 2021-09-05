import React from 'react';
import { Modifier as ReactPopperModifier } from 'react-popper';
import { Modifier as PopperModifier } from '@popperjs/core';

import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

const noop = () => {};

const logger1: PopperModifier<'logger1', {}> = {
  name: 'logger1',
  enabled: true,
  phase: 'main',
  fn({ state }) {
    if (state.placement === 'top') {
      console.log('Popper is on the top');
    }
  },
};

const logger2: ReactPopperModifier<'logger2'> = {
  name: 'logger2',
  enabled: true,
  phase: 'main',
  fn({ state }) {
    if (state.placement === 'top') {
      console.log('Popper is on the top');
    }
  },
};

const props: ReactDatePickerProps = {
  onChange: noop,
  popperModifiers: [{ name: 'arrow', options: { padding: 5 } }],
};

const propWithCustomModifier: ReactDatePickerProps<'logger1' | 'logger2'> = {
  onChange: noop,
  popperModifiers: [
    { name: 'arrow', options: { padding: 5 } },
    logger1,
    logger2,
  ],
};

function App() {
  return (
    <div className='App'>
      <DatePicker
        onChange={noop}
        popperModifiers={[
          { name: 'arrow', options: { padding: 5 } },
        ]}
      />
      <DatePicker<'logger1' | 'logger2'>
        onChange={noop}
        popperModifiers={[
          { name: 'arrow', options: { padding: 5 } },
          logger1,
          logger2,
        ]}
      />
    </div>
  );
}

export default App;
