# Deploy GS-server

```
  ____ ____                                     
 / ___/ ___|       ___  ___ _ ____   _____ _ __ 
| |  _\___ \ _____/ __|/ _ \ '__\ \ / / _ \ '__|
| |_| |___) |_____\__ \  __/ |   \ V /  __/ |   
 \____|____/      |___/\___|_|    \_/ \___|_| 
 
GitHub Repo: https://github.com/wibus-wee/GS-server/
```

## Require environments

- Node.js 16
- PNPM
- MySQL
- PM2

## ENV settings

- `DB_HOST`: database address (typically <thin>127.0.0.1</thin>)
- `DB_PORT`: database port (usually <thin>3306</thin>)
- `DB_USERNAME`: specifies the database username.
- `DB_PASS`: specifies the database password
- `DB_DATABASE`: specifies the name of a database table
- `MAIL_SERVER`: indicates the mailbox server
- `MAIL_PORT`: indicates the mailbox port number
- `MAIL_ADD`: indicates the email address
- `MAIL_PASS`: indicates the mailbox password
- `CORS_SERVER`: allows cross-domain addresses
- `PORT`: indicates the startup PORT

## Running in production (the first method)

First, you need to clone `GS-server` to local server, then run commands

```bash
pnpm i
pnpm build
pnpm prod:pm2
```

## Running in production (the second method)

```bash
pnpm i
pnpm build
pnpm start
```

## Running in development

```bash
pnpm i
pnpm start:dev # recommended
```

if application run error, you can try delete `dist` directory or make an issue in [GitHub repository](https://github.com/GS-server/issues)

## Some tips in development

1. You can open [https://localhost:3000/api-docs](https://localhost:3000/api-docs) to debug interfaces
1. You can get API documents json on [https://localhost:3000/api-docs-json](https://localhost:3000/api-docs-json)
2. If you don’t have server to run GS-server, you can use the application on vercel: [https://gs-server.vercel.app](https://gs-server.vercel.app). You can deploy it on vercel too.

## Use GitHub Action to build Server

All of these steps have been removed because the package size is so large and it doesn’t really effects for your server if you don’t include `modules`

