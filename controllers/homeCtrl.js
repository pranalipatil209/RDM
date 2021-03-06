angular.module('RDM').controller('homeCtrl',function($state,$scope){
    $scope.treeData = [{
        label : 'Fruits',
        children : [
            {
                label:'Mango',
                roleId:'role1',
                children:[
                    {
                        label:'Alphanso',
                        roleId:'role1.1',
                        children:[
                            {
                                label:'mangoA',
                                roleId:'role1.1.1',
                                children:[{
                                    label:'fafa',
                                    roleId:'role1.1.1-1'
                                },{
                                    label:'baba',
                                    roleId:'role1.1.1-2'
                                }]
                            },
                            {label:'mangoB'},
                            {label:'mangoC'},
                            {label:'mangoZ'}]
                    }]
            },
            {
                label:'Orange',
                roleId:'role2'
            },
            {
                label:'Banana',
                roleId:'role3',
                children : [
                    {
                        label:'a',
                        roleId:'role3.1',
                        children:[]
                    },
                    {
                        label:'b',
                        roleId:'role3.2'
                    }]
            }]
    }];
    $scope.$watch( 'abc.currentNode', function( newObj, oldObj ) {
        if( $scope.abc && angular.isObject($scope.abc.currentNode) ) {
            console.log( 'Node Selected!!' );
            console.log( $scope.abc.currentNode );
            $scope.pp =  $scope.abc.currentNode.label;
        }
    }, false);
});