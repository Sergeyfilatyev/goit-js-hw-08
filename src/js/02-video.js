import VimeoPlayer from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe);
const onPlay = function (data) {
  console.log('played the video!');
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
  console.log(localStorage);
};
const throttleOnPlay = throttle(onPlay, 1000);
player.on('timeupdate', throttleOnPlay);
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    localStorage.getItem('videoplayer-current-time');
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
