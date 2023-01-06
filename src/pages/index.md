---
title: "🦀 Introduction: Catherine Framework"
pageTitle: Introduction | Catherine
description: Learn how to configure and set up the Catherine Framework.
---

Setting up Catherine in your local environment is pretty simple. We currently offer multiple methods of installation to allow for easier access. {% .lead %}

Welcome to the Catherine defense framework documentation! Our goal is to offer a quick and simple blue team framework for the following:

- Gathering information
- Data collection/manipulation
- Local and remote network analysis
- Reverse engineering solutions (hexadecimal dumping, reading, writing, and many other forms of data control)
- Port scanning
- Decoding/Decrypting strings and other types of data
- Web server hosting (custom HTML rendering)
- ExploitDB querying
- Underlying terminal commands within Catherine shell

{% quick-links %}

{% quick-link title="Getting Started" icon="installation" href="/getting-started" description="Here you can gain a more in-depth explanation of the Catherine Framework and what makes it awesome." /%}

{% quick-link title="Modules" icon="installation" href="/modules" description="Interested in learning about the Catherine Framework modules? This is the place for you!" /%}

{% quick-link title="Contribute" icon="installation" href="/contribute" description="Thanks to Catherine being open-source, this allows for transparent development and contributions." /%}

{% /quick-links %}

---

## Quick start

Catherine can be easily installed by using the official Rust package manager, Cargo, but there is also an installation script for building from source. Below you'll find both ways of installing.

### Cargo

Installing via Cargo is quick and simple, but does require some extra configuration to access all available modules. First, you'll want to install the executable using Cargo:

```bash
cargo install catherine
```

{% callout title="Installing modules" %}
If you would like to install the modules, all you have to do is run the following command:

```bash
git clone https://github.com/CatherineFramework/modules.git && \
mkdir /opt/catherine && \
mv modules /opt/catherine/
```

After you've cloned the repository, Catherine will immediately recognize the modules directory and pull the resources from it.
{% /callout %}

### GitHub releases

Installing from GitHub releases includes everything you'll need to get up and running. The provided script below will install the executable and modules for Linux.

```bash
curl https://raw.githubusercontent.com/CatherineFramework/Catherine/install.sh > CatherineInstaller && \
chmod +x CatherineInstaller && \
./CatherineInstaller
```

{% callout title="Other operating systems" %}
Windows and macOS builds are not available yet.
{% /callout %}

## Support Development

{% quick-links %}

{% quick-link title="Patreon" icon="installation" href="https://www.patreon.com/azazelm3dj3d" description="Support the development of Catherine and many other projects through Patreon!" /%}
{% quick-link title="GitHub Sponsors" icon="installation" href="https://github.com/sponsors/azazelm3dj3d" description="Support the development of Catherine and many other projects through GitHub Sponsors!" /%}

{% /quick-links %}
