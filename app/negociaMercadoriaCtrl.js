angular.module("testeOnline").controller("negociaMercadoriaCtrl", function ($scope, $localStorage) {
			$scope.app = "Negociação de Mercadorias";
			$scope.mercadorias = [];
			$scope.negocios = [
				{nome: "Compra"},
				{nome: "Venda"},
			];
		//Variaveis criadas para armazenamento
			var salva = [];
			var armazena = [];

		// Função para adicionar mercadorias
			$scope.adicionarMercadorias = function (mercadoria) {
				$scope.mercadorias.push(angular.copy(mercadoria));
				if($localStorage.salva){
				var negocioBD = {
       				nome: $scope.mercadoria.nome,
       				codigo: $scope.mercadoria.codigo,
       				tipo: $scope.mercadoria.tipo,
    				quantidade: $scope.mercadoria.quantidade,
    				preco: $scope.mercadoria.preco
     			};
				armazena = $localStorage.salva;
				armazena.push(negocioBD);
				$localStorage.salva = armazena;
				delete $scope.mercadoria;
				$scope.NegociaForm.$setPristine();
				$scope.mercadoriaAdicionada = true;
				} else {
				$localStorage.salva = [];
				};
			};

		// Funçao para deletar mercadorias
			$scope.apagarMercadorias = function (mercadorias) {
				$localStorage.salva = $scope.mercadorias = mercadorias.filter(function (mercadoria) {
					if (!mercadoria.selecionado) return mercadoria;
				});
			};

		// Funçao para identificar e selecionar mercadoria
			$scope.isMercadoriaSelecionada = function (mercadorias) {
				return mercadorias.some(function (mercadoria) {
					return mercadoria.selecionado;
				});
			};

		// Funçao para fechar mensagem
			$scope.closeMessageInclude = function(){
				$scope.messageInclude = false;
			};

		// Funçao para fechar mensagem
			$scope.closeMessageDelete = function(){
				$scope.messageDelete = false;
			};

});
