# 部署 GS-server

```
  ____ ____                                     
 / ___/ ___|       ___  ___ _ ____   _____ _ __ 
| |  _\___ \ _____/ __|/ _ \ '__\ \ / / _ \ '__|
| |_| |___) |_____\__ \  __/ |   \ V /  __/ |   
 \____|____/      |___/\___|_|    \_/ \___|_| 
 
GitHub 项目: https://github.com/wibus-wee/GS-server/
```

## 环境依赖

- Node.js 16
- PNPM
- MySQL
- PM2

## ENV 设置

- `DB_HOST`：数据库地址（一般为 127.0.0.1）
- `DB_PORT`：数据库端口（一般 3306）
- `DB_USERNAME`：数据库用户名（一般 root）
- `DB_PASS`：数据库密码
- `DB_DATABASE`：数据库表名
- `MAIL_SERVER`：邮箱服务器
- `MAIL_PORT`：邮箱端口号
- `MAIL_ADD`：邮箱地址
- `MAIL_PASS`：邮箱密码
- `CORS_SERVER`：允许跨域的地址

## 在生产模式下运行 (第一种)

首先你需要将项目克隆，之后运行以下命令

```bash
pnpm i
pnpm build
pnpm prod:pm2
```

## 在生产模式下运行 (第二种)

```bash
pnpm i
pnpm build
pnpm start
```

## 在开发模式下运行

```bash
pnpm i
pnpm start:dev # recommended
```

如果应用程序运行错误，您可以尝试删除' dist '目录或在 [GitHub Issues](https://github.com/GS-server/issues) 中提出问题

## 在开发中的一些tips

1. 你可以打开 [https://localhost:3000/api-docs](https://localhost:3000/api-docs) 来调试接口
1. 你可以从 [https://localhost:3000/api-docs-json](https://localhost:3000/api-docs-json) 得到文档json文件
2. 如果你没有环境来运行它，在线上你可以找到 [https://gs-server.vercel.app](https://gs-server.vercel.app) 来进行调试。你也可以自行部署在vercel中

## 使用GitHub Action来构建包

所有这些步骤都被删除了，因为包的大小太大，如果不包含`node_modules`，个人认为它对你的服务器没有真正的帮助