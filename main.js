const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    resizable: false,
    // frame: false,
    // titleBarStyle: 'hidden',
    // trafficLightPosition: { x: 10, y: 10 },
    // transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }

	
	})
  win.setIgnoreMouseEvents(true)
	// win.loadFile('index.html')
	win.loadFile('index.html')

	win.once('ready-to-show', win.show)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
