import throttle from 'lodash.throttle';

import Player from '@vimeo/player';
 
const player = new Player('vimeo-player');

const VIDEOPLAYER_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

 function onTimeUpdate(data) {
    localStorage.setItem(VIDEOPLAYER_KEY, JSON.stringify(data.seconds));
};

currentTimeUpdate();

function currentTimeUpdate() {
    const storageTime = localStorage.getItem(VIDEOPLAYER_KEY);

    if (storageTime) {
        player.setCurrentTime(JSON.parse(storageTime));
    }

}
