const electron = require('electron');

const {app,BrowserWindow} = electron;

let mainWindow;

app.on('ready',() => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL("http://www.goodlawyer.ca");
    // mainWindow.loadURL(`file://${__dirname}/index.html`);   ummm
    mainWindow.setTitle('Goodlawyer Desktop');
    mainWindow.maximize();
});