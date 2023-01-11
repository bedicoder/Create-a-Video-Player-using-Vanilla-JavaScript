/** @format */

const player = document.querySelector(".player");
const playPause = document.querySelector(".playpause");
const progressBar = document.querySelector("#progress");
const volumeSlider = document.querySelector("#volume");
const VolumeMute = document.querySelector("#volume-mute div");
const fullscreen = document.querySelector("#fullscreen");

// Working on play and pause buttons

function play() {
	player.play();
	playPause.classList.add("active");
	player.classList.add("active");
}

function pause() {
	player.pause();
	playPause.classList.remove("active");
	player.classList.remove("active");
}

function togglePlayPause() {
	if (player.paused) {
		play();
	} else {
		pause();
	}
}

playPause.addEventListener("click", togglePlayPause);
player.addEventListener("click", togglePlayPause);

// Working on progress bar

function updateProgress() {
	progressBar.value = (player.currentTime / player.duration) * 100;
}
player.addEventListener("timeupdate", updateProgress);

progressBar.addEventListener("change", function () {
	const newTime = (progressBar.value * player.duration) / 100;
	player.currentTime = newTime;
});
// working on volume slider & buttons

volumeSlider.addEventListener("change", function () {
	player.volume = volumeSlider.value;

	if (volumeSlider.value <= 0) {
		VolumeMute.classList.add("active");
	} else if (volumeSlider.value > 0) {
		VolumeMute.classList.remove("active");
	}
});

VolumeMute.addEventListener("click", function () {
	if (player.muted) {
		player.muted = false;
		VolumeMute.classList.remove("active");
	} else {
		player.muted = true;
		VolumeMute.classList.add("active");
	}
});
// Working on  fullscreen

fullscreen.addEventListener("click", function () {
	if (player.requestFullscreen) {
		player.requestFullscreen();
	} else if (player.mozRequestFullscreen) {
		player.mozRequestFullscreen();
	} else if (player.webkitRequestFullscreen) {
		player.webkitRequestFullscreen();
	}
});
