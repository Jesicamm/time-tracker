import { WorkStatus } from "../../../../types/TimeTracker"
import Button from "../../../common/button/Button"

interface ButtonGroupPropS {
  status: WorkStatus
  onClockOut: () => void
  onClockIn: () => void
}

const ButtonGroup: React.FC<ButtonGroupPropS> = ({ status, onClockOut, onClockIn }) => {
  const buttons: Record<string, JSX.Element> = {
    online: (
      <div>
        <Button color="darkGrey" text="Pausar" />
        <Button color="salmon" text="Salir" onClick={onClockOut} />
      </div>
    ),
    offline: <Button color="teal" text="Entrar" onClick={onClockIn} />,
    paused: (
      <div>
        <Button color="darkGrey" text="Reanudar" />
        <Button color="salmon" text="Salir" />
      </div>
    ),
    "": <></>,
  }

  return <>{buttons[status]}</>
}

export default ButtonGroup
