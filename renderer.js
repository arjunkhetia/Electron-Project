// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron');

const select = selector => document.querySelector(selector)

let version = select('#version')

ipcRenderer.on('version', (event, text) => {
  version.innerText = text
})
