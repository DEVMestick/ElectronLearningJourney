const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false,
    maximizable: false,
    // alwaysOnTop: true,
    // minWidth: 800,
    // minHeight: 600,
    // maxWidth: 1600,
    // maxHeight: 900,

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.setMenu(null);
  win.loadFile("index.html");
}

app.whenReady().then(() => {
  ipcMain.handle("username", (event, name) => {
    console.log("Username: ", name);
    return "Welcome " + name;
  });

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
