import React from "react";
interface ButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`${className} h-14 w-28 bg-gray-300 rounded p-2 hover:bg-gray-400`}
      {...props}
    />
  );
}

export { Button };
