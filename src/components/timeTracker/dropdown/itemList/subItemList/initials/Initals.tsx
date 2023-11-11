interface InitialsProps {
  initials: string
}

const Initials: React.FC<InitialsProps> = ({ initials }) => {
  return (
    <div className="inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-lightGrey border border-grey text-grey rounded-full">
      <span className="text-sm text-grey">{initials}</span>
    </div>
  )
}

export default Initials
