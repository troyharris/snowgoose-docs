---
title: Understanding Usage & Credits
description: How Snowgoose tracks usage and applies limits based on your plan.
---

Snowgoose aims for simple, predictable pricing. Instead of complex token counting that varies wildly between AI models, we use a usage credit system, often represented as a dollar equivalent based on the underlying model costs.

## How Usage is Calculated

1.  **Model Costs:** Different AI models have different operational costs (based on input/output tokens, image generation time, etc.). Snowgoose administrators configure an estimated cost (e.g., cost per million tokens) for each model in the system.
2.  **Interaction Tracking:** When you interact with an AI model (send a prompt, receive a response, generate an image), Snowgoose estimates the cost of that interaction based on the configured model costs and the amount of data processed (e.g., number of tokens in your prompt and the AI's response).
3.  **Usage Accumulation:** This estimated cost is added to your `Period Usage`.

## Usage Limits

- **Your Plan's Limit:** Each subscription plan (including the Free Tier) has an associated `Usage Limit`. This limit represents the total amount of usage (in credits or dollar equivalent) you can consume within your current billing period. Administrators set these limits based on the plan level (See [Admin: Subscription Limits](../admin/subscription-limits/)).
- **Checking the Limit:** Before processing a potentially costly interaction (like sending a message to a powerful AI), Snowgoose checks if your current `Period Usage` is less than your plan's `Usage Limit`.
- **Exceeding the Limit:** If your usage reaches or exceeds the limit, you may be temporarily unable to use features that incur further usage costs until your next billing period starts or you upgrade your plan. You will typically see a warning message in the chat interface.

## Billing Period and Reset

- **Billing Period:** For paid subscriptions, your usage period typically aligns with your Stripe billing cycle (usually monthly).
- **Usage Reset:** At the start of each new billing period (when your subscription renews), your `Period Usage` is automatically reset to zero, allowing you to use your full allowance again.
- **Free Tier:** Free Tier users also have a usage limit, which may reset periodically (e.g., monthly), though this is determined by the application's configuration.

## Viewing Your Credits

You can see your _remaining_ credits for the current period displayed near the top-right of the chat interface, usually indicated by a `bolt` icon. This shows `Usage Limit - Period Usage`.

Understanding this system helps you manage your AI interactions effectively within your plan's allowance.
