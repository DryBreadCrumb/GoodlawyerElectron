const electron = require('electron');

const {app,BrowserWindow} = electron;

let mainWindow;

app.on('ready',() => {
    mainWindow = new BrowserWindow({icon: __dirname + '/build/resources/Logo.ico'});  // tom plz fix
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools();
    mainWindow.setTitle('Goodlawyer Desktop');
    mainWindow.maximize();
});