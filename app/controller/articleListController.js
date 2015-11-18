
bnyBlogApp.controller('articleListController', function($scope,$sce,ArticleList){
	$scope.$on('$routeChangeSuccess', function(scope, next, current){
		window.DISQUSWIDGETS = undefined;
		$.getScript("//bennygr.disqus.com/count.js");
	   });

	$scope.loadArticles = function(){
		//Getting the articles 
		var articleList = ArticleList.query(function(articles,responseHeader){       
			$scope.articles = articles;                                                              
			$scope.totalItems = responseHeader('ArticleCount');                                     
			$.getScript("//bennygr.disqus.com/count.js");
		});    

		//articleList = ArticleList.searchByTag({ queryValue: "Vim" }, function(articles){
		//	$scope.articles = articles;	
		//});
	};

	$scope.toTrustedHtml = function(html){
		return $sce.trustAsHtml(html);
	}
	function bla(){
		$.getScript("//bennygr.disqus.com/count.js");
	}
});
