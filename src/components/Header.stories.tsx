import { Meta, StoryObj } from '@storybook/react'
import { Header, HeaderProps } from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  args: {
  },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    },
    className: {
      table:{
        disable:true
      }
    }
  }
} as Meta<HeaderProps>

export const Default: StoryObj<HeaderProps> = {}

