# Grammy Nammatham v1 Starter

## Features
- Use [Azure Functions v3 Model](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-typescript?tabs=windows%2Cazure-cli%2Cbrowser&pivots=nodejs-model-v3) [(which is supported by Grammy)](https://grammy.dev/guide/deployment-types#web-framework-adapters)
  - Note: Due to Grammy `webhookCallback` only support with Azure Functions v3 Model, so we need to use this model.
- Setup with [Grammy](https://grammy.dev) (Telegram Bot Framework)
- Type Support from [Nammatham](https://github.com/thaitype/nammatham) Framework

## Getting Started

- Create bot at [BotFather](https://t.me/botfather)
- Create `.env` file and add `BOT_TOKEN` to the file
- Install dependencies
  ```bash
  npm install
  ```
- Use public URL from [ngrok](https://ngrok.com) or [localtunnel](https://localtunnel.github.io/www/) to setup webhook
- Setup webhook
  ```
  curl https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=<WEBHOOK_URL>
  ```
- Start the bot
  ```bash
  npm run dev
  ```

## Manual

### Dev

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Deploy
```bash
npm run build
func azure functionapp publish <functionAppName>
```

when you deploy to Azure Functions, you need to setup webhook again with the new URL

## Documentation

Please read the [full documentation in the repo](https://github.com/thaitype/nammatham/tree/main/docs)

## Author
- Thada Wangthammang, Software Engineer, Thailand
