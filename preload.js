const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  getName: (name) => ipcRenderer.invoke("username", name),
});
