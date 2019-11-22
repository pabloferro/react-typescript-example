import React from 'react';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

function Button({ onClick, children, ...props}: Props) {
  return (
    <button
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
