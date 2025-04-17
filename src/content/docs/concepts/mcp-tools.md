---
title: Understanding MCP Tools
description: What are MCP Tools and how do they extend AI capabilities?
---

MCP Tools (Model Context Protocol Tools) are a way for compatible AI models (currently primarily Anthropic's Claude models in Snowgoose) to interact with external functionalities configured by an administrator.

## What Problem Do They Solve?

Standard AI models have limitations:

- **Knowledge Cutoff:** They don't know about events or information created after their training data was collected.
- **Lack of Real-time Data:** They cannot access live information like current time, weather, stock prices, etc.
- **Inability to Act:** They cannot perform actions in external systems (e.g., booking a meeting, sending an email).

MCP Tools provide a standardized way for the AI model to request access to these external capabilities when needed.

## How Do They Work (Simplified)?

1.  **Admin Configuration:** An administrator sets up an MCP Tool in Snowgoose (e.g., a "Current Time Tool"). This involves defining the tool's name, description, expected inputs, and linking it to a script/server (`mcp_servers/mcp-time-js/` in the repo) that actually performs the function (like getting the current time). See [Admin: MCP Tools](../admin/mcp-tools/).
2.  **User Selection:** When using a compatible AI model (like Claude 3.7 Sonnet), the user selects the desired MCP Tool from the "More Options" popover.
3.  **AI Recognition:** The user sends a prompt that requires the tool's functionality (e.g., "What time is it?").
4.  **Tool Request:** The AI model recognizes it needs the tool and signals its intent to use it, specifying any necessary inputs (like a timezone).
5.  **Execution:** Snowgoose receives the request, runs the corresponding server script (e.g., `mcp-time-js`), and gets the result (e.g., the current time).
6.  **Result Return:** The result is sent back to the AI model.
7.  **Final Response:** The AI uses the tool's result to formulate its final answer to the user (e.g., "The current time is 10:30 AM PST.").

## Availability

- MCP Tool selection is currently available primarily when using **Anthropic Claude** models within Snowgoose.
- The specific tools available depend on what the Snowgoose administrator has configured.

By using MCP Tools, you can enable AI models to provide more accurate, up-to-date, and actionable responses for specific tasks.
