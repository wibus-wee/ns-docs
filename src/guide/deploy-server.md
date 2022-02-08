# Deploy GS-server

```
  ____ ____                                     
 / ___/ ___|       ___  ___ _ ____   _____ _ __ 
| |  _\___ \ _____/ __|/ _ \ '__\ \ / / _ \ '__|
| |_| |___) |_____\__ \  __/ |   \ V /  __/ |   
 \____|____/      |___/\___|_|    \_/ \___|_| 
 
GitHub Repo: https://github.com/GS-server/
```

## Require environments

- NodeJS
- PNPM
- MySQL
- PM2

## ENV setting



## Run server in production (the first method)

First, you need to clone `GS-server` to local server, then run commands

```bash
pnpm i
pnpm build
pnpm prod:pm2
```

## Run server in production (the second method)

```bash
pnpm i
pnpm build
pnpm start
```

## Run server in development

```bash
pnpm i
pnpm start:dev # recommended
```

if application run error, you can try delete `dist` directory or make an issue in [GitHub Repo](https://github.com/GS-server/issues)

## Some tips in development

1. You can open [https://localhost:3000/api-docs](https://localhost:3000/api-docs) to debug interfaces
1. You can get api documents json on [https://localhost:3000/api-docs-json](https://localhost:3000/api-docs-json)
2. If you don't have server to run GS-server, you can use the application on vercel: [https://gs-server.vercel.app](https://gs-server.vercel.app). You can deploy it on vercel too.

## Use GitHub Action to build Server

All of these steps have been removed because the package size is so large and it doesn't really effects for your server if you don't include `modules`

