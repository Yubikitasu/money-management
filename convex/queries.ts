import { query } from "./_generated/server";
import { v } from "convex/values";

export const getHoatDong = query({
    args: {},
    handler: async (ctx) => {
        const hoatDong = await ctx.db.query("hoatDong").order("desc").take(30);
        return hoatDong;
    }
})

export const getSoTien = query({
    args: {},
    handler: async(ctx) => {
        const data = await ctx.db.query("soTien").first();
        return data;
    }
})