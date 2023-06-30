
// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';


// const iframe = document.querySelector('iframe');

// const options = {
//         id: 59777392,
//         width: 640,
//         loop: true
//     };
// const player = new Player(iframe, options);


// const onPlay = function (currentTime) {
//      // data is an object containing properties specific to that event
//     const currentSec = currentTime.seconds;
   
//     localStorage.setItem("videoplayer-current-time", JSON.stringify(currentSec));
//     console.log(localStorage.getItem("videoplayer-current-time"))   
// };

// player.on("timeupdate", throttle(onPlay, 1000));

// player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time"))).then(function(seconds) {
//     // seconds = JSON.parse(localStorage.getItem("videoplayer-current-time"))
    

// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });


import Player from '@vimeo/player';
const iframe = document.querySelector('iframe')
const player = new Player(iframe)




const onPlay = function ({seconds}) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
};
player.on('timeupdate', onPlay)
const LS = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(LS).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
