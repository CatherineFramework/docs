---
title: 🦀 Getting started
pageTitle: Getting started | Catherine
description: Get a good general understanding of the Catherine Framework.
---

Getting started with the Catherine Framework. {% .lead %}

---

## Available commands

```
=== General ===
+----------------+-------------------------------------------------------------+
| Command        | Description                                                 |
+----------------+-------------------------------------------------------------+
| start_server   | Start a Rust server                                         |
| scan_ports     | Scan for open local ports                                   |
| search_exploit | Search ExploitDB for an available exploit to review         |
| set_decode     | Decode an encoded message using one of our provided methods |
| sys_info       | Print local system information to stdout                    |
+----------------+-------------------------------------------------------------+

=== Module ===
+--------------------+-------------------------------------------------------------------------------+
| Command            | Description                                                                   |
+--------------------+-------------------------------------------------------------------------------+
| set_module         | Set one of Catherine's modules                                                |
| view_modules       | Currently installed modules                                                   |
| set_windows_module | Allows you to use a module created for Windows or data generated from Windows |
+--------------------+-------------------------------------------------------------------------------+

=== Modules List ===
+-------------+-----------------------------------------------------------------------------------------------------------------------------+
| Module      | Description                                                                                                                 |
+-------------+-----------------------------------------------------------------------------------------------------------------------------+
| netscan     | Collects public network information about a host                                                                            |
| parser      | Parses web content, extracting external and internal links                                                                  |
| hex         | Exports a custom hexadecimal dump for most file types (.exe, .toml, .c, etc.)                                               |
| db_analysis | Terminal-based database exploration and monitoring                                                                          |
| exec_dump   | Multi-format parser built to extract various data points from executables, object binaries, DLLs and more (32-bit & 64-bit) |
+-------------+-----------------------------------------------------------------------------------------------------------------------------+

=== Help ===
+---------+--------------------------------------+
| Command | Description                          |
+---------+--------------------------------------+
| help    | Help menu                            |
| version | Version info for Catherine framework |
| exit    | Exit Catherine framework             |
+---------+--------------------------------------+
```

## Usage

Here are a few examples of the Catherine Framework.

This is an example flow for decoding a base64 value:

```bash
🦀 Catherine [v0.3.50] (None) 🌑  〉set_decode

Available options:
[0] base64
[1] rot13

🦀 Catherine [v0.3.50] (set_decode) 🌑  〉0
🦀 Catherine [v0.3.50] (set_decode/base64_input) 🌑  〉eW91ciB3YWlmdSBpcyB0cmFzaA==
+------------------------------+---------------------+
| Encoded Message              | Decoded Message     |
+------------------------------+---------------------+
| eW91ciB3YWlmdSBpcyB0cmFzaA== | your waifu is trash |
+------------------------------+---------------------+
```

If you run into any issues, there is a command called `help` to learn more about the framework.

## Support Development

{% quick-links %}

{% quick-link title="Patreon" icon="installation" href="https://www.patreon.com/azazelm3dj3d" description="Support the development of Catherine and many other projects through Patreon!" /%}
{% quick-link title="GitHub Sponsors" icon="installation" href="https://github.com/sponsors/azazelm3dj3d" description="Support the development of Catherine and many other projects through GitHub Sponsors!" /%}

{% /quick-links %}
