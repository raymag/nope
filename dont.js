const host = location.hostname;

const blockPage = () => {
    document.body.innerHTML = `<h1>Don't.</h1>`;
}

browser.runtime.onMessage.addListener((msg) => {
    console.log(msg);
});

browser.storage.local.get('dont')
    .then((data) => {
        const blockList = data.dont.blockList;
        if ( blockList ){
            if ( blockList.includes( host ) ){
                blockPage();
            }
        }
    });