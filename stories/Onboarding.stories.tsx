import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Onboarding } from '../src';

import { IconName } from '../src/types';

interface Props {
  readonly iconName: IconName;
  readonly message: string;
}

export default {
  title: 'Onboarding',
  component: Onboarding,
  argTypes: {
    iconName: { control: 'text' }, // TODO
    message: { control: 'text' },
  },
} as Meta;

export const normal: Story<Props> = ({ iconName, message }) => (
  <Onboarding iconProps={{ iconName }}>{message}</Onboarding>
);

normal.args = {
  iconName: 'warning',
  message: 'Onboarding tip goes here.',
};
