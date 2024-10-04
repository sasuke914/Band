import { Image } from "@nextui-org/react";
import { DefaultBlackButton } from "../Buttons";
import { mulish } from "../ui/font";

export default function RehearsalSection() {
  return (
    <div className="lg:p-[62px] md:p-[50px] p-[30px] bg-[var(--secondaryWhiteColor)] text-[var(--primaryBgColor)] w-full rounded-[10px] lg:mb-[200px] md:mb-[150px] mb-[100px] ">
      <p className="md:w-[65%] w-[80%] md:leading-[69px] leading-[36px] " style={{ fontSize: 'clamp(30px, 4vw, 58px)' }} >Проверьте идею заранее и сократите риски</p>
      <div className="pt-[40px] lg:pt-[84px] md:pt-[60px] gap-10 grid md:grid-cols-2 grid-cols-1 ">
        <div>
          <div className="w-full"><Image src='/pending/pending2.png' height={290} className="w-full" alt="pending2" /></div>
          <div className="flex flex-col md:flex-row gap-6 md:pt-[47px] pt-[20px] ">
            <div>
              <p className="md:text-[30px] text-[20px] ">3D-визуализация</p>
              <p className={`${mulish.className} md:text-[14px] text-[18px] md:leading-[25.2px] leading-[19.5px]`}>Смоделируем несколько вариантов оформления сцены и выберем наиболее подходящий под требования</p>
            </div>
            <div><DefaultBlackButton title='ПОДРОБНЕЕ' /></div>
          </div>
        </div>
        <div>
          <div className="w-full"><Image src='/pending/pending1.png' height={290} className="w-full" alt="pending1" /></div>
          <div className="flex flex-col md:flex-row gap-6 md:pt-[47px] pt-[20px] ">
            <div>
              <p className="md:text-[30px] text-[20px] ">Репетиционная база</p>
              <p className={`${mulish.className} md:text-[14px] text-[18px] md:leading-[25.2px] leading-[19.5px]`}>Возможность проверки идеи мероприятия в реалистичных условиях вместе с репетициями артистов</p>
            </div>
            <div><DefaultBlackButton title='ПОДРОБНЕЕ' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}