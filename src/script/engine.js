const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keyCheck = document.querySelector('.keys-check input');

let mapedKeys = [];

let audio = new Audio('src/tunes1/a.wav')

var playedKey;

const playTune = (key) => {
    audio.src = `src/tunes1/${key}.wav`
    audio.playbackRate = 2
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150);
    playedKey = key

};  

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key);
})

document.addEventListener('keydown', (e) => {
    if(mapedKeys.includes(e.key)) {
    playTune(e.key);
    }
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
    if(playedKey === 't') {
        audio.volume = e.target.value / 2
    }
};

volumeSlider.addEventListener('input', handleVolume)

const showHideKeys = () =>{
    pianoKeys.forEach(key=> key.classList.toggle("hide"))
}

keyCheck.addEventListener('click', showHideKeys)