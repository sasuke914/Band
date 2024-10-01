"use client";
import { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from '@nextui-org/react';
import Dropdown from './Dropdown';

interface MenuItem {
  title: string;
  url?: string;
  submenu?: MenuItem[];
}
interface MenuItemsProps {
  items: MenuItem;
  depthLevel: number;
}
const MenuItems: React.FC<MenuItemsProps> = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState<boolean>(false)
  let ref = useRef<HTMLLIElement | null>(null);
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li className="relative" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.submenu ? (
        <>
          <button type="button" className={`bg-transparent alignCenter text-[var(--secondaryWhiteColor)] text-[12px] leading-[14.46px] tracking-[0.03em] border-none cursor-pointer hover:underline ${depthLevel > 0 ? "p-3" : 'p-0 px-4'}`} aria-haspopup="menu" onClick={() => setDropdown((prev) => !prev)}>
            {items.title}{' '} {depthLevel === 0 ? <img src='/icon/coveringPlay.png' className='ml-2 rotate-90 w-[6px] h-[10px] ' alt='downArrow' /> : <img src='/icon/coveringPlay.png' className='ml-2 w-[6px] h-[10px]' alt='downArrow' />}
          </button>
          <Dropdown dropdown={dropdown} submenus={items.submenu} depthLevel={depthLevel} />
        </>
      ) : (
        <RouterLink className={`bg-transparent alignCenter text-[var(--secondaryWhiteColor)] text-[12px] leading-[14.46px] tracking-[0.03em] border-none cursor-pointer hover:underline ${depthLevel > 0 ? "p-3" : 'p-0 px-4'} `} href={items.url || '#'} >{items.title}</RouterLink>
      )}
    </li>
  );
};

export default MenuItems;