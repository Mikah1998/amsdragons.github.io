const jukeboxData = [
  { img: "ykw1boxart.webp", audio: "videoplayback.m4a" },
  { img: "psychicspectersboxart.webp", audio: "ykw2.mp3" },
  { img: "whiteboxart.webp", audio: "ykwblasters.m4a" },
  { img: "ykw3boxart.webp", audio: "ykw3.m4a" },
  { img: "4++boxart.webp", audio: "ykw4.m4a" },
  { img: "yschoolboxart.webp", audio: "yschool.m4a "}
];

let musicaAtual = 0;

function changeImage() {
    const img = document.getElementById("imgClickAndChange");
    const audio = document.querySelector("audio"); 
    const source = document.getElementById("jukeboxmusica");


    musicaAtual++;
      if (musicaAtual >= jukeboxData.length) {
      musicaAtual = 0; 
    }

  img.src = jukeboxData[musicaAtual].img;
  source.src = jukeboxData[musicaAtual].audio;


    audio.load();
    audio.play();
}




