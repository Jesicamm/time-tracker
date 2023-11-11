import { WorkStatus } from "../../../../types/TimeTracker"
import Button from "../../../common/button/Button"

interface ButtonGroupPropS {
  status: WorkStatus
  onClockOut: () => void
  onClockIn: () => void
  onPause: () => void
  onRestart: () => void
}

const ButtonGroup: React.FC<ButtonGroupPropS> = ({
  status,
  onClockOut,
  onClockIn,
  onPause,
  onRestart,
}) => {
  const buttons: Record<string, JSX.Element> = {
    online: (
      <div>
        <Button color="darkGrey" text="Pausar" onClick={onPause} />
        <Button color="salmon" text="Salir" onClick={onClockOut} />
      </div>
    ),
    offline: <Button color="teal" text="Entrar" onClick={onClockIn} />,
    paused: (
      <div>
        <Button color="darkGrey" text="Reanudar" onClick={onRestart} />
        <Button color="salmon" text="Salir" onClick={onClockOut} />
      </div>
    ),
    "": <></>,
  }

  return <>{buttons[status]}</>
}

export default ButtonGroup
