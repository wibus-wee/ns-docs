/*
 * @FilePath: /gs-docs/src/.vuepress/configs/sidebar/shared.ts
 * @author: Wibus
 * @Date: 2022-02-09 08:57:35
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-09 09:05:17
 * Coding With IU
 */
import { SidebarConfigArray } from 'vuepress/config'

export function getGuideSidebar (groupA: string): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'deploy-server',
        'deploy-admin'
      ]
    },
  ]
  return sidebar
}

export function getDevelopmentSidebar (groupA: string): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'interface',
        'headers',
      ]
    },
  ]
  return sidebar
}