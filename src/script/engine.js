const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keyCheck = document.querySelector('.keys-check input');
const keySoundsRef = [];

let mapedKeys = [];

let audio = new Audio('src/tunes/a.wav');

var playedKey;
let playedKeys = 0;

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

function Channel(audioSrc) {
	this.audioRef = audioSrc;
    this.resource = new Audio(`${audioSrc}`)
}

Channel.prototype.play = function() {
	// Try refreshing the resource altogether
	this.resource.play();
}
function Switcher(audioSrc, num) {
	this.channels = [];
	this.num = num;
	this.index = 0;

	for (var i = 0; i < num; i++) {
		this.channels.push(new Channel(audioSrc));
	}
    console.log(this.channels)
}

Switcher.prototype.play = function() {
	this.channels[this.index++].play();
	this.index = this.index < this.num ? this.index : 0;
}

function getAudioSrc(audios, key) {
    audios.forEach((audioSrc) => {
        if (audioSrc === `src/tunes/${key}.wav`) {
        
            console.log(audioSrc)

            return audioSrc
        }
    })                    
}

document.addEventListener('keydown', (e) => {
    let playKey = new Switcher(getAudioSrc(keySoundsRef, e.key), 5)

    if(mapedKeys.includes(e.key)) {

        playKey.play();
    }
    

    playedKeys = 0
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

volumeSlider.addEventListener('input', handleVolume)

const showHideKeys = () =>{
    pianoKeys.forEach(key=> key.classList.toggle("hide"))
}

keyCheck.addEventListener('click', showHideKeys)
