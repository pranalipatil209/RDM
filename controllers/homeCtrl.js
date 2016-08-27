angular.module('RDM').controller('homeCtrl',function($state,$scope){
    $scope.treeData = [{
        label : 'Fruits',
        children : [
            {
                label:'Mango',
                children:[
                    {
                        label:'Alphanso',
                        children:[
                            {
                                label:'mangoA',
                                children:['fafa','baba']
                            },
                            'mangoB','mangoC','mangoZ']
                    }]
            },
            {
                label:'Orange',
                noLeaf: true
            },
            {
                label:'Banana',
                children : [
                    {
                        label:'a',
                        children:['first','second']
                    },
                    {
                        label:'b',
                        noLeaf:true
                    }],
                classes:['special','red']
            }]
    }];
    $scope.my_tree_handler = function(branch){
        console.log(branch);
    }
});