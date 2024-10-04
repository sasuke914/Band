import { CardBadge, CardViewNumber } from "../Badges";
import { mulish } from "../ui/font";
import { DefaultBlackButton } from "../Buttons";
import Image from "next/image";

interface CardProps {
  url: string;
  capacity: number;
  name: string;
  address: string;
}
export default function SiteCard({ data }: any) {
  return (
    <div className={`bg-[var(--secondaryWhiteColor)] p-4 ${mulish.className} antialiased rounded-[5px]`}>
      <div className="relative w-full">
        <div className="w-full h-[237px] ">
          <Image src={data.url} alt="cardImage" className="rounded-[10px] w-full h-full object-cover" />
        </div>
        <div className="absolute top-4 right-4 "><CardViewNumber value={data.capacity} /></div>
      </div>
      <div className="spaceBetween lg:pt-[30px] md:pt-[25px] lg:py-5 md:py-4 py-3">
        <p className='md:text-[24px] text-[20px] font-bold text-[var(--primaryBgColor)] '>{data.name}</p>
        <div className="itemCenter gap-[10px] ">
          <CardBadge title='Ресторан' />
          <CardBadge title='Ещё 6' />
        </div>
      </div>
      <p className="text-3 text-[var(--primaryBgColor)] lg:pb-[30px] md:pb-[25px] pb-5 ">{data.address}</p>
      <DefaultBlackButton title='ПОДРОБНЕЕ' />
    </div>
  )
}