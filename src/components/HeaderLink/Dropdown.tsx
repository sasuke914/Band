import MenuItems from "./MenuItems";
import './dropdown.css'

interface SubMenuItem {
  title: string;
  url?: string;
  submenu?: SubMenuItem[];
}

interface DropdownProps {
  submenus: SubMenuItem[];
  dropdown: boolean;
  depthLevel: number;
}

const Dropdown: React.FC<DropdownProps> = ({ submenus, dropdown, depthLevel }) => {
  const nextDepthLevel = depthLevel + 1; // Increment depth level

  const dropdownClass = nextDepthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={nextDepthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
