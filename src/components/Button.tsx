import { routesEnum } from '@/enums';
import classNames from 'classnames';
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom';
export interface IButton {
    className?: string;
    variant?: 'primary' | 'secondary';
    icon?: ReactNode;
    children?: ReactNode;
    to: routesEnum
}
export default function Button({icon,children,variant = 'primary', to, className}: IButton) {
    if (variant === 'secondary') {
        return <Link to={to} className={classNames(`button button-${variant}`, className)}>
                <div className='flex gap-2 bg-pink-50 rounded-[7px] px-10 py-1.5'>
                    <span className="flex bg-gradient-to-r from-rose-500 to-pink-700 bg-clip-text text-transparent tracking-wider">{children}</span>
                    {icon}
                </div>
        </Link>
    }
  return (
    <Link to={to} className={classNames(`button button-${variant}`, className)}>
        <span>{children}</span>
        {icon}
    </Link>
  )
}
