const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const { SEND_MAIN_PING } = require("../src/constants");
const path = require("path");

function showWarningDialog() {
  dialog.showMessageBox({
    type: 'warning',
    title: 'Invalid File Type',
    message: 'Please select a CSV file.'
  });
}

function createWindow() {
  win = new BrowserWindow({
    width: 809,
    height: 652,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: __dirname + "/preload.js",
    },
    // resizable: false // 창 크기 변경 불가능하게 설정
  });
  // win.webContents.openDevTools();
  win.loadURL("http://localhost:3000");
  ipcMain.on('validate-file', (event, arg) => {
    const isValid = arg.extname(arg).toLowerCase() === 'csv';
    if (!isValid)
      showWarningDialog();
    event.reply('validation-result', isValid);
  })
  //   if (process.env.mode === "dev") {
  //     win.loadURL("http://localhost:3000");
  //   } else {
  //     win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
  //     win.loadFile(`${path.join(__dirname, "../build/index.html")}`);
  //   }
}
app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
