---
title: Output Formats
description: Controlling the structure of AI responses (Markdown, JSON, HTML, etc.).
sidebar:
  order: 4
---

By default, Snowgoose AI models usually respond in Markdown format, which is great for general text, lists, and simple code blocks. However, sometimes you need the output in a specific structure for integration with other tools or workflows.

You can request specific output formats using the **Output Format** option.

## Selecting an Output Format

1.  Click the **More Options** button (`tune` icon) at the top of the chat interface.
2.  In the popover that appears, find the **Output Format** dropdown.
3.  Select your desired format (e.g., JSON, HTML, CSV, Plain Text).

The selected format sends an additional instruction to the AI, asking it to structure its response accordingly.

## Available Formats (Examples)

- **Markdown (Default):** Standard formatted text, lists, code blocks.
- **Plain Text:** Unformatted text, useful for simple copying or specific integrations.
- **JSON:** Structures the response as a JSON object, ideal for developers needing structured data.
- **HTML:** Formats the response using HTML tags, potentially with basic styling (like Tailwind classes if requested by the specific format prompt).
- **CSV:** Attempts to format the response as Comma Separated Values, useful for spreadsheet data.

**Note:** The AI's ability to perfectly adhere to the requested format depends on the complexity of the request and the model's capabilities. Simpler requests yield more reliable formatting.

## Managing Output Formats

Administrators can create and manage the available Output Formats and their underlying prompts. See [Admin: Output Formats](../admin/output-formats/).
