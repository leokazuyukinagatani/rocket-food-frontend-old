import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return(
    <div className="flex h-12 w-full px-3.5 py-4 gap-4 rounded focus-within:ring-2 rig-cyan-300">
      {props.children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root'


export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return(
    <Slot className="w-6 h-6">
      {props.children}
    </Slot>
  )
}
TextInputIcon.displayName = 'TextInput.Icon'


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return(
    <input 
      className="bg-transparent flex-1 outline-none"
      {...props}/>
  )
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
