# Introduction

![](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/20220208121020.jpg)

GoldenSpace is a collection of projects, frontend runs separately from the backend. It's convenient for developers and ~~it can avoid you to quarrel with people in other fields.~~

It has a high degree of development freedom, you can develop your own front/middle background through the interface.

## The structure of the GoldenSpace

According to GitHub Data (2021.2.8), GoldenSpace includes: server(release), admin(demo) and web(private)

**GS-server**: service side,  by wibus-wee. Built by NodeJS, NestJS, MySQL, TypeScript.

**GS-admin *(web)***: Middle background web side, by wibus-wee. Built by React, TypeScript, NextJS

**GS-app *(admin app in moblie)***: Middle background mobile terminal, by wibus-wee. Built by React Native, TypeScript 

**GS-app-pc *(admin app in pc)***: Middle background computer side, by wibus-wee. Built by Electron, TypeScript

**GS-web *(default frontend web)***: Foreground web side, by wibus-wee. Built by ???

<gray><thin>~~???-web (Co-development): Foreground web side, by MYXXTS.~~ *(project sleeping now)*</thin></gray>

...more?

Waiting for your contribution!


## Reference

GoldenSpace was inspired by [Mix-Space](https://github.com/mx-space)