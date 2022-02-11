/*
 * @FilePath: /gs-docs/src/.vuepress/configs/sidebar/zh.ts
 * @author: Wibus
 * @Date: 2022-02-09 08:55:38
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-11 16:05:55
 * Coding With IU
 */
import { SidebarConfig4Multiple } from "vuepress/config";
import { getGuideSidebar, getDevelopmentSidebar, getAnySidebar } from "./shared";
export const Sidebar4ZH: SidebarConfig4Multiple = {
  '/zh/guide/': getGuideSidebar('指南'),
  '/zh/development/': getDevelopmentSidebar('开发'),
  '/zh/changelog/': getAnySidebar('ChangeLog', [
    ''
  ])
}