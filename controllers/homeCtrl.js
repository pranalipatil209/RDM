angular.module('RDM').controller('homeCtrl',function($state,$scope){
    $scope.treeData = [{
        label : 'Fruits',
        children : [
            {
                label:'Mango',
                children:['Alphanso']
            },
            {
                label:'Orange',
                noLeaf: true
            },
            {
                label:'Banana',
                children : ['a','b'],
                classes:['special','red']
            }]
    }];
    $scope.my_tree_handler = function(branch){
        console.log(branch);
    }
});