---
title: "Monitoring a website and getting alerted on telegram using cloudflare workers"
description: "Creating a Cloudflare worker to monitor and get alerts on Telegram"
date: "Nov 22, 2023"
slug: "site-monitoring-for-free-using-cloudflare-workers-and-kv-and-telegram"
---

So I was looking at a popular product charging a lot to monitor websites and urls, it was offering a lot of features, but I just a simple way to monitor a url I had and get alerted if it goes down. 

So my inner Indie Hacker woke and I created this simple worker and connected it to telegram in case if the URL goes down and it all works for free, thanks to the generous free plan from Cloudflare.

Here's what I wanted ![Site monitoring overview](/articles/site-monitoring-flow.png)
