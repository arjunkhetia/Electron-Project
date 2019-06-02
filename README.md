# Electron Project - 5.0.2   ![Version][version-image]

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

A complete solution to package and build a ready for distribution Electron app for macOS, Windows and Linux with “auto update” support out of the box. For Linux Target:

```js
"build": {
  "linux": {
    "appId": "com.archangel.app",
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

For building execute this command:

```bash
$ npm run dist
```

[version-image]: https://img.shields.io/badge/Version-1.0.0-orange.svg
[linuxbuild-image]: https://img.shields.io/badge/Linux-passing-brightgreen.svg
[windowsbuild-image]: https://img.shields.io/badge/Windows-passing-brightgreen.svg
[nspstatus-image]: https://img.shields.io/badge/nsp-no_known_vulns-blue.svg
[coverage-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[dependency-image]: https://img.shields.io/badge/dependencies-up_to_date-brightgreen.svg
[devdependency-image]: https://img.shields.io/badge/devdependencies-up_to_date-yellow.svg
