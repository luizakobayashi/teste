angular.module('testeOnline').service('compartilhamercadorias', function () {
        var mercadorias = '';

        return {
            getItem: function(){
                return mercadorias;
            },
            setItem: function(value){
                mercadorias = value
            }
        };
});
