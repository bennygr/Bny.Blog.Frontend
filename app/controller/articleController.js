
bnyBlogApp.controller('articleController', function($scope,$sce,$routeParams,$location,Article){
	$scope.url = "http://" + $location.host() + $location.path();
	$scope.loadArticle = function(){
		var name = $routeParams.param;
		//Getting the article 
		var article = Article.get({articleName: name},function(articles,responseHeader){       
			$scope.article = article;
		});    
	};

	$scope.toTrustedHtml = function(html){
		return $sce.trustAsHtml(html);
	}
});

