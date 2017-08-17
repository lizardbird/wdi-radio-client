angular.module('WDIRadioApp')
.controller('SongShowController', [
  '$stateParams',
  'Song',
  SongShowController
])

function SongShowController ($stateParams, Song) {
  this.song = Song.get({id: $stateParams.id})
}
