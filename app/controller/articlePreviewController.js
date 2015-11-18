
bnyBlogApp.controller('articlePreviewController', function($scope,$sce,$routeParams,$location,ArticlePreview){
	$scope.articleLoaded = false;
	$scope.url = "http://" + $location.host() + $location.path();
	$scope.isPreview = true;
	$scope.loadArticle = function(){
		var code = $routeParams.previewCode;
		//Getting the article 
		var article = ArticlePreview.get({previewCode: code},function(articles,responseHeader){       
			$scope.article = article;
			$scope.articleLoaded = true;
		});    
	};

	$scope.toTrustedHtml = function(html){
		return $sce.trustAsHtml(html);
	}
});

