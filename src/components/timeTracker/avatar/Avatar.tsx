import { WorkStatus } from "../../../types/TimeTracker"

interface AvatarProps {
  img: string
  status: WorkStatus
}

const Avatar: React.FC<AvatarProps> = ({ img, status }) => {
  const colors: Record<string, string> = {
    online: "teal",
    offline: "salmon",
    paused: "salmon",
  }

  const color: string = colors[status]
  return (
    <div className="relative">
      <img className="w-6 h-6 rounded-full" src={img} alt="avatar" />
      <span
        role="status"
        className={`top-2 left-5 absolute w-2 h-2 bg-${color} border-1 border-white dark:border-gray-800 rounded-full`}
      />
    </div>
  )
}

export default Avatar
