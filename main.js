// Processus principal

// Appelle aux API electron

const {app, BrowserWindow} = require("electron")

// Créer la fenêtre principale
function createWindow() {
    const window = new BrowserWindow( {
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    window.loadFile('src/pages/index.html');
}

// Attendre l'initialisation de l'application au démarrage
app.whenReady().then( () => {
        createWindow()
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0){
                createWindow()
            }
        })
    }
)

// Fermeture de l'application

app.on('window-all-closed',() => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})