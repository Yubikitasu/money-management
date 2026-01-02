"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useState } from "react"
import { soTienChuyenDoi } from "./functions/parseMoney"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"


export function Control() {
  
  const [soTien, setSoTien] = useState(NaN);

  const handleChange = (event: any) => {
    setSoTien(parseFloat(event.target.value));
  }

  const taoHoatDongMoi = useMutation(api.mutations.taoHoatDongMoi);

  const themSoTienMoi = useMutation(api.mutations.themSoTienMoi);
  const truSoTienMoi = useMutation(api.mutations.truSoTienMoi);

  async function handleClick(trangThai: string, soTien: number) {

    let vietnamese = ['tiêu xài', 'tích lũy', 'tiết kiệm']
    let trangThaiArray = ['tieu-xai', 'tich-luy', 'tiet-kiem'];
    let index = 0;
    for (index; index < 3; index++) {
      if (trangThaiArray[index] == trangThai) {
        break;
      }
    }

    await taoHoatDongMoi({
      soTien: soTien,
      trangThai: trangThai
    }).then(() => {
      toast.info("Đã ghi nhận sự " + vietnamese[index] + "  của bạn", 
      {
        description: "Bạn đã " + vietnamese[index] + " " + soTienChuyenDoi(soTien)
      });
    })

    if (trangThai == "tieu-xai") {
      await truSoTienMoi({
        tichLuy: soTien,
        tietKiem: 0
      })
    } else if (trangThai == "tich-luy") {
      await themSoTienMoi({
        tichLuy: soTien,
        tietKiem: 0
      })
    } else if (trangThai == "tiet-kiem") {
      await truSoTienMoi({
        tichLuy: soTien,
        tietKiem: 0,
      })
      await themSoTienMoi({
        tichLuy: 0,
        tietKiem: soTien,
      })
    }
  }

  return (
    <div className="space-y-2">
     <Label id="soTien" htmlFor="money-number">Nhập số tiền của bạn:</Label>
       <Input id="money-number" type="number" value={Number.isNaN(soTien) ? "" : soTien} onChange={handleChange}></Input>
       <div className="flex space-x-2">
          <Button variant="destructive" onClick={() => handleClick("tieu-xai", soTien)}>Tiêu xài</Button>
          <Button onClick={() => handleClick("tiet-kiem", soTien)}>Tiết kiệm</Button>
          <Button variant="outline" onClick={() => handleClick("tich-luy", soTien)}>Tích lũy</Button>
       </div>
    </div>
  );
} 
