# Deploy GS-admin

```
  ____ ____                  _           _       
 / ___/ ___|        __ _  __| |_ __ ___ (_)_ __  
| |  _\___ \ _____ / _` |/ _` | '_ ` _ \| | '_ \ 
| |_| |___) |_____| (_| | (_| | | | | | | | | | |
 \____|____/       \__,_|\__,_|_| |_| |_|_|_| |_|
                                                 
GitHub Repo: https://github.com/wibus-wee/GS-admin/
```

## Require environments

- Node.js 16
- PNPM

## ENV settings

## Running in developing

::: tip
I advise you do not develop or research this project, because it has too many shit codes that you will be crazy.
:::

```bash
pnpm i
pnpm dev
```

After you save a file, all the system will reload at once. Because of React & NextJS, the speed is fast. You won’t have time to ~~"touch fish"~~

## Building in production

```bash
pnpm i 
pnpm build
```

That you can find `dist` on your root directory. Take it out to your server and use it online.

## Why applications return Timeout?

First, You should check to see if the API service is running. Also, you should check your API service [ENV setting](/guide/deploy-server.html#env-settings) of cors. In addition, you may check GS-admin [ENV setting](/guide/deploy-admin.html#env-settings)

If everything above is checked and there is no problem, please send a issues to [GitHub repository](https://github.com/wibus-wee/GS-admin/issues)