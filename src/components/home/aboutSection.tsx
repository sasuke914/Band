"use client"
import { submenu } from "@/constant/group";
import { Link } from "@nextui-org/react";
import { Link as ScrollLink } from "react-scroll";
import { DefaultButton } from "../Buttons";
import { mulish } from "../ui/font";

export default function AboutSection() {
  return (
    <div className="lg:pt-[150px] md:pt-[125px] pt-[100px] lg:px-[140px] md:px-[90px] px-[10px] md:pb-[163px] pb-[100px] itemCenter flex-col ">
      <p className="lg:text-[58px] md:text-[45px] text-[30px] text-center flex flex-wrap ">Спроектируем и настроим</p>
      <div className={`itemCenter flexWrap md:gap-3 gap-[6px] md:pt-[84px] md:pb-[64px] py-[40px] ${mulish.className} antialiased `}>
        <div>
          <Link href={submenu[0].url} className="bigTransButton itemCenter" style={{ padding: 'clamp(10px, 4vw, 18px) clamp(5px, 4vw, 55.5px)' }}>{submenu[0].title}</Link>
        </div>
        <div className="itemCenter md:gap-3 gap-[6px] flexWrap">
          {submenu.map((item, index) => (
            index !== 0 && <Link href={item.url} className="bigTransButton itemCenter " key={index}>{item.title}</Link>
          ))}
        </div>
      </div>
      <ScrollLink to="contactSection" spy={true} smooth={true} duration={1000} offset={-50}><DefaultButton title="заказать обратный звонок" /></ScrollLink>
    </div>
  )
}