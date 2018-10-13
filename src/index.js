const electron = require('electron');

const {app,BrowserWindow} = electron;

let mainWindow;

app.on('ready',() => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.setTitle('Goodlawyer Desktop');
    mainWindow.maximize();
});