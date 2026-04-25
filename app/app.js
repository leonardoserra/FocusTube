/**
 * This is just an easy function that leaves 
 * only the video tag visible in the DOM
 * Use it in the browser console. 
 */
const onlyVideo = () => {
    Array.from(
        document.querySelectorAll('*')
    ).forEach(i => i.style.visibility='hidden');

    Array.from(
        document.querySelectorAll('video')
    ).forEach(v => v.style.visibility='visible');
}

/**
 * Restore visibility of all useful elements on yt. 
 */
const restoreVisibility = () => {
    Array.from(
        document.querySelectorAll('*')
    ).forEach(i => i.style.visibility='');
}

try{
    chrome.runtime.onMessage.addListener(
        (request,sender,sendResponse) => {
            received = request.action
            actions = {
                'onlyVideo': onlyVideo,
                'restoreVisibility': restoreVisibility,
            }

            if (actions[received]) actions[received]();
        }
    );
}catch{
    console.warn("FocusTube Extension doesn't work here. LOL")
}



