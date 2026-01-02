import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const taoHoatDongMoi = mutation({
  args: {
    soTien: v.number(),
    trangThai: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("hoatDong", {
      soTien: args.soTien,
      trangThai: args.trangThai,
    })
  }
})

export const themSoTienMoi = mutation({
  args: {
    tichLuy: v.number(),
    tietKiem: v.number(),
  },
  handler: async (ctx, args) => {
    const soTienTichLuy = await ctx.db.query("soTien").first();
    if (soTienTichLuy?.tietKiem == undefined || soTienTichLuy?.tichLuy == undefined) {
      await ctx.db.insert("soTien", {
        tichLuy: args.tichLuy,
        tietKiem: args.tietKiem,
      })
    } else {
      await ctx.db.patch("soTien", soTienTichLuy._id, {
        tichLuy: soTienTichLuy.tichLuy + args.tichLuy,
        tietKiem: soTienTichLuy.tietKiem + args.tietKiem,
      })
    }
  }
})

export const truSoTienMoi = mutation({
  args: {
    tichLuy: v.number(),
    tietKiem: v.number(),
  },
  handler: async (ctx, args) => {
    const soTienTichLuy = await ctx.db.query("soTien").first();
    if (soTienTichLuy?.tietKiem == undefined || soTienTichLuy?.tichLuy == undefined) {
      await ctx.db.insert("soTien", {
        tichLuy: args.tichLuy,
        tietKiem: args.tietKiem,
      })
    } else {
      await ctx.db.patch("soTien", soTienTichLuy._id, {
        tichLuy: soTienTichLuy.tichLuy - args.tichLuy,
        tietKiem: soTienTichLuy.tietKiem - args.tietKiem,
      })
    }
  }
})