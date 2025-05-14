import React from 'react';
import { Button, ButtonProps } from '../../components/ui/Button';
import { 
  PrimaryButton, 
  SecondaryButton, 
  SmallButton, 
  LoadingButton, 
  IconButton 
} from './ButtonDemo';

// この構造はStorybook導入時に有効になります
export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
      defaultValue: 'md',
    },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

// 基本的なボタン
export const Primary = {
  render: () => <PrimaryButton />,
};

export const Secondary = {
  render: () => <SecondaryButton />,
};

export const Small = {
  render: () => <SmallButton />,
};

export const Loading = {
  render: () => <LoadingButton />,
};

export const WithIcon = {
  render: () => <IconButton />,
};

// カスタマイズ可能なボタン例
export const Playground = {
  render: (args: ButtonProps) => <Button {...args}>カスタムボタン</Button>,
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    isLoading: false,
    fullWidth: false,
  },
}; 