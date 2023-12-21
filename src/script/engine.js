const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio('src/tunes1/a.wav')

const playTune = (key) => {
    audio.src = `src/tunes1/${key}.wav`
    if(key === 't'){
        audio.volume = 0.5
    }
    audio.play()
};

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key))
})