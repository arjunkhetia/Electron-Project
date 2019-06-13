// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require("electron-updater")

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// set auto download option for auto updater
autoUpdater.autoDownload = false;

function createWindow () {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#FFFFFF',
    center: true,
    resizable: true,
    movable: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      javascript: true
    }
  })

  // Event will be emitted when the renderer process has rendered the page for the first time
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  })

  mainWindow.webContents.on('did-finish-load', () => {

    mainWindow.webContents.send('version', app.getVersion());

    // Uncomment to check for updates in production mode
    // autoUpdater.checkForUpdatesAndNotify();

    // Uncomment to check for updates in development mode
    // autoUpdater.checkForUpdates();
  })

  // and load the index.html of the app
  mainWindow.loadFile('index.html')

  // Uncomment to open the DevTools
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
