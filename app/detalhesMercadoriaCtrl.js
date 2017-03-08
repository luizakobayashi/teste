angular.module("testeOnline").controller("detalhesMercadoriaCtrl", function($scope, $route, compartilhamercadorias){
  var getProds = compartilhamercadorias.getItem();

  $scope.mercadoria = {
    nome: getProds.nome,
    codigo: getProds.codigo,
    tipo: getProds.tipo,
    quantidade: getProds.quantidade,
    preco: getProds.preco
  };

  $scope.mercadorias = function (mercadorias){
     if($route.current && $route.current.regexp){
       return $route.current.regexp.test(mercadorias);
     };
   return false;
    };
});
