import  { app, BrowserWindow } from 'electron';
import path from 'path';

// Enable live reload for Electron
import electronReload from 'electron-reload';

electronReload(__dirname, {
    electron: require.resolve('electron')
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Optional
      contextIsolation: true, // Optional
    },
  }); 

  win.loadURL('http://localhost:3000'); // Load the Vite dev server
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});