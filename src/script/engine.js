const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keyCheck = document.querySelector('.keys-check input');
const keySoundsRef = [];

let mapedKeys = [];

let audio = new Audio('src/tunes/a.wav');

var playedKey;

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key);
    keySoundsRef.push(`src/tunes/${key.dataset.key}.wav`)

})

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.playbackRate = 2
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150);
    playedKey = key
};  


document.addEventListener('keydown', (e) => {
    playTune(e.key)
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

volumeSlider.addEventListener('input', handleVolume)

const showHideKeys = () =>{
    pianoKeys.forEach(key=> key.classList.toggle("hide"))
}

keyCheck.addEventListener('click', showHideKeys)
