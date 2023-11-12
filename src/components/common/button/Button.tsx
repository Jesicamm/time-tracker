interface ButtonProps {
  color: string
  text: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ color, text, onClick }) => {
  return (
    <button
      className={`${color} text-xs text-extraLightGrey font-bold h-7 w-28 rounded-full`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
