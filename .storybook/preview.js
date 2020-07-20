import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator((storyFn) => (
  <div
    style={{
      minWidth: 200,
      maxWidth: 300,
      width: '100%',
      height: '100vh',
      margin: '0 auto',
    }}
  >
    {storyFn()}
  </div>
));
