# 部署 GS-admin

```
  ____ ____                  _           _       
 / ___/ ___|        __ _  __| |_ __ ___ (_)_ __  
| |  _\___ \ _____ / _` |/ _` | '_ ` _ \| | '_ \ 
| |_| |___) |_____| (_| | (_| | | | | | | | | | |
 \____|____/       \__,_|\__,_|_| |_| |_|_|_| |_|
                                                 
GitHub 项目: https://github.com/wibus-wee/GS-admin/
```

## 环境依赖

- Node.js 16
- PNPM

## ENV 设置

## 在开发模式下启动

::: tip
我建议你不要开发或探索这个项目，因为它有太多的屎山，真的看了会疯
:::

```bash
pnpm i
pnpm dev
```

当你执行保存文件后，程序将会立即重载，而且得益于库，它的速度非常的快，以至于你~~没法摸鱼~~

## 在生产模式下编译

```bash
pnpm i 
pnpm build
```

你可以在根目录下找到' dist '。将其放到服务器上并在线使用。

## 为什么会返回连接超时?

首先，您应该检查API服务是否正在运行。此外，您应该检查您的API服务在CORS_SERVER的 [ENV setting](/guide/deploy-server.html#env-settings) . 此外你也要检查一下你的GS-admin对 [ENV](/guide/deploy-admin.html#env-settings) 的设置

如果以上都检查过了，没有问题，请在[GitHub Issues](https://github.com/wibus-wee/GS-admin/issues)发起 issue