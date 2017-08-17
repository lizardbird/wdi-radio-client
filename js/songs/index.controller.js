angular.module('WDIRadioApp')
.controller('SongIndexController', [
  'Song',
  SongIndexController
])

function SongIndexController (Song) {
  this.songs = Song.query()
}
