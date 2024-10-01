import { Button, Image } from "@nextui-org/react";
import './button.css'
import { mulish } from "../ui/font";

export const CircleButton = ({ icon, scale }: any) => (
  <button style={{ scale: scale }} className="button circleButton"><Image src={icon} alt="darkTelegram" /> </button>
)

export const DefaultButton = ({ type, onClick, title }: any) => (
  <button type={type} className="button defaultButton" onClick={onClick}>{title} </button>
)

interface RectButtonProps {
  title: string;
}
export const RectButton: React.FC<RectButtonProps> = ({ title }) => {
  return (
    <button className={`${mulish.className} antialiased w-[99px] text-[14px] h-5 bg-transparent border  border-[var(--secondaryWhiteColor)] text-[var(--secondaryWhiteColor)] leading-[17.57px] tracking[-0.07em] `} style={{ transform: 'skew(-20deg)' }}>
      {title}
    </button>
  );
};