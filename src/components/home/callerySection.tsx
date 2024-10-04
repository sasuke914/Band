"use client"
import { galleryData, gallery } from "@/constant/group";
import Image from "next/image";
import { DefaultButton } from "../Buttons";
import { Link } from "@nextui-org/react";


interface GalleryItemProps {
  title: string;
}
export default function GallerySection({ title }: GalleryItemProps) {
  return (
    <div id="gallerySection" style={{ paddingTop: 'clamp(100px, 12vw, 250px)', paddingLeft: 'clamp(10px, 6vw, 140px)', paddingRight: 'clamp(10px, 6vw, 140px)' }}>
      <p className="lg:text-[58px] md:text-[45px] text-[30px] tracking-[-0.03em] itemCenter text-center ">{title}</p>
      <div className="lg:pt-[84px] md:pt-[64px] pt-[40px] hidden lg:flex flex-wrap justify-between">
        {galleryData.map((item, index) => (
          <div key={index} className={`${index === 2 ? 'px-[35%]' : index === 5 ? 'ml-[287px]' : ''}`}>
            <Image src={item.url} style={{ marginTop: `${gallery[index].top}px` }} alt="gallery Image" className="rounded-[20px]" />
            <p className='text-4'>{item.name}</p>
            <p className='text-[12px]'>{item.venue}</p>
          </div>
        ))}
      </div>
      <div className="lg:pt-[84px] md:pt-[64px] pt-[40px] flex lg:hidden flex-wrap justify-between gap-4 w-full">
        <div className='spaceBetween gap-4 w-full'>
          <div className="h-full">
            <Image src={galleryData[0].url} alt="smallgallery1" className="rounded-[7px] h-full" style={{ width: `clamp(158px, 40vw, 463px)` }} />
          </div>
          <div className="h-full" style={{ paddingTop: `clamp(27px,10vw,115px)` }}>
            <Image src={galleryData[1].url} alt="smallgallery2" className="rounded-[7px] h-full" style={{ width: `clamp(125px, 30vw, 360px)` }} />
          </div>
        </div>
        <div className='spaceBetween gap-4 w-full'>
          <div className="h-full flex flex-col gap-4">
            <Image src={galleryData[2].url} alt="smallgallery3" className="rounded-[7px]" style={{ width: `clamp(124px, 30vw, 259px)`, height: `clamp(182px,40vw,277px)` }} />
            <Image src={galleryData[3].url} alt="smallgallery5" className="rounded-[7px]" style={{ width: `clamp(124px, 30vw, 260px)`, height: `clamp(67px,20vw,140px)` }} />
          </div>
          <div className="h-full spaceBetween flex-col gap-4">
            <Image src={galleryData[4].url} alt="smallgallery4" className="rounded-[7px]" style={{ width: `clamp(158px, 40vw, 359px)`, height: `clamp(118px,30vw,181px)` }} />
            <Image src={galleryData[5].url} alt="smallgallery6" className="rounded-[7px]" style={{ width: `clamp(158px, 40vw, 360px)`, height: `clamp(127px,30vw,180px)` }} />
          </div>

        </div>
        <div className="itemCenter w-full">
          <Image src={galleryData[6].url} alt="smallgallery6" style={{ width: `clamp(300px, 20vw, 400px)` }} />

        </div>
        <div className='spaceBetween gap-4 w-full'>
          <div className="h-full"><Image src={galleryData[7].url} alt="smallgallery4" className="rounded-[7px] h-full" style={{ width: `clamp(158px, 40vw, 660px)` }} /></div>
          <div className="h-full"><Image src={galleryData[8].url} alt="smallgallery4" className="rounded-[7px] h-full" style={{ width: `clamp(124px, 30vw, 260px)` }} /></div>
        </div>
      </div>
      <Link href="/" className="flex md:justify-start justify-center pt-[40px] "><DefaultButton title="ВСЕ КЕЙСЫ ЗАВОД ШОУ" /></Link>
    </div>
  )
}