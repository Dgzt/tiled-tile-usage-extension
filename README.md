# Tile usage extension for [Tiled Map Editor](https://www.mapeditor.org/)

TODO

## Installation

1. Clone this repository: `git clone git@github.com:Dgzt/tiled-tile-usage-extension.git`
2. Move into the repository: `cd tiled-tile-usage-extension`
3. Install dependencies: `npm install`
4. Compile extension: `npm run compile`
5. Copy compiled extension into the extensions directory of Tiled Map Editor.

* The extensions directory depends on your operating system. You can open the extensions directory from Tiled by going to **Edit
  → Preferences**, then switching to the **Plugins** tab and clicking on **Open** in the **Extensions** section.
* Or you can refer to the list below:

Platform | Location
------------ | -------------
Windows | `C:/Users/<USER>/AppData/Local/Tiled/extensions/`
MacOS | `~/Library/Preferences/Tiled/extensions/`
Linux | `~/.config/tiled/extensions/`

Tiled should automatically detect and load the plugin without having to restart the editor.

Once the extension is saved, the new menu entries should be available in the **Map** menu.
