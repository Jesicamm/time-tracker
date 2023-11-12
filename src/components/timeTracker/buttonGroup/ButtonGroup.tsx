import { WorkStatus } from "../../../types/TimeTracker"
import Button from "../../common/button/Button"

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
  const onlineState = (): JSX.Element => {
    return (
      <div className="grid grid-flow-col gap-2.5">
        <Button color="bg-lightGrey" text="Pausar" onClick={onPause} />
        <Button color="bg-salmon" text="Salir" onClick={onClockOut} />
      </div>
    )
  }
  const buttons: Record<string, JSX.Element> = {
    online: onlineState(),
    offline: <Button color="bg-teal" text="Entrar" onClick={onClockIn} />,
    paused: (
      <div className="grid grid-flow-col gap-2.5">
        <Button color="bg-lightGrey" text="Reanudar" onClick={onRestart} />
        <Button color="bg-salmon" text="Salir" onClick={onClockOut} />
      </div>
    ),
    "": <Button color="bg-lightGrey" isDisabled={true} text="" onClick={() => {}} />,
  }

  return <>{buttons[status]}</>
}

export default ButtonGroup
