# Electron Project - 5.0.7   ![Version][version-image]

![Linux Build][linuxbuild-image]
![Windows Build][windowsbuild-image]
![NSP Status][nspstatus-image]
![Test Coverage][coverage-image]
![Dependency Status][dependency-image]
![devDependencies Status][devdependency-image]

The quickest way to get start with Electron - building cross platform desktop applications with JavaScript, HTML, and CSS, just clone the project:

```bash
$ git clone https://github.com/arjunkhetia/Electron-Project.git
```

Install dependencies:

```bash
$ npm install
```

Start Eelectron app:

```bash
$ npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

**Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.**

# Electron

Electron enables you to create desktop applications with pure JavaScript by providing a runtime with rich native (operating system) APIs. This doesn't mean Electron is a JavaScript binding to graphical user interface (GUI) libraries. Instead, Electron uses web pages as its GUI, so you could also see it as a minimal Chromium browser, controlled by JavaScript.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

# Electron-Builder

A complete solution to package and build a ready for distribution Electron app for Windows, Linux and macOS with “auto update” support out of the box.

For Windows :

```js
"build": {
  "appId": "com.archangel.app",
  "productName": "Application",
  "copyright": "Copyright © 2019 Arjun Khetia",
  "win": {
    "target": [
      "nsis",
      "portable",
      "msi"
    ]
  },
  "nsis": {
    "oneClick": false,
    "allowElevation": true,
    "allowToChangeInstallationDirectory": true,
    "createDesktopShortcut": true,
    "createStartMenuShortcut": true,
    "menuCategory": true,
    "multiLanguageInstaller": true,
    "displayLanguageSelector": true,
    "installerLanguages": [
      "en_US",
      "de_DE"
    ],
    "installerIcon": "./build/installerIcon.ico",
    "uninstallerIcon": "./build/uninstallerIcon.ico"
  }
}
```

For Linux :

```js
"build": {
  "appId": "com.archangel.app",
  "productName": "Application",
  "copyright": "Copyright © 2019 Arjun Khetia",
  "linux": {
    "category": "utility",
    "icon": "./build/icons/*.png",
    "target": [
      "AppImage",
      "deb"
    ],
    "depends": [
      "gconf2", "gconf-service", "libnotify4", "libappindicator1", "libxtst6", "libnss3"
    ]
  }
}
```

For macOS :

```js
"build": {
  "appId": "com.archangel.app",
  "productName": "Application",
  "copyright": "Copyright © 2019 Arjun Khetia",
  "mac": {
    "category": "public.app-category.utilities",
    "target": "default"
  }
}
```

For building app execute this command:

```bash
$ npm run dist
```

# Electron-Updater

This module allows you to automatically update your application. To publish your updates you just need simple file hosting, it does not require a dedicated server.

```js
const { autoUpdater } = require("electron-updater")

// set auto download option for auto updater
autoUpdater.autoDownload = false;

// check for available updates
autoUpdater.checkForUpdatesAndNotify();

autoUpdater.on('checking-for-update', () => {
  // Emitted when checking if an update has started
})

autoUpdater.on('update-available', () => {
  // Emitted when there is an available update. The update is downloaded automatically if autoDownload is true.
})

autoUpdater.on('update-not-available', () => {
  // Emitted when there is no available update.
})

autoUpdater.on('download-progress', () => {
  // Emitted while downloading the updates.
})

autoUpdater.on('update-downloaded', () => {
  // Emitted when an update has been downloaded.
})

autoUpdater.on('error', () => {
  // Emitted when there is an error while updating.
})
```

[version-image]: https://img.shields.io/badge/Version-1.0.0-orange.svg
[linuxbuild-image]: https://img.shields.io/badge/Linux-passing-brightgreen.svg
[windowsbuild-image]: https://img.shields.io/badge/Windows-passing-brightgreen.svg
[nspstatus-image]: https://img.shields.io/badge/nsp-no_known_vulns-blue.svg
[coverage-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[dependency-image]: https://img.shields.io/badge/dependencies-up_to_date-brightgreen.svg
[devdependency-image]: https://img.shields.io/badge/devdependencies-up_to_date-yellow.svg
