import { visualizationData } from "@/constant/group"
import { Card1, Card2 } from "../card/visualizationCard"

export default function VisualizationSection() {
  return (
    <div className="lg:pb-50 md:pb-[150px] pb-25 ">
      <p className="lg:text-[58px] md:text-[45px] text-[30px] lg:leading-[70px] md:leading-[55px] leading-[36px] lg:pb-[74px] md:pb-[57px] pb-[40px] ">Блог #ЗаводШоу</p>
      <div className="itemCenter gap-10 flex-wrap">
        <Card1 />
        <Card2 data={visualizationData[0]} />
        <Card2 data={visualizationData[1]} />
      </div>
    </div>
  )
}