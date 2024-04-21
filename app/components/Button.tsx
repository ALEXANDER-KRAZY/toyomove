"use client";

interface ButtonProps {
    actionLabel: string;
    outline: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  actionLabel,
  outline,
  onClick
}) => {
  return (
    <button
    onClick={onClick}
    className={`
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    hover:opacity-80
    transition
    w-full
    ${outline ? 'bg-white' : 'bg-orange-500'}
    ${outline ? 'border-black' : 'bg-orange-500'}
    ${outline ? 'text-black' : 'text-white'}
    `}
    >
      {actionLabel}
    </button>  
  )
}

export default Button
