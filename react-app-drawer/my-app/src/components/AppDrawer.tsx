import { FaBars } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import './AppDrawer.css';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-screen">
      <Menu
        menuItems={menuItems}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}

type MenuProps = {
  menuItems: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
};
function Menu({ menuItems, isOpen, onToggle }: MenuProps) {
  return (
    <div className={`menu-drawer ${isOpen ? 'is-open' : ''}`}>
      <FaBars className="menu-icon" onClick={onToggle} />
      {isOpen && <h2 className="menu-heading">Hylian Shopping</h2>}
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.name} className="menu-item">
            <NavLink to={menu.path} className="menu-link">
              <img src={menu.iconUrl} className="item-icon" />
              {isOpen ? menu.name : ''}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
