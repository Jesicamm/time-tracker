interface ButtonProps {
  color: string
  text: string
  onClick: () => void
  isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ color, text, onClick, isDisabled }) => {
  return (
    <button
      className={`${color} text-xs text-extraLightGrey font-bold h-7 w-28 rounded-full`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
