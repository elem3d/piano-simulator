const pianoKeys = document.querySelectorAll(".piano-keys .key");

let mapedKeys = [];

let audio = new Audio('src/tunes1/a.wav')


const playTune = (key) => {
    audio.src = `src/tunes1/${key}.wav`
    if(key === 't'){
        audio.volume = 0.5
    }
    audio.playbackRate = 2
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150);
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