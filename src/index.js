const electron = require('electron');
const isDev = require('electron-is-dev');

const {app,BrowserWindow} = electron;

let mainWindow;

app.on('ready',() => {
    mainWindow = new BrowserWindow({icon: __dirname + '/build/resources/Logo.ico'});  // tom plz fix
    if (isDev) {
        mainWindow.loadURL(`file://${__dirname}/index.html`);
    }
    else {
        mainWindow.loadURL(`file://${__dirname}/production.html`);
    }
    mainWindow.webContents.openDevTools();
    mainWindow.setTitle('Goodlawyer Desktop');
    mainWindow.maximize();
});