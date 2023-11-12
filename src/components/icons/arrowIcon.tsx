interface ArrowIconProps {
  position: ArrowPosition
  customStyle?: string
}

type ArrowPosition = "top" | "bottom" | "left" | "right"

const ArrowIcon: React.FC<ArrowIconProps> = ({ position, customStyle }) => {
  const translatePosition: Record<string, string> = {
    top: "rotate-180",
    bottom: "",
    left: "-rotate-90",
    right: "rotate-90",
  }

  const thePosition = translatePosition[position]
  return (
    <div className={customStyle}>
      <svg
        className={`-mr-1 h-5 w-5 text-gray-400 ${thePosition}`}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

export default ArrowIcon
