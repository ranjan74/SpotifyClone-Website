console.log("Welcome to Spotify");
//
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=document.getElementsByClassName('songItem');
let songs=[
    {songName: "Warriy - Mortals(feat. Laura Brehm) [NCS Release]", filePath: "songs/1.mp3", coverPath: "1.jpg"},
    {songName: "Cielo(Huma-Huma) youtube audio library", filePath: "songs/2.mp3", coverPath: "2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "3.jpg"},
    {songName: "Different Heaven & EHIDE - My Heart [NCS Release]-320k", filePath: "songs/4.mp3", coverPath: "4.jpg"},
    {songName: "Janji-Heroes-Tonight-Feat-Johning-NCS-Release-(kanhai80.wapkiz.com) Salam e-ishq", filePath: "songs/5.mp3", coverPath: "5.jpg"},
    {songName: "Rabba-Salam-e-eshq", filePath: "songs/2.mp3", coverPath: "6.jpg"},
    {songName: "Bhula dena-Salam-e-eshq", filePath: "songs/2.mp3", coverPath: "7.jpg"},
    {songName: "Sakhiyaan-Salam-e-eshq", filePath: "songs/2.mp3", coverPath: "8.jpg"},
    {songName: "Tumhari Kasam-Salam-e-eshq", filePath: "songs/2.mp3", coverPath: "9.jpg"}
]
songItems.forEach((element,i)=>{
    console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].filePath;
})




//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

});



//lListen to event
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;


})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

})