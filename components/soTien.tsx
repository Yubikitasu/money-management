"use client"

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { soTienChuyenDoi } from "./functions/parseMoney";
import { Separator } from "./ui/separator";

export default function ShowSoTien() {
    const soTien = useQuery(api.queries.getSoTien);
    let tichLuy = 0;
    let tietKiem = 0;
    if (soTien != undefined) {
        tichLuy = soTien.tichLuy;
        tietKiem = soTien.tietKiem;
    }

    return (
        <div>
            <Separator className="my-4"></Separator>
            <div>
                Bạn đã tích lũy được:
                <div className="text-2xl font-bold text-center my-5">
                        {soTienChuyenDoi(tichLuy)}
                </div>
                Bạn đã tiết kiệm được:
                <div className="text-2xl font-bold text-center my-5">
                        {soTienChuyenDoi(tietKiem)}
                </div>
            </div>
        </div>
    );
}