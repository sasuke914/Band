"use client"
import { Button, Image } from "@nextui-org/react";
import './button.css'
import { mulish } from "../ui/font";
import { useRef } from "react";

export const CircleButton = ({ icon, width, height }: any) => (
  <button className="button  itemCenter rounded-[50%] w-[40px] h-[40px] bg-[var(--primaryWhiteColor)] hover:bg-[var(--secondaryWhiteHover)]"><Image width={width} height={height} src={icon} alt="darkTelegram" /> </button>
)

export const DefaultButton = ({ type, onClick, title }: any) => (
  <button type={type} className="button defaultButton hover:bg-[var(--secondaryWhiteHover)]">{title} </button>
)

export const DefaultBlackButton = ({ type, onClick, title }: any) => (
  <Button type={type} className="button defaultButton blackButton hover:bg-[var(--secondaryWhiteHover)]" onClick={onClick}>{title}</Button>
)
export const TelegramBlackButton = ({ type, onClick, title }: any) => (
  <Button type={type} className="button defaultButton blackButton hover:bg-[var(--secondaryWhiteHover)]" style={{ height: '48px' }} onClick={onClick}>
    {title} <div className="itemCenter rounded-[50%] bg-white w-[18px] h-[18px] "><Image src="/icon/darkTelegram.svg" width={10} height={10} /></div></Button>
)

interface RectButtonProps {
  title: string;
}
export const RectButton: React.FC<RectButtonProps> = ({ title }) => {
  return (
    <Button className={`${mulish.className} antialiased  hover:bg-[var(--secondaryWhiteHover)] w-[99px] text-[14px] h-5 bg-transparent border  border-[var(--secondaryWhiteColor)] text-[var(--secondaryWhiteColor)] leading-[17.57px] tracking[-0.07em] `} style={{ transform: 'skew(-20deg)' }}>
      {title}
    </Button>
  );
};

export const DownloadButton = ({ onChange }: any) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <Button onClick={handleButtonClick} className="button rounded-[5px] py-[10px] px-5 bg-[var(--secondaryWhiteColor)] text-[var(--primaryBgColor)] text-[16px] h-[40px] itemCenter hover:bg-[var(--secondaryWhiteHover)] ">
      <input required ref={fileInputRef} type="file" name="video" hidden onChange={onChange} />
      <Image src="/icon/darkAdd.svg" /> Выбрать файл
    </Button>
  )
}