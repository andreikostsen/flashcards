import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

import logoutIcon from './log-out-icon.svg'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  showIcon?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    showIcon,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}>
      {showIcon && <img className={s.icon} src={logoutIcon} />}
      {rest.children}
    </Component>
  )
}
