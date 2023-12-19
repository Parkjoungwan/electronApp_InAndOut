const { app, BrowserWindow, ipcMain } = require("electron");
const { SEND_MAIN_PING } = require("../src/constants");
const path = require("path");

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: __dirname + "/preload.js",
    },
  });
  win.webContents.openDevTools();
  win.loadURL("http://localhost:3000");
  //   if (process.env.mode === "dev") {
  //     win.loadURL("http://localhost:3000");
  //   } else {
  //     win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
  //     win.loadFile(`${path.join(__dirname, "../build/index.html")}`);
  //   }
}
ipcMain.on(SEND_MAIN_PING, (event, arg) => {
  console.log("Main received a ping!!!");
  win.webContents.send("test", "test");
});
app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
