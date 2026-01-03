"use client"

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api"
import { Separator } from "./ui/separator"
import { soTienChuyenDoi, toTime } from "./functions/parseMoney";

export default function HoatDong() {

    const renderChu = (trangThai: string) => {
        if (trangThai == "tieu-xai") {
            return (
                <div className="text-red-600">Tiêu xài</div>
            )
        }
        else if (trangThai == "tiet-kiem") {
            return (
                <div className="text-emerald-600">Tiết kiệm</div>
            )
        } else if (trangThai == "tich-luy") {
            return (
                <div>Tích lũy</div>
            )
        }
    }

    const renderSo = (trangThai: string, soTien: number) => {
        if (trangThai == "tieu-xai") {
            return (
                <div className="text-red-600">-{soTienChuyenDoi(soTien)}</div>
            )
        }
        else if (trangThai == "tiet-kiem") {
            return (
                <div className="text-emerald-600">{soTienChuyenDoi(soTien)}</div>
            )
        } else if (trangThai == "tich-luy") {
            return (
                <div>+{soTienChuyenDoi(soTien)}</div>
            )
        }
    }

    const data = useQuery(api.queries.getHoatDong, {});
    return (
        <div className="w-screen lg:w-200">
            <Separator className="my-4"></Separator>
            <div className="font-bold text-center">Hoạt động gần đây của bạn: </div>
            { data?.map(({_id, _creationTime, soTien, trangThai}) => 
                <div key={_id} className="w-full flex justify-between items-center p-4 my-4 border border-auto rounded-lg">
                    <div>
                        {renderChu(trangThai)}
                        <div className="text-sm">{toTime(_creationTime)}</div>
                    </div>
                    {renderSo(trangThai, soTien)}
                </div>
            )}
        </div>
    );
}