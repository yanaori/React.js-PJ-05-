interface ButtonProps {
  className: string
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ className, onClick, children, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>{children}</button>
  )
}