---
title: Advanced Options
description: Understanding Thinking Levels and MCP Tools in Snowgoose.
sidebar:
  order: 7
---

The "More Options" popover (`tune` icon) provides access to advanced features that can enhance your interaction with certain AI models.

## Thinking Level (Anthropic / Google)

Some models, particularly newer ones from Anthropic and potentially Google, support a "Thinking" or "Reasoning" mode. This allows the AI to perform intermediate reasoning steps before providing the final answer, which can be useful for complex problems.

- **How it Works:** When enabled via the slider in "More Options," Snowgoose sends additional parameters (`maxTokens`, `budgetTokens`) to the AI model.
- **Slider Control:**
  - **Thinking Off:** Standard behavior.
  - **Quick Thinking:** Allows some reasoning steps, suitable for moderately complex tasks.
  - **Long Thinking:** Allows more extensive reasoning, best for very complex problems but may take longer and use more credits.
- **Visibility:** This slider only appears when a model that supports thinking/reasoning is selected.
- **Output:** If the AI uses thinking steps, they might appear in the chat window (often in a distinct block) before the final answer, showing the AI's thought process.

Use this feature when you need the AI to "show its work" or tackle multi-step problems more effectively.

## MCP Tools (Anthropic)

MCP (Model Context Protocol) Tools allow compatible AI models (currently primarily Anthropic's Claude models) to interact with external tools or data sources defined by an administrator.

- **Availability:** The **MCP Tool** dropdown appears in the "More Options" popover _only_ when an Anthropic model is selected.
- **Selection:** You can choose a specific tool (e.g., "Current Time Tool") from the dropdown or select "No Tool" (default).
- **Functionality:** When an MCP Tool is selected and you provide a relevant prompt (e.g., "What time is it in Tokyo?"), the AI can:
  1.  Recognize the need for the tool.
  2.  Request to use the tool (you might see a "Thinking" block indicating this).
  3.  Snowgoose executes the tool (e.g., fetches the time).
  4.  The tool's result is sent back to the AI.
  5.  The AI uses the result to formulate its final answer.

See [MCP Tools Concept](../concepts/mcp-tools/) for more detail on what they are. Administrators manage which MCP Tools are available. See [Admin: MCP Tools](../admin/mcp-tools/).
