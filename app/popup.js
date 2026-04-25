try{
    const checkTabs = tabs =>{
        return (tabs && tabs[0] && tabs[0].url && tabs[0].url.includes('youtube.com'));
    }
    const logError = e => { 
        console.warn('Not working outside of youtube LOL: ', e);
    }

    const onlyVideo = (tabs) => {
        if (checkTabs(tabs)){
            chrome.tabs.sendMessage(tabs[0].id, {action: "onlyVideo"})
                .catch(e => logError(e));


        }
    }
    const restoreVisibility = (tabs) => {
        if (checkTabs(tabs)){
            chrome.tabs.sendMessage(tabs[0].id, {action: "restoreVisibility"})
                .catch(e => logError(e));
        }
    }

    document
        .getElementById("hide-all")
        .addEventListener('click', () => {
            chrome.tabs.query(
                {
                    active: true,
                    currentWindow: true
                }, onlyVideo
            )
        });

    document
        .getElementById("restore-all")
        .addEventListener('click', () => {
            chrome.tabs.query(
                {
                    active: true, 
                    currentWindow: true
                }, restoreVisibility
            )
        });
}catch{
    console.warn("FocusTube Extension doesn't work here. LOL")
}
