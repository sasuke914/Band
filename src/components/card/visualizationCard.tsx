"use client"
import { Image, useDisclosure } from "@nextui-org/react";
import { mulish } from "../ui/font";
import { TelegramBlackButton } from "../Buttons";
import Link from "next/link";
import { VideoModal } from "../Modals";


export const Card1 = () => {
  return (
    <div className={`rounded-[5px] ${mulish.className} antialiased max-w-[403px] min-h-[432px] max-h-[432px] p-[30px] bg-[var(--secondaryWhiteColor)] `}>
      <Image src="/blog/textBlog.svg" width={108} height={108} />
      <p className="text-[18px] font-bold leading-[22.5px] py-9 text-[var(--primaryBgColor)] ">Площадки ЗАВОД ШОУ - Площадки | Ивент | Концерт | Мероприятия | Решения и концепции</p>
      <p className="text-[18px] pb-11 text-[var(--badgeColor)] ">481 подписчик</p>
      <TelegramBlackButton title='ЧИТАТЬ В ТЕЛЕГРАМ' />
    </div>
  )
}

export function Card2({ data }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className={`rounded-[5px] ${mulish.className} antialiased max-w-[403px] min-h-[432px] max-h-[432px] p-[30px] bg-[var(--secondaryWhiteColor)] `}>
        <p className="text-[12px] font-bold leading-[15px] pb-[30px] text-[var(--primaryBgColor)] ">{data.title}</p>
        <div className="relative w-full itemCenter ">
          <div className="w-full h-[201px] overflow-hidden"><video src={`/video/${data.url}.mp4`} className=" rounded-[5px] object-cover w-full h-full" /></div>
          <img src="/icon/coveringPlay.png" onClick={onOpen} width={58} height={66} className="absolute top-[55px] left-[44%]"
            alt="Play Icon"
          />
        </div>
        <div className="text-[14px] leading-[19px] py-[30px] text-[var(--primaryBgColor)] h-[100px] overflow-hidden line-clamp-3">
          {data.description}
        </div>
        {/* <p className="text-[14px] leading-[19px] py-[30px] text-[var(--primaryBgColor)] overflow-hidden whitespace-nowrap text-ellipsis ">{data.description}</p> */}
        <Link href={data.link} className="text-[12px] font-bold text-[var(--primaryBgColor)] ">ЧИТАТЬ ПОСТ</Link>
      </div>
      <VideoModal isOpen={isOpen} onOpenChange={onOpenChange} name={data.title} url={data.url} />
    </>
  )
}