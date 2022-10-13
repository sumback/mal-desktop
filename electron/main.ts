import { app, BrowserWindow } from 'electron'
import { join } from 'path'

let win: BrowserWindow | null = null

async function createWindow() {
    win = new BrowserWindow()
    if (app.isPackaged) {
      win.loadFile(join(__dirname, '../index.html'))
    } else {
      win.loadURL(process.env.VITE_DEV_SERVER_URL)
    }
  }

  app.whenReady().then(createWindow)
