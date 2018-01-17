window.onload = function() {
  // Video
  var video = document.getElementById("video");
  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");
  var fullScreenButton = document.getElementById("full-screen");
  // Sliders
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");

playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();
    // Update the button text to 'Pause'
    playButton.innerHTML = "<img src='https://png.icons8.com/ios/50/000000/circled-pause-filled.png' width='44' height='36'/>";
  } else {
    // Pause the video
    video.pause();
    // Update the button text to 'Play'
    playButton.innerHTML = "<img src='https://png.icons8.com/ios/50/000000/circled-play-filled.png' width='44' height='36'/>";
  }
});
muteButton.addEventListener("click", function() {
  if (video.muted == false) {
    // Mute the video
    video.muted = true;

    // Update the button text
    muteButton.innerHTML = "<img src='https://png.icons8.com/ios/50/000000/no-audio-filled.png' width='44' height='36'/>";
  } else {
    // Unmute the video
    video.muted = false;

    // Update the button text
    muteButton.innerHTML = "<img src='https://png.icons8.com/ios/50/000000/speaker-filled.png' width='44' height='36'/>";
  }
});
fullScreenButton.addEventListener("click", function()
{
  if (video.requestFullscreen)
  {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen)
  {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen)
  {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});
// Event listener for the seek bar
seekBar.addEventListener("input", function()
{
	console.log("moved");
	playButton.innerHTML = "<img src='https://png.icons8.com/ios/50/000000/circled-pause-filled.png' width='44' height='36'/>";


  // Calculate were the playhead has been draged
  var time = video.duration * (seekBar.value / 100);

  // Update the place in the vidioe that your at
  video.currentTime = time;
  var curmins = Math.floor(video.currentTime/60);
  var cursecs = Math.floor(video.currentTime - curmins * 60);
  curtimetext.innerHTML = curmins+":"+cursecs;
});
// Update the seek bar as the video plays
video.addEventListener("timeupdate", function()
{
	//updates th playheads position constantly
  var nt = video.currentTime * (100/video.duration);
  seekBar.value = nt;

  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;

  // Update the slider value
  seekBar.value = value;

  var curmins = Math.floor(video.currentTime/60);
  var cursecs = Math.floor(video.currentTime - curmins * 60);
  var durmins = Math.floor(video.duration/60);
  var dursecs = Math.floor(video.duration - durmins * 60);

  curtimetext.innerHTML = curmins+":"+cursecs;
  durtimetext.innerHTML = durmins+":"+dursecs;
});
// Pause the video when the slider handle is being dragged
seekBar.addEventListener("mousedown", function()
{
  video.pause();
});

// Play the video when the slider handle is dropped
seekBar.addEventListener("mouseup", function()
{
  video.play();
});
// Event listener for the volume bar
volumeBar.addEventListener("input", function()
{
  // Update the video volume
  video.volume = volumeBar.value;
})};
