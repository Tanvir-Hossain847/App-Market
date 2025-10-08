const getInstalledApp = () => {


    const installedApp = localStorage.getItem("Installed")
    
    if(installedApp){
        const installedAppData = JSON.parse(installedApp)
        return installedAppData;
    }
    else{
        return [];
    }
}


const addInstallApp = (id) => {
    

    const installedAppData = getInstalledApp()

    if(installedAppData.includes(id)){
        alert("App Alredy Installed")
    }
    else{
        installedAppData.push(id)
        const appData = JSON.stringify(installedAppData)
        localStorage.setItem("Installed",appData)
    }

}


export {addInstallApp, getInstalledApp};