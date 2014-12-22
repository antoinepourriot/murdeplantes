'use strict';

angular.module('murdeplantes')
  .service('murdeplantesService', function(jsonrpc) {
      var service = jsonrpc.newService('murdeplantessvc');
      this.get = service.createMethod('Get');
      this.save = service.createMethod('Save');
    })
  .config(function(jsonrpcProvider) {
    jsonrpcProvider.setBasePath('https://ferry.hd.free.fr/jeedom/core/api/jeeApi.php');
  })
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Angular Material Design',
        'url': 'https://material.angularjs.org/#/',
        'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
        'logo': 'angular-material.png'
      },
      {
        'key': 'less',
        'title': 'Less',
        'url': 'http://lesscss.org/',
        'description': 'Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.',
        'logo': 'less.png'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });

// https://github.com/ajsd/angular-jsonrpc

      $scope.coords = [];
      murdeplantesService.get({max: 10}).success(function(data) {
        $scope.coords = data.coords;
      });
      murdeplantesService.save({lat: 22, long: 33}, {headers: {'X-ACL': 'x@y.z'}}).
          success(function(data) {}).
          error(function(error) {});

      console.log('toto');

  });
