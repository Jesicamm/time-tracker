import { DropdownItems } from "../../types/TimeTracker"

export const items: Array<DropdownItems> = [
  {
    id: "1",
    name: "Mis Cuentas",
    subItem: [
      {
        id: "10",
        user: "Sesame HR",
        name: "Sesame 1",
        message: "Hoy llevas 00:00",
      },
      {
        id: "20",
        user: "Sesame HR",
        name: "Sesame 2",
        message: "Hoy llevas 00:00",
      },
    ],
  },
  {
    id: "2",
    name: "Vista empleado",
    subItem: [],
  },
  {
    id: "3",
    name: "Mi perfil",
    subItem: [],
  },
  {
    id: "4",
    name: "Cerrar sesión",
    subItem: [],
  },
]
