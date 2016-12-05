(function(){

eventsApp.controller('EventController',
function  EventController($scope){
	$scope.event={name:'Angular Boot Camp',
	              date:'1/1/2013',
	              time:'10.30am',
                  location:{
                   			address:'Google Headquarters',
                  			city:'Mountain View',
                  			province:'CA' 
                            },
                  imageUrl:'/img/angularjs-logo.png',
                  sessions:[
                               {
                               	name:'Directive Masterclass',
                               	creatorName:'Bob Smith',
                               	duration:'1 hr',
                               	level:'Advanced',
                               	abstract:'In this session you\'ll learn about ins and outs of Directives'
                                ,upVoteCount:3
                               },

                               {
                               	name:'scopes',
                               	creatorName:'Bob Smith',
                               	duration:'2 hr',
                               	level:'Advanced',
                               	abstract:'In this session you\'ll learn about ins and outs of scopes'
                               ,upVoteCount:2
                               },

                               {
                               	name:'Well behaved controller',
                               	creatorName:'Bob Smith',
                               	duration:'3 hr',
                               	level:'Advanced',
                               	abstract:'In this session you\'ll learn about ins and outs of controller'
                                ,upVoteCount:35
                               }
                  		   ]
	             }
    $scope.upVoteSession=function (session){
    	session.upVoteCount++;
    };
    $scope.downVoteSession=function(session){
    	session.upVoteCount--;
    }; 	        
}

);

}());