import { Image } from "@nextui-org/react";
import { LuUser } from "react-icons/lu";
import { mulish } from "../ui/font";

export const CardViewNumber = ({ value }: any) => (
  <div className="p-[6px] rounded-[5px] text-[12px] text-[var(--primaryBgColor)] flex gap-[6px] bg-[var(--badgeBgColor)] itemCenter h-6 ">
    <LuUser size={12} />
    <p>от {value}</p>
  </div>
)

export const CardBadge = ({ title }: any) => (
  <div className="bg-[var(--badgeBgColor)] px-[10px] py-[6px] rounded-[20px] ">
    <p className='md:text-3 text-[10px] text-[var(--badgeColor)]'>{title}</p>
  </div>
)