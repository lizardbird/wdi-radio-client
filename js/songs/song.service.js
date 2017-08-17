angular.module('WDIRadioApp')
.factory('Song', [
  '$resource',
  songService
])
function songService( $resource ) {
  return $resource( 'http://localhost:3000/songs/:id', {}, {
    update: {
      method: 'PUT'
    }
  })
}
