import TimeTracker from "./timeTracker/TimeTracker"
import "./header.css"

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <TimeTracker />
      </div>
    </div>
  )
}

export default Header
