import throttle from 'lodash.throttle';

import Player from '@vimeo/player';
 
const player = new Player('vimeo-player');

const VIDEOPLAYER_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

 function onTimeUpdate(data) {
    localStorage.setItem(VIDEOPLAYER_KEY, data.seconds);
};

player.setCurrentTime(localStorage.getItem(VIDEOPLAYER_KEY));
