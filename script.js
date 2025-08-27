function changeImage() {
    const img = document.getElementById("imgClickAndChange");
    const audio = document.querySelector("audio"); 
    const source = document.getElementById("jukeboxmusica");


    if (document.getElementById("imgClickAndChange").src == "https://static.wikia.nocookie.net/yokaiwatch/images/f/f0/Yokai-watch-boxart.png/revision/latest/scale-to-width-down/1000?cb=20160623131935"){
        img.src = "https://static.wikia.nocookie.net/yokaiwatch/images/5/5b/YWBlastersRCCEuropeanEnglishBoxart.png/revision/latest/scale-to-width-down/1000?cb=20180731164507";
        source.src = "ykwblasters.m4a";
    } else {
        img.src = "https://static.wikia.nocookie.net/yokaiwatch/images/f/f0/Yokai-watch-boxart.png/revision/latest/scale-to-width-down/1000?cb=20160623131935";
        source.src = "videoplayback.m4a";
    }

    audio.load();
    audio.play();
}
