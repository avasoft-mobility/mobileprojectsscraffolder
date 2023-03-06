import { BrowserWindow, app, ipcMain, Menu, shell } from "electron";
import isDev from "electron-is-dev";
import path from "path";
// const { dialog } = require("electron");

// var fs = require("fs");

let mainWindow: BrowserWindow;
let fileGenerated = true;
function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 1080,
    minHeight: 680,
    webPreferences: {
      preload: path.join(
        __dirname,
        isDev ? "./assets/preload.js" : "./assets/preload.js"
      ),
      devTools: isDev,
    },
    frame: false,
  });

  mainWindow.maximize();
  mainWindow.loadURL(
    isDev ? "https://cookbook.avasoft.com/topics" : "https://cookbook.avasoft.com/topics"
  );

  mainWindow.on("closed", () => mainWindow.destroy());

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  ipcMain.handle("channel", async (event, msg, env_lst) => {
    var socket = require("socket.io-client")("http://localhost:4000");

    return true || false;
    
  });
}

app.on("browser-window-created", function (e, window) {
  window.setMenu(null);
});

app.whenReady().then(() => {
  createWindow();
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
