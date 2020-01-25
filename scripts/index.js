window.onload = loaded;

async function loaded() {
    let title = document.getElementById("title");

    /*fonts = [ "times", "monospace", "impact", "tahoma" ]

    for (let i = 0; i < fonts.length; i++)
    {*/
        title.innerText = "";
        await sleep(500);
        //title.style.fontFamily = fonts[i];
        title.style.fontFamily = "monospace";
        await typeWriter(title, "Cyanic", 150);
        fadein();
        await blinkingCursor(title, 4);
    //}
}