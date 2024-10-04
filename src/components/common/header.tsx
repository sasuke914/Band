"use client";

import { Image } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';
import { LuMenu } from "react-icons/lu";
import { CircleButton, DefaultButton, RectButton } from "../Buttons";
import { menuItemData } from "@/constant/group";
import MenuItems from "../HeaderLink/MenuItems";
import './layout.css'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("")
  const handleSearch = () => {

  }
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }
  const handleChange = (e: any) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="topHeader w-full fixed max-w-1440 bg-[var(--primaryBgColor)] z-50">
      <div className="spaceBetween sectionPadding">
        <Link href="/">
          <img src="/icon/bigfooterLogo.png" alt="Band" width={98} height={42} />
        </Link>
        <div className="headerInput hidden lg:block">
          <div className="alignCenter">
            <img style={{ cursor: 'pointer', marginRight: '5px' }} src="/icon/search.svg" alt="Search" width={18} height={18} />
            <input placeholder="поиск" value={searchTerm} onKeyDown={handleKeyDown} onChange={handleChange} style={{}} />
          </div>
        </div>
        <span className="text-[var(--secondaryWhiteColor)] text-[14px] tracking-[-0.03em] hidden lg:block">+7 (495) 720-12-82</span>
        <div className="hidden lg:flex gap-[10px]">
          <Link href="https://web.telegram.org" rel="noreferrer" target="_blank">
            <CircleButton icon='/icon/darkTelegram.svg' width='16' height='16' />
          </Link>
          <a href="https://vk.com" rel="noreferrer" target="_blank">
            <CircleButton icon='/icon/darkVK.svg' width='18' height='11' />
          </a>
        </div>
        <div className="hidden lg:block">
          <ScrollLink to="contactSection" spy={true} smooth={true} duration={1000} offset={-50}><DefaultButton title='ОСТАВИТЬ ЗАЯВКУ' /> </ScrollLink>
        </div>
        <div className="block lg:hidden">
          <LuMenu size={32} />
        </div>
      </div>
      <hr className="border-[var(--darkTextColor)]" />
      <div className="hidden lg:flex spaceBetween pt-[26px] pr-[32px] pb-[10px] pl-[78px]">
        <nav className="">
          <ul className="alignCenter list-none">
            {menuItemData.map((menu, index) => (
              <MenuItems items={menu} key={index} depthLevel={0} />
            ))}
          </ul>
        </nav>
        <RectButton title="Наш мерч →" />
      </div>
    </div>
  )
}