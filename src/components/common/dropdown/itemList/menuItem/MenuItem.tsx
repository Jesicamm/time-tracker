interface MenuItemProps {
  name: string
}

const MenuItem: React.FC<MenuItemProps> = ({ name }) => {
  return (
    <a href="#" className="text-grey block px-4 py-2 text-xs text-center" role="menuitem">
      {name}
    </a>
  )
}

export default MenuItem
