import { mulish } from "../ui/font";

interface TextProps {
  title: string;
  placeholder: string;
  rows: number;
}

export default function TextInput({ title, placeholder, rows }: TextProps) {
  return (
    <div className={`${mulish.className} antialiased`}>
      <p className="md:text-[16px] text-[14px] pb-[15px]">{title}</p>
      {rows ? <textarea rows={rows} placeholder={placeholder} className="w-full rounded-[5px] px-5 pt-5 mb-[30px] bg-[var(--secondaryWhiteColor)] text-[#B0B0B0]" /> :
        <input required type="text" placeholder={placeholder} className="w-full h-[50px] rounded-[5px] px-5 mb-[30px] bg-[var(--secondaryWhiteColor)] text-[#B0B0B0]" />}
    </div>
  )
}