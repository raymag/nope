const host = location.hostname;

const blockPage = () => {
    const body = document.body;
    body.innerHTML = `<h1 style="font-size:3rem; color:#fff">Nope.</h1>`;
    body.style.cssText = "height:100vh; width:100vw; background: #be75f5; display:flex; justify-content:center; align-items:center";
}

browser.runtime.onMessage.addListener((msg) => {
    console.log(msg);
});

browser.storage.local.get('nope')
    .then((data) => {
        const blockList = data.nope.blockList;
        const allowing = data.nope.allowing;
        if ( blockList ){
            if ( allowing === false || allowing === undefined ) {
                if ( blockList.includes( host ) ){
                    blockPage();
                }
            }
        }
    });