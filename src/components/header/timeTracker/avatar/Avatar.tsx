import { WorkStatus } from "../../../../types/TimeTracker"

interface AvatarProps {
  img: string
  status: WorkStatus
}

const Avatar: React.FC<AvatarProps> = ({ img, status }) => {
  const translations: Record<string, string> = {
    online: "bg-teal",
    offline: "bg-salmon",
  }

  const color: string = translations[status]
  return (
    <>
      <div className="relative">
        <img className="w-10 h-10 rounded-full" src={img} alt="avatar" />
        <span
          role="status"
          className={`top-3 left-7 absolute w-3.5 h-3.5 ${color} border-1 border-white dark:border-gray-800 rounded-full`}
        />
      </div>
    </>
  )
}

export default Avatar
