var app = angular.module ('testeOnline', ['ngRoute']);
app.config (['$routeProvider'], function ($routeProvider) {
  $routeProvider.when ('/ListadeMercadorias', {
    templateUrl: 'testeOnline.html',
    controller: 'negociaMercadoriaCtrl'
  });
  $routeProvider.when ("/DetalhesMercadoria/:nome", {
    templateUrl: 'detalhesMercadoria.html',
    controller: 'detalhesMercadoriaCtrl'
  });
  $routeProvider.otherwise({ redirectTo: '/ListadeMercadorias' });
});
