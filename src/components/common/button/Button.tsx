interface ButtonProps {
  color: string
  text: string
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
  return (
    <button className={`bg-${color} text-extraLightGrey font-bold py-2 px-4 rounded-full`}>
      {text}
    </button>
  )
}

export default Button
