app.controller('SongIndexController', [
  'songs',
  SongIndexController
])

function SongIndexController (Song) {
  this.songs = Song.query()
}
