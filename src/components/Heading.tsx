import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({ size= 'md', children, asChild, className }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'
  return(
     <Comp 
      className={clsx(
        'text-gray-400 font-bold font-sans',{
          'text-sm': size ==='sm',
          'text-md': size ==='md',
          'text-lg': size ==='lg',
        },
        className
        )}>
          
          {children}
      
      </Comp>
   
  )
}