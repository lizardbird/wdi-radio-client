app.factory('songs', [
  '$resource',
  songService
])
function songService( $resource ) {
  return $resource( 'http://localhost:3000/songs/')
}
