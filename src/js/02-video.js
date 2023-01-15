import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from "./storage";

const iframeEl = document.getElementById('vimeo-player');

const player = new Vimeo(iframeEl);

const CURRENT_TIME_KEY = "videoplayer-current-time";

player.on('timeupdate',  throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
	save(CURRENT_TIME_KEY, seconds);
}

player.setCurrentTime(load(CURRENT_TIME_KEY));