/*
 * @FilePath: /gs-docs/src/.vuepress/configs/sidebar/zh.ts
 * @author: Wibus
 * @Date: 2022-02-09 08:55:38
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-09 09:07:28
 * Coding With IU
 */
import { SidebarConfig4Multiple } from "vuepress/config";
import { getGuideSidebar, getDevelopmentSidebar } from "./shared";
export const Sidebar4ZH: SidebarConfig4Multiple = {
  // NEED TO CHANGE ROUTE!!
  '/guide/': getGuideSidebar('指南'),
  '/development/': getDevelopmentSidebar('开发'),
}