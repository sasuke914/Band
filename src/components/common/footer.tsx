"use client";

import { Image } from "@nextui-org/react";
import Link from "next/link";
import { CircleButton, DefaultButton } from "../Buttons";
import { footerBottomLink, footerTopLink } from "@/constant/group";
import { LuMail, LuMessageSquare, LuPhone } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll";
import { mulish } from "../ui/font";

export default function Footer() {
  return (
    <div className="px-[10px] md:px-[138px] py-[20px] bg-transparent">
      <div className="spaceBetween flex-wrap gap-5">
        <div className="w-full lg:w-[43%]">
          <Link href="/"><img src="/icon/bigfooterLogo.png" className="hidden lg:block" alt="bigLogo" /> </Link>
          <Link href="/"><img src="/icon/smallfooterLogo.png" className="block lg:hidden" alt="smallLogo" /> </Link>
          <ScrollLink to="contactSection" spy={true} smooth={true} className="pt-[51px] hidden sm:block"><DefaultButton title="ОСТАВИТЬ ЗАЯВКУ" /></ScrollLink>
        </div>
        <div className="w-full lg:w-[54%]">
          <div className="flex flex-col md:flex-row gap-4 md:spaceBetween flex-wrap">
            <div className="flex flex-col text-[14px] sm:flex-row sm:itemCenter gap-8 flex-wrap">
              {footerTopLink.map((item, index) => (
                <Link href={item.url} key={index} className="text-[12px]">{item.title}</Link>
              ))}
            </div>
            <div className="alignCenter gap-[14px] ">
              <ScrollLink to="contactSection" spy={true} smooth={true} className="block sm:hidden"><DefaultButton title="ОСТАВИТЬ ЗАЯВКУ" /></ScrollLink>
              <a href="https://web.telegram.org" rel="noreferrer" target="_blank">
                <CircleButton icon='/icon/darkTelegram.svg' width='16' height='16' />
              </a>
              <a href="https://vk.com" rel="noreferrer" target="_blank">
                <CircleButton icon='/icon/darkVK.svg' width='18' height='11' />
              </a>
            </div>
          </div>
          <div className={`${mulish.className} antialiased spaceBetween pt-[50px] md:pt-[90px] text-[12px] pr-[99px] gap-10 flex-wrap`}>
            {footerBottomLink.map((item, index) => {
              return (
                <div key={index}>
                  <p>{item.title}</p>
                  {index !== 2 ?
                    item.submenu.map((subitem, subindex) =>
                      <div key={subindex}><Link href={subitem.url} >{subitem.title}</Link></div>
                    ) : <div className="grid grid-cols-2">
                      {item.submenu.map((subitem, subindex) =>
                        <div key={subindex}><Link href={subitem.url}>{subitem.title}</Link></div>
                      )}
                    </div>
                  }
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <hr className="border-[var(--darkTextColor)] my-[40px]" />
      <div className={`spaceBetween text-[18px] ${mulish.className} antialiased gap-10 flex-wrap`}>
        <div className="">
          <div className="flex gap-2"><LuMail /><span>info@zavodshow.ru</span></div>
          <div className="flex gap-2"><LuPhone /><span>+7 906 065-28-33</span></div>
        </div>
        <div className="flex flex-col">
          <span>Москва, г. Реутов, ул. Победы, 20</span>
          <span>Пн-Сб:10-19 МСК</span>
        </div>
        <div className="flex flex-col md:items-end text-[12px] text-[var(--darkTextColor)] ">
          <span>© Завод Шоу</span>
          <span>Политика конфиденциальности</span>
          <span>Разработка сайта</span>
          <span>СОУТ</span>
        </div>
      </div>
    </div>
  )
}