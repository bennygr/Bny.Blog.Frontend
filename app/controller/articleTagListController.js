
bnyBlogApp.controller('articleTagListController', function($scope,$sce,$routeParams,ArticleList){
	$scope.loadArticles = function(){
		var tag = $routeParams.param;
		var articleList = ArticleList.searchByTag({ queryValue: tag }, function(articles){
			$scope.articles = articles;	
		});
	};

	$scope.toTrustedHtml = function(html){
		return $sce.trustAsHtml(html);
	}
});
