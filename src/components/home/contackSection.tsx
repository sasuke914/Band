"use client";
import { Image } from "@nextui-org/react";
import { DefaultButton, DownloadButton } from "../Buttons"
import TextInput from "../Input/text"
import { mulish, russo_one } from "../ui/font"
import { LuMail, LuPhone } from "react-icons/lu";

interface ContactProps {
  title: string
}

export default function ContactSection({ title }: ContactProps) {

  const handleChange = () => {

  }
  const handleSubmit = (e: any) => {

  }

  return (
    <div id="contactSection" className={`lg:py-[200px] md:py-[150px] py-[100px] lg:px-[60px] md:px-[30px] px-0 ${mulish.className} antialiased `}>
      <div className="spaceBetween">
        <p className={`lg:text-[58px] md:text-[45px] text-[30px] lg:leading-[70px] md:leading-[50px] leading-[36px] ${russo_one.className} antialiased `}>{title}</p>
        <p className={'hidden md:block text-[var(--secondaryWhiteColor)] lg:text-[18px] md:text-[16px] text-[14px] w-[290px] md:leading-[25px] leading-[20px]'}>Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
      </div>
      <hr className="bg-[var(--darkTextColor)] lg:my-[50px] md:my-[40px] my-[30px] " />
      <p className={'block md:hidden text-[var(--secondaryWhiteColor)] lg:text-[18px] md:text-[16px] text-[14px] w-[290px] md:leading-[25px] leading-[20px] pb-[39px]'}>Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
      <form action={handleSubmit}>
        <div className="md:flex-row gap-[25px] flex-col spaceBetween lg:mr-[100px] md:mr-[50px] ">
          <div className="md:w-[360px] w-full ">
            <TextInput title="ФИО" placeholder="Иванов Иван Иванович" rows={0} />
            <TextInput title="Контакты" placeholder="Email, социальные сети, телефон" rows={0} />
          </div>
          <div className="md:w-[560px] w-full ">
            <TextInput title="Краткая информация о мероприятии" placeholder="Какое хотите провести: частное, корпоративное, деловое, государственное?" rows={6} />
          </div>
        </div>
        <div className="md:flex flexWrap ">
          <div className="w-full">
            <p className="text-[16px] leading-[20px] font-bold pb-4 ">Прикрепить файл</p>
            <div className="lg:gap-[200px] md:gap-[100px] gap-[50px] md:flex">
              <div className="flex md:w-[365px] w-full spaceBetween">
                <DownloadButton onChange={handleChange} />
                <p className="text-[14px] leading-[20px] ">Файлы до 3 МБ. DOC,<br /> PDF, JPG, форматы Exel</p>
              </div>
              <div className={`md:pt-0 pt-10 ${russo_one.className} antialiased`}><DefaultButton type='submit' title="ОТПРАВИТЬ ЗАЯВКУ" /></div>
            </div>
          </div>
        </div>
      </form>
      <hr className="bg-[var(--darkTextColor)] lg:my-[50px] md:my-[40px] my-[30px] " />
      <div className="md:spaceBetween md:flex-row flex flex-col gap-[30px]">
        <div className="alignCenter gap-5">
          <Image src="/avatar/bigFatUser.png" width={59} height={59} className="rounded-[50%]" />
          <div className="gap-[10px] flex flex-col ">
            <p className="text-[18px] font-bold leading-[22px] ">Алексей Седов</p>
            <p className="text-[14px]" >Генеральный продюсер</p>
          </div>
        </div>
        <div className="gap-[14px] flex flex-col ">
          <div className="flex gap-[11px] ">
            <LuMail size={24} />
            <p className="text-[18px] font-bold leading-[22px] ">info@zavodshow.ru</p>
          </div>
          <div className="flex gap-[11px] ">
            <LuPhone size={24} />
            <p className="text-[18px] font-bold leading-[22px] ">+7 906 065-28-33</p>
          </div>
        </div>
        <div>
          <p className="text-[14px]">Задать вопрос напрямую <br /> генеральному директору</p>
        </div>
      </div>
    </div>
  )
}