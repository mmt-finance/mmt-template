import React from 'react';

import { Button, ButtonProps } from '@radix-ui/themes';

export interface PrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
  additionalClasses?: string;
  isFixed?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const {
    children,
    disabled,
    additionalClasses,
    isFixed,
    isLoading,
    variant = 'solid',
    fullWidth = true,
    ...restProps
  } = props;

  return (
    <Button
      className={`primary-button !rounded-lg flex items-center justify-center transition-all duration-300 bg-[var(--mmt-brand-color)]
          ${additionalClasses || ''}
          ${disabled ? 'opacity-25 text-white cursor-not-allowed' : 'cursor-pointer'}
          ${isFixed ? 'fixed inset-x-0 bottom-4 m-auto w-[85%]' : ''} 
          ${fullWidth && !isFixed ? 'w-full' : 'flex-1'}
          ${variant === 'outline' ? 'bg-transparent' : ''}
      `}
      disabled={disabled}
      loading={isLoading}
      type="button"
      variant={variant}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
