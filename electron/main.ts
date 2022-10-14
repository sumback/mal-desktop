import { app, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';

let win: BrowserWindow;

async function createWindow() {
  win = new BrowserWindow({
    minWidth: 640,
    minHeight: 640,
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    frame: false,
  });

  if (app.isPackaged) {
    win.loadFile(join(__dirname, '../index.html'));
  } else {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  }

  ipcMain.on('close-window', () => {
    win.close();
  });

  ipcMain.on('fullscreen-window', () => {
    win.isMaximized() ? win.unmaximize() : win.maximize();
  });

  ipcMain.on('minimize-window', () => {
    win.minimize();
  });
}

app.whenReady().then(createWindow);
