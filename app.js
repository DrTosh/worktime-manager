const {
    app,
    BrowserWindow
} = require('electron');

const url = require("url");
const path = require("path");

const fs = require('fs');

let appWindow;

function initWindow() {
    appWindow = new BrowserWindow({
        show: false,
        frame: false,
        icon: path.join(__dirname, '/src/assets/img/icon.png'),
        webPreferences: {
            nodeIntegration: true
        }
    });

    appWindow.maximize();

    // Electron Build Path
    appWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, '/dist/index.html'),
            protocol: "file:",
            slashes: true
        })
    );

    appWindow.show();
    // Initialize the DevTools.
    // appWindow.webContents.openDevTools()

    appWindow.on('closed', function() {
        appWindow = null
    });
}

app.on('ready', initWindow);

// Close when all windows are closed.
app.on('window-all-closed', function() {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (win === null) {
        initWindow();
    }
});

exports.writeFile = (obj) => {
    if (!fs.existsSync(path.join(app.getPath('userData')))) {
        fs.mkdirSync(app.getPath('userData'), { recursive: true });
    }

    fs.writeFileSync(path.join(app.getPath('userData'), 'worktime.json'), obj, 'utf8');
}

exports.readFile = () => {
    if (!fs.existsSync(path.join(app.getPath('userData'), 'worktime.json'))) {
        return null;
    } else {
        return fs.readFileSync(path.join(app.getPath('userData'), 'worktime.json'), 'utf8');
    }
}