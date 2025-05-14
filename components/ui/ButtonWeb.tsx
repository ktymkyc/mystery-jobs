import React, { ButtonHTMLAttributes, ReactNode } from 'react';

// ボタンの型定義
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
}

// Web用のボタンコンポーネント（CSSトークンを使用）
export const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  disabled,
  children,
  ...props
}) => {
  // ボタンのクラス名を生成
  const getButtonClasses = () => {
    const baseClasses = 'inline-flex items-center justify-center rounded font-medium transition-colors focus-visible:outline-none';
    
    const variantClasses = variant === 'primary'
      ? 'bg-[var(--color-primary)] text-white hover:opacity-90 active:opacity-80 disabled:bg-[var(--color-disabled)] disabled:text-[var(--color-disabledText)]'
      : 'bg-[var(--color-background)] border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[rgba(252,76,255,0.05)] active:bg-[rgba(252,76,255,0.1)] disabled:border-[var(--color-disabled)] disabled:text-[var(--color-disabled)]';
    
    const sizeClasses = size === 'sm'
      ? 'h-8 px-3 text-sm rounded-[var(--radius-small)]'
      : size === 'lg'
        ? 'h-12 px-6 text-lg rounded-[var(--radius-large)]'
        : 'h-10 px-4 text-base rounded-[var(--radius-medium)]';
    
    const widthClass = fullWidth ? 'w-full' : '';
    
    return `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`;
  };
  
  const isDisabled = disabled || isLoading;
  
  return (
    <button
      className={getButtonClasses()}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && (
        <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button; 