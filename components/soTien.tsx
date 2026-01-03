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
            <div className="space-y-4">
                <div className="w-full p-4 border border-auto rounded-lg">
                    Số tiền mà bạn đã tích lũy được:
                    <div className="text-2xl font-bold">
                        {soTienChuyenDoi(tichLuy)}
                    </div>
                </div>
                <div className="w-full p-4 border border-auto rounded-lg">
                    Số tiền mà bạn đã tiết kiệm được:
                    <div className="text-2xl font-bold">
                        {soTienChuyenDoi(tietKiem)}
                    </div>
                </div>
            </div>
        </div>
    );
}