import { WorkStatus } from "../../../../types/TimeTracker"
import Button from "../../../common/button/Button"

interface ButtonGroupPropS {
  status: WorkStatus
}

const ButtonGroup: React.FC<ButtonGroupPropS> = ({ status }) => {
  const buttons: Record<string, JSX.Element> = {
    online: (
      <div>
        <Button color="darkGrey" text="Pausar" />
        <Button color="salmon" text="Salir" />
      </div>
    ),
    offline: <Button color="teal" text="Entrar" />,
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
