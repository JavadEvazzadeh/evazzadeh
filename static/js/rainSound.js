
var myRain = document.getElementById('audioplayer');
function playRainAudio()
{
	if (myRain.paused)
	{
		myRain.play();
	}
	else
	{
		myRain.pause();
	}
}

function setVolume(volume)
{
	myRain.volume = volume;
}


window.addEventListener("resize", function resized()
{
	// remove rain effect on resize browser
	// document.querySelector("body").className += " resized";
	$('body').addClass('resized');
});



