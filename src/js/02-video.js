
import Player from '@vimeo/player';
import { throttle } from 'throttle-debounce';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const PLAYER_CURRENT_TIME_KEY = 'videoplayer-current-time';

if (!localStorage.getItem(PLAYER_CURRENT_TIME_KEY)) localStorage.setItem(PLAYER_CURRENT_TIME_KEY, 0);

player.setCurrentTime(localStorage.getItem(PLAYER_CURRENT_TIME_KEY))

player.on('timeupdate', throttle( 1000, function(data) {
    console.log(data.seconds);
    localStorage.setItem(PLAYER_CURRENT_TIME_KEY, data.seconds);
    }));
    



// player.setVolume(0);



// 


// function setVideoTime(player, seconds) {
// 	player.setCurrentTime(seconds).then(function() {
// 		return player.play();
// 	});
// }


// setVideoTime(player, storage.readItem(PLAYER_CURRENT_TIME_KEY))

// const setNewTime = function() { 

// }

// const onPlay = function(data) {
//     player.on ("timeupdate", setNewTime)
// } 

// player.on('play', throttle(1000, onPlay));

// // function() {  localStorage.setItem(PLAYER_CURRENT_TIME_KEY, player.getCurrentTime()
