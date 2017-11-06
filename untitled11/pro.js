var pr=angular.module('pro',[
    "ngSanitize"

 ]);

pr.controller('myCtrl',["$scope","$sce",function($scope,$sce){
    $scope.trustHtml="start here...";
    $scope.text0=[];
    $scope.newString="start here...";
    $scope.refresh=function() {
        var text = $scope.newString.replace(/\n/g, '<br/>\n');
        text = text.split(/\n/g);
        for(var i=0;i<text.length;i++){
            if(text[i].charAt(0)=="#"){
                var j=1;
                for(;j<6;j++){
                    if(text[i].charAt(j)!="#"){break;}
                }
                text[i]="<h"+j+">"+text[i].substr(j)+"</h"+j+">";

            }
        }
        $scope.text0=text;
        $scope.trustHtml="";
        for (var i=0;i<$scope.text0.length;i++){
            $scope.trustHtml+=$sce.trustAsHtml($scope.text0[i]);
        }
    }


}]);