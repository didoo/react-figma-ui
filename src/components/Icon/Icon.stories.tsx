import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Icon } from '.';

import { IconName, ColorName } from '../../types';

export default {
  title: 'Icon',
  decorators: [withKnobs],
};

export const normal = () => (
  <Icon
    iconName={text('Icon Name', 'blend') as IconName}
    colorName={text('Icon Color', '') as ColorName}
    spin={boolean('Spin', false)}
  >
    {text('Value', '')}
  </Icon>
);
