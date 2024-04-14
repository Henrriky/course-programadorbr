const { app, BrowserWindow, ipcMain, Menu, globalShortcut } = require('electron');
const os = require('os');
const path = require('path');

const isDev = 
    process.env.NODE_ENV !== undefined && process.env.NODE_ENV === "development" 
    ? true 
    : false;

const isMac = process.platform === "darwin" ? true : false;


function createWindow() {
    const window = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: "#eee",
        show: false,
        icon: path.join(__dirname, "assets", "icons", "logo192.png"),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    // window.loadURL("https://twitter.com")
    window.loadFile("./src/index.html");
    if (isDev) {
        window.webContents.openDevTools(); //Abre o devtolls automaticamente
    }

    window.once('ready-to-show', () => {
        window.show();
        window.webContents.send('cpu_name', os.cpus()[0].model);
    })

    // const menuTemplate = [
    //     {role: 'appMenu'},
    //     {role: 'fileMenu'}
    // ];
    const menuTemplate = [
        {role: 'appMenu'},
        {role: 'fileMenu'},
        {
            label: 'Window', 
            submenu: [
                { label: 'New Window', click: () => {createWindow()} },
                { type: 'separator' },
                { 
                  label: 'Close All Windows', 
                  accelerator: 'CommandOrControl+n',
                  click: () => { BrowserWindow.getAllWindows().forEach(window => window.close())}
                }
            ],
        }
    ];
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

}

//Quando a aplicação estiver pronta
app.whenReady().then(() => {
    createWindow();
    // console.log(os.cpus());
    // console.log(os.cpus()[0]);
    // console.log(os.cpus()[0].model);
})

//Quando a aplicação tiver todas as janelas fechadas
app.on('window-all-closed', () => {
    console.log("Todas as janelas fechadas");
    if(!isMac) {
        app.quit();
    }
})

//Quando a aplicação abrir a janela novamente
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }   
})

ipcMain.on('open_new_window', () => {
    createWindow();
})