import { BrowserWindow, app, ipcMain, Menu, shell } from "electron";
import isDev from "electron-is-dev";
import path from "path";
import { exec } from "child_process";
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
    isDev ? "http://localhost:3000/" : "http://localhost:3000/"
  );

  mainWindow.on("closed", () => mainWindow.destroy());

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  ipcMain.handle("channel", async (event, msg, env_lst) => {
    
    
  });
}

// const command = `cd src && node server.js`;
// new Promise<void>((resolve, reject) => {
//   exec(command, (err, stdout, stderr) => {
//     if (err) {
//       reject(err);
//       return;
//     }
//     resolve();
//   });
// });

console.log("ANDRAFASDFOID",process.cwd())
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
