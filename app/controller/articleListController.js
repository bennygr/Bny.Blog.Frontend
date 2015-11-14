
bnyBlogApp.controller('articleListController', function($scope,$sce,ArticleList){
	$scope.loadArticles = function(){
		//Getting the articles 
		var articleList = ArticleList.query(function(articles,responseHeader){       
			$scope.articles = articles;                                                              
			$scope.totalItems = responseHeader('ArticleCount');                                     
		});    

		//articleList = ArticleList.searchByTag({ queryValue: "Vim" }, function(articles){
		//	$scope.articles = articles;	
		//});
	};

	$scope.toTrustedHtml = function(html){
		return $sce.trustAsHtml(html);
	}
});
