"use client"
import { menuItemData } from "@/constant/group";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { mulish } from "../ui/font";
import { DefaultBlackButton, DefaultButton } from "../Buttons";

export default function HeroSection() {
  const subMenu: any = menuItemData[1].submenu
  return (
    <div className="bg-[url('/background/heroVideo.gif')] itemCenter bg-cover bg-center h-[508px] relative">
      <div className={`itemCenter hidden md:flex absolute top-[64px] lg:left-[43%] gap-[5px] ${mulish.className} antialiased `}>
        <p className="opacityLink">{subMenu[0].title}</p>
        {subMenu[0].submenu.map((item: any, index: number) => (
          <Link className="heroSmallLink" href={item.url} key={index}>{item.title}</Link>
        ))}
      </div>
      <div className={`itemCenter hidden md:flex absolute top-[142px] lg:left-[19.5%] gap-[5px] ${mulish.className} antialiased `}>
        <p className="p-[10px] h-[28px] itemCenter bg-[var(--secondaryWhiteColor)] rounded-[5px] text-[12px] text-[var(--primaryBgColor)] font-bold leading-[15.06px] tracking-[-0.03em] ">{subMenu[1].title}</p>
        {subMenu[1].submenu.map((item: any, index: number) => (
          <Link className="heroSmallLink" href={item.url} key={index}>{item.title}</Link>
        ))}
      </div>
      <div className={`itemCenter hidden md:flex absolute top-[178px] lg:left-[70.5%] gap-[5px] ${mulish.className} antialiased `}>
        <p className="opacityLink">{subMenu[2].title}</p>
        {subMenu[2].submenu.map((item: any, index: number) => (
          <Link className="heroSmallLink" href={item.url} key={index}>{item.title}</Link>
        ))}
      </div>
      <p className="absolute md:top-[222px] top-[64px] lg:left-[62px] leading-[98.99px] tracking-[-0.03em] flex flex-wrap text-center" style={{ fontSize: 'clamp(40px, 6vw, 78px)', lineHeight: 'clamp(44px, 6vw, 93.99px)' }}>Технический продакшн</p>
      <p className="absolute md:top-[301px] top-[143px] lg:right-[62px] leading-[98.99px] tracking-[-0.03em] flex flex-wrap text-center" style={{ fontSize: 'clamp(40px, 6vw, 78px)', lineHeight: 'clamp(44px, 6vw, 93.99px)' }}>частных мероприятий</p>
      <div className="flex md:hidden absolute top-[256px] gap-1 ">
        <p className="opacityLink">ТЕХ. УСЛУГИ</p>
        <p className="heroSmallLink">ФИРМЕННЫЕ УСЛУГИ</p>
        <p className="opacityLink">ПРОДАКШН</p>
      </div>
      <div className="absolute itemCenter flex-col md:flex-row md:bottom-[64px] bottom-[24px] gap-3 ">
        <ScrollLink to="gallerySection" spy={true} smooth={true} duration={1000} offset={-50}><DefaultButton title="ЛУЧШИЕ КЕЙСЫ" /></ScrollLink>
        <Link href="/"><DefaultBlackButton title="ЗАПОЛНИТЬ БРИФ" /></Link>
      </div>
    </div>
  )
}