import Image from "next/image";
import { Control } from "@/components/control";
import HoatDong from "@/components/hoatDong";
import ShowSoTien from "@/components/soTien";

export default function Home() {
  return (
  <div className="w-screen h-screen flex justify-center p-10">
    <div className="space-y-2">
      <Control />
      <ShowSoTien />
      <HoatDong />
    </div> 
  </div>
  );
}
