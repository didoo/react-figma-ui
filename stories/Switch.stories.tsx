import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/addons';

import { Switch } from '../src';

interface Props {
  readonly checked: boolean;
  readonly disabled: boolean;
  readonly value: string;
}

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
  },
} as Meta;

export const normal: Story<Props> = ({ checked, value, ...args }) => {
  const [_args, updateArgs] = useArgs();

  return (
    <Switch
      {...args}
      id="uniqueId"
      checked={checked}
      onClick={() => updateArgs({ checked: !checked })}
    >
      {value}
    </Switch>
  );
};

normal.args = {
  checked: false,
  disabled: false,
  value: 'Label',
};
