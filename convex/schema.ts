import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  soTien: defineTable({
    tichLuy: v.number(),
    tietKiem: v.number(),
  }).index("tich_luy", ["tichLuy"])
  .index("tiet_kiem", ["tietKiem"]),
  
  hoatDong: defineTable({
    soTien: v.number(),
    trangThai: v.string(),
  })
});
