(async () => {
    var urlParams = new URLSearchParams(window.location.search);
    let data = await fetch(`levels/${urlParams.get('level')}.json`).then(res => res.json())
    let blocksJS = await fetch(data.blockset + ".js").then(res => res.text())
    data.blocks = eval("(function () { module = {}; " + blocksJS + "; return module.exports; })")()
    window.map_data = data
    Init()
})()

