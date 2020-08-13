const host = location.hostname;

const blockPage = () => {
    const body = document.body;
    body.innerHTML = `<h1 style="font-size:3rem; color:#fff">Nope.</h1>`;
    body.style.cssText = "height:100vh; width:100vw; background: #be75f5; display:flex; justify-content:center; align-items:center";
}

chrome.runtime.onMessage.addListener((msg) => {
    console.log(msg);
});

chrome.storage.local.get('nope', (data) => {
    if (data) {
        if (data.nope) {
            if (data.nope.blockList) {
                const blockList = data.nope.blockList;
                if ( data.nope.allowing === false 
                    || data.nope.allowing === undefined ) {
                        if ( blockList.includes( host ) ){
                            blockPage();
                        }
                }
            }
        }
    }
});