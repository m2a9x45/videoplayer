/*{
  var number = 5 + 4;
  console.log(number);
}
myfunction();
my first function
*/
var videoisplaying = false; //change to true for auto play
function showcontrols()
{
  var video = document.getElementById("video");
  var video = document.getElementById("video");
  var allvideocontrols = document.getElementById("video-controls");
  //var allvideocontrols = document.getElementById("video-controls");

  $(document.getElementById("video-controls")).fadeIn('fast');
  //allvideocontrols.style.visibility='initial';
  //allvideocontrols.style.visibility='visable'
  console.log("video is playing:" + videoisplaying);
  if (videoisplaying == true) {
    controlfade();
    console.log("fading");
  }
  else {
    allvideocontrols.style.visibility='initial';
  }

}
function controlfade()
{
  setTimeout(function()
  {
    var allvideocontrols = document.getElementById("video-controls");
    console.log("inside timout");
    //allvideocontrols.style.visibility='hidden';
    //allvideocontrols.fadeOut('fast');
    $(document.getElementById("video-controls")).fadeOut('fast');
}, 6000);
}
function playpause()
{
  console.log("enter playpause");
  var playButton = document.getElementById("play-pause");
  if (video.paused == true) {
    console.log("play");
    // Play the video
    video.play();
    videoisplaying = true;
    // Update the button text to 'Pause'
    // playButton.innerHTML = "<img src='https://png.icons8.com/ios/50/000000/circled-pause-filled.png' width='44' height='36'/>";
    playButton.innerHTML = "<i class='material-icons'>pause</i>";

  } else {
    console.log("pause");
    // Pause the video
    video.pause();
    videoisplaying = false;
    // Update the button text to 'Play'
    // playButton.innerHTML = "<img src='https://png.icons8.com/ios/50/000000/circled-play-filled.png' width='44' height='36'/>";
    playButton.innerHTML = "<i class='material-icons'>play_arrow</i>";
  }
}
window.onload = function() {

  // Video
  var video = document.getElementById("video");
  var videocontianer = document.getElementById("video-source");
  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");
  var fullScreenButton = document.getElementById("full-screen");

  var likeButton = document.getElementById("like");
  var dislikeButton = document.getElementById("dislike");
  var share = document.getElementById("share");
  // Sliders
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");
  //aligning volume bar and player volume
  video.volume = volumeBar.value;

  var allvideocontrols = document.getElementById("video-controls");

    //document.getElementById("video-controls").onmouseover = hello;
  video.onmouseover = showcontrols;
  video.onmousemove = showcontrols;

document.addEventListener("keydown",function()
{
    //console.log("key pressed");
    var char = event.which;
    console.log(char);
    if (char == 32) {
      playpause();
      showcontrols();
    }
});

var like = false;
var dislike = false;

likeButton.addEventListener("click",function(){
  //will like video
  console.log("like");
});
dislikeButton.addEventListener("click",function(){
 //will dislike video
 console.log("dislike");
});


playButton.addEventListener("click", function() {
  playpause();
  showcontrols();
});
muteButton.addEventListener("click", function() {
  var currentvolume = video.volume; //as soon as mute button is click current volume is stored in currentvolume var
  console.log(currentvolume); //this is then logged to console to aid debugging

  if (video.muted == false) {
    // Mute the video
    video.muted = true;
    volumeBar.value = 0; //when video is mutted set volume bar to muted state
    // muteButton.innerHTML = "<img src='https://png.icons8.com/ios/50/000000/no-audio-filled.png' width='44' height='36'/>";
    muteButton.innerHTML = "<i class='material-icons'>volume_off</i>";
  } else {
    // Unmute the video
    video.muted = false;
    video.volume = currentvolume; // video is unmuted reset volume to orginal level
    console.log(currentvolume); // log the new volume and manuall compair to check it wored
    volumeBar.value = currentvolume; // move volume bar  to  the same level
    // muteButton.innerHTML = "<img src='https://png.icons8.com/ios/50/000000/speaker-filled.png' width='44' height='36'/>";
    muteButton.innerHTML = "<i class='material-icons'>volume_down</i>";

  }
});
fullScreenButton.addEventListener("click", function()
{
  var isfull = false;
  if (video.requestFullscreen && isfull == false)
  {
    video.requestFullscreen();
    fullScreenButton.innerHTML = "<i class='material-icons'>fullscreen_exit</i>";
    isfull = true;
    console.log(isfull);
  } else if (video.mozRequestFullScreen && isfull == false)
  {
    video.mozRequestFullScreen(); // Firefox
    fullScreenButton.innerHTML = "<i class='material-icons'>fullscreen_exit</i>";
    isfull = true;
    console.log(isfull);
  } else if (video.webkitRequestFullscreen && isfull == false)
  {
    video.webkitRequestFullscreen(); // Chrome and Safari
    fullScreenButton.innerHTML = "<i class='material-icons'>fullscreen_exit</i>";
    isfull = true;
    console.log(isfull);
  }
  if (isfull == true)
  {
    console.log("exit");
    //fullScreenButton.innerHTML = "<i class='material-icons'>fullscreen</i>";
    document.webkitExitFullscreen();
  }

});
// Event listener for the seek bar
seekBar.addEventListener("input", function()
{
	console.log("moved");
	playButton.innerHTML = "<i class='material-icons'>pause</i>";


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
  //console.log(cursecs);
  if (cursecs < 10) {
    cursecs = "0" + cursecs;
  }

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
  //console.log(volumeBar.value);
  if (volumeBar.value > 0.5) {
    //show sound up icon
    muteButton.innerHTML = "<i class='material-icons'>volume_up</i>";
  }
  else if (volumeBar.value == 0) {
    muteButton.innerHTML = "<i class='material-icons'>volume_off</i>";
  }
  else {
    //show volume down icon
    muteButton.innerHTML = "<i class='material-icons'>volume_down</i>";
  }
});
};
