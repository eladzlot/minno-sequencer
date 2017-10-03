define(function(require){

    var angular = require('angular');

    var module = angular.module('database',[
        require('./mixer/mixerModule').name,
        require('./template/templateModule').name,
    ])
        .constant('piConsole', consoleProp(console))
        .service('Collection', require('./collection/collectionProvider'))
        .service('DatabaseRandomizer', require('./randomizer/randomizerProvider'))
        .service('databaseQuery', require('./queryProvider'))
        .service('databaseInflate', require('./inflateProvider'))
        .service('DatabaseStore', require('./store/storeProvider'))
        .service('Database', require('./databaseProvider'))
        .service('databaseSequence', require('./databaseSequenceProvider'));

    return module;

    function consoleProp(val){
        return function prop(){
            return val;
        };
    }
});
