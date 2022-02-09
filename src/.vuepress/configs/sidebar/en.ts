/*
 * @FilePath: /gs-docs/src/.vuepress/configs/sidebar/en.ts
 * @author: Wibus
 * @Date: 2022-02-09 08:55:35
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-09 09:07:34
 * Coding With IU
 */
import { SidebarConfig4Multiple, SidebarItem4Group } from "vuepress/config";
import { getDevelopmentSidebar, getGuideSidebar } from "./shared";

export const Sidebar4EN: SidebarConfig4Multiple = {
  '/guide/': getGuideSidebar('Guide'),
  '/development/': getDevelopmentSidebar('Development'),
}