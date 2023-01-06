---
title: 🦀 Developing modules
pageTitle: Developing modules | Catherine
description: Develop external modules for the Catherine Framework.
---

Developing modules for Catherine require some changes to the core codebase, but should be accessible and simple enough to allow custom development. {% .lead %}

---

## Setting up environment

Firstly, you should have the source code available on your device from GitHub. Once you verify you're running the newest version of Catherine, you can run `cargo` to build, run, and test the codebase locally.

#### Example

```bash
cargo run
```

## Create a module

The current instructions for developing modules are a bit tedious, but doable. Here is a quick guide on developing a module:

1. Open the `catherine.rs` file under `src/`
2. There are already established modules listed here. You can use this line as a template for connecting your module:

```rust
pub(crate) static MODULE_PATH: &str = "/opt/catherine/modules/ModuleCategory/ModuleName/dist/Exec";
```

3. Now that the executable is linked, you'll need to find all calls throughout the codebase to the other executables and append your module. Here's an example:

```rust
Command::new("chmod")
        .arg("+x")
        .args([CURRENT_MODULES, MODULE_PATH])
        .output()
        .expect("Unable process module executable loop");
```

4. The last thing you'll need to do is add the module command to the `match` statement so you'll be able to test it within the codebase.

```rust
match set_module_str {
    ...
    "yourmodule" | "YourModule" | "set_module YourModule" => {
        let module_activating: ColoredString = "Activating YourModule Module...\n".green();

        println!("{}", module_activating);
        thread::sleep(time::Duration::from_secs(1));

        // Add your code here (Rust)

        // Add your MODULE_PATH here (Python, Go, etc.)
        Command::new(MODULE_PATH)
                .status()
                .expect("Failed to execute process");
    },
    ...
}
```

NOTE: Please make sure your executable (built binary) is present in the directory specified or an error will be thrown.

I know it's currently a hassle and does require some existing Rust knowledge, but I'm working on making adding modules a little bit easier.

### How to test

Testing is as simple as running `cargo run` and then testing your module in the live shell:

```bash
🦀 Catherine [v0.x.x]⚡(None) 🌑  〉 set_module
🦀 Catherine [v0.x.x]⚡(set_module) 🌑  〉 YourModule
```

If you run into any issues, feel free to reach out via Discord or Twitter DMs. The module process will most likely improve over time.

## Submitting a Pull Request

I am currently working on putting together an improved style guide and PULL_REQUEST guide. For now, you can fork the repository or branch off and open a PR with in-depth information about your changes.

Here are some general rules to follow when writing modules:

- The file name should be relevant to the function of the module (i.e javascript_deobfuscation.cpp)
- Try to test against as many operating systems as possible (minimum Linux) as Catherine will be cross-platform very soon and this will be a requirement (Windows, macOS, Linux)
- Alongside your module, please update the `modules.json` file in the modules directory to reflect your module
- Here are some comment header guidelines that should be followed where possible:

```
Project: Catherine (https://github.com/CatherineFramework)
Module by: YourName (https://github.com/YourName)
License: BSD 2-Clause
```

## Support Development

{% quick-links %}

{% quick-link title="Patreon" icon="installation" href="https://www.patreon.com/azazelm3dj3d" description="Support the development of Catherine and many other projects through Patreon!" /%}
{% quick-link title="GitHub Sponsors" icon="installation" href="https://github.com/sponsors/azazelm3dj3d" description="Support the development of Catherine and many other projects through GitHub Sponsors!" /%}

{% /quick-links %}
