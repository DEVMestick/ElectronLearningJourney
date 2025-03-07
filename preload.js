const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  getName: () => ipcRenderer.invoke("username"),
});
