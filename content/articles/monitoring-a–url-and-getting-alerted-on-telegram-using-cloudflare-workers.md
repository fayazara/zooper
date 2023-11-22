---
title: "Monitoring a website and getting alerted on telegram using cloudflare workers"
description: "Creating a Cloudflare worker to monitor and get alerts on Telegram"
date: "Nov 22, 2023"
slug: "monitoring-a–url-and-getting-alerted-on-telegram-using-cloudflare-workers"
---

I recently checked out a popular product that monitors websites and URLs. It had loads of features, but I only needed a simple way to keep tabs on a URL and get alerted if it goes down.

My inner Indie developer in, and I came up with a straightforward worker, hooking it up to Telegram to notify me if the URL crashes. The best part? It's all free, thanks to Cloudflare's generous free plan.

![Drake Meme - Indie Hacker](/articles/indie-drake.jpeg)

Here's my goal: ![Site monitoring overview](/articles/site-monitoring-flow.jpg)

## Creating the worker

1. Head to dash.cloudflare.com and select **Workers and Pages** from the sidebar.
2. Click **Create an application** & Create a worker.
3. Name it and hit **Deploy**. You've got a starter worker ready for customization.

## The CF Worker: What It Does

Here's the code

```js
// Once you get notified, you won't get notified again for an hour
const NOTIFICATION_INTERVAL_MS = 3600000;

export default {
  async scheduled(event, env, ctx) {
    const siteToCheck = "https://example.com"; // Change this to your site
    validateEnvironmentVariables(env);

    try {
      const siteResponse = await fetch(siteToCheck);
      await handleSiteResponse(siteResponse, env, siteToCheck);
    } catch (error) {
      console.error(`Error checking site: ${error.message}`);
    }
  },
};

// Make sure you have these environment variables set in your worker
function validateEnvironmentVariables(env) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    throw new Error("Bot token or chat id missing");
  }
}

// Check if the site is down and notify if required
async function handleSiteResponse(siteResponse, env, siteToCheck) {
  if (!siteResponse.ok) {
    await notifyIfRequired(siteResponse, env, siteToCheck);
  } else {
    console.log("Site is up!");
  }
}

// Sends notification if we haven't sent one in the last hour
async function notifyIfRequired(siteResponse, env, siteToCheck) {
  const lastNotified = await env.KV.get("NOTIFIED_ALREADY");
  const currentTime = new Date().getTime();
  if (shouldNotify(currentTime, lastNotified)) {
    await sendNotification(siteResponse, env, siteToCheck);
    await env.KV.put("NOTIFIED_ALREADY", currentTime.toString());
    console.log("Notification sent");
  } else {
    console.log("Notification already sent within the last hour");
  }
}

function shouldNotify(currentTime, lastNotified) {
  return (
    !lastNotified ||
    currentTime - Number(lastNotified) >= NOTIFICATION_INTERVAL_MS
  );
}

// Trigger the telegram bot to send a message
async function sendNotification(siteResponse, env, siteToCheck) {
  const message = buildAlertMessage(siteToCheck, siteResponse.status);
  const telegramApiUrl = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  return fetch(telegramApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML",
      disable_web_page_preview: false,
    }),
  });
}

function buildAlertMessage(siteUrl, statusCode) {
  // Build the message to send to telegram
  return `<b>Alert! 🚨</b>
Your site ${siteUrl} appears to be down.

<b>Status: ${statusCode}</b>`;
}
```

## Creating a telegram bot

Talk to [BotFather](https://t.me/botfather) and create a bot by talking to the it on telegram and follow the instructions to create a bot and get the bot token.

Now get your chat id, you can get it by using this [IDBot](https://t.me/myidbot) on telegram and follow the instructions to get your chat id.
![Telegram Chat ID](/articles/telegram-chat-id.jpg)

## Setting up the environment variables

![Cloudflare workers settings](/articles/cloudflare-workers-settings.jpg)

Add the following environment variables and save.

| Variable name      | Required |
| ------------------ | -------- |
| TELEGRAM_BOT_TOKEN | Yes      |
| TELEGRAM_CHAT_ID   | Yes      |

## Setting up the KV store

1. First you need to create a KV store, Go back to cloudflare dashboard and expand the **Workers KV** menu to find the the "KV" option, open this.
2. Click on **Create a new namespace** and give it a name, I named it **SITE_MONITOR**.

Go back to your worker > settings > Environment variables and you will see an option to bind(connect) the KV store to your worker. Click on **Edit Variables** and select the KV store you just created and give it a name that the worker can access as a env variable, I named it **KV** and my worker can access it as `env.KV`.

Your worker is now ready.

## Setting up the schedule

In your worker overview you can see a **Triggers** option, click on it and set it up to run every 5 minutes or so. I had set it to run every 1 minute, but that's too much for my use case, so the longer you set the cron, the lesser requests you will make on your free tier.

![Site Monitor Bot](/articles/the-bot-alert.jpg)

That is it, you now have a worker that will monitor your site and send you a notification on telegram if it goes down.
