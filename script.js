function changeImage() {
    const img = document.getElementById("imgClickAndChange");
    const audio = document.querySelector("audio"); 
    const source = document.getElementById("jukeboxmusica");


    if (img.src.includes("ykw1boxart.webp")){
        img.src = "whiteboxart.webp";
        source.src = "ykwblasters.m4a";
    } else {
        img.src = "ykw1boxart.webp";
        source.src = "videoplayback.m4a";
    }

    audio.load();
    audio.play();
}



