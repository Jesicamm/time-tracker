interface ButtonProps {
  color: string
  text: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ color, text, onClick }) => {
  return (
    <button
      className={`bg-${color} text-extraLightGrey font-bold py-2 px-4 rounded-full`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
