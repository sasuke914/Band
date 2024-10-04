"use client"
import Link from "next/link";
import { DefaultButton } from "../Buttons";
import { sites } from "@/constant/group";
import SiteCard from "../card/siteCard";
import { useState, useEffect } from "react";

export default function PortfolioSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedSites = isSmallScreen ? sites.slice(0, 3) : sites;

  return (
    <div>
      <div className="spaceBetween">
        <p className="lg:text-[58px] md:text-[45px] text-[30px] leading-[36px] ">Работаем на площадках</p>
        <Link href="/" className="md:block hidden"><DefaultButton title="все площадки" /></Link>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-7 gap-5 lg:pt-[84px] md:pt-[62px] pt-[40px]">
        {displayedSites.map((item, index) => (
          <SiteCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
