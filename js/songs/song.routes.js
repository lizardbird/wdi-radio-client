app.config([
  '$stateProvider',
  config
])

function config ($stateProvider){
  $stateProvider
  .state('songIndex', {
    url: '/songs',
    templateUrl: 'js/songs/index.html',
    controller: 'SongIndexController',
    controllerAs: 'vm'
  })
}
