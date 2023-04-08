import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@patrick-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/patrickpecegueiro.png',
    alt: 'Patrick Pecegueiro',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}