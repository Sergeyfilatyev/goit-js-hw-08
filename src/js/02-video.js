import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe);
const KEY_STORAGE = 'videoplayer-current-time';
const onPlay = function (data) {
  localStorage.setItem(KEY_STORAGE, `${data.seconds}`);
  console.log('played the video:', localStorage.getItem(KEY_STORAGE));
};

player.on('timeupdate', throttle(onPlay, 1000));
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
player
  .setCurrentTime(localStorage.getItem(KEY_STORAGE))
  .then(function (seconds) {
    localStorage.getItem(KEY_STORAGE);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
