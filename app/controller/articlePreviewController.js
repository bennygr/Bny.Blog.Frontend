
bnyBlogApp.controller('articlePreviewController', function($scope,
														   $sce,
														   $routeParams,
														   $location,
														   $http,
														   ArticlePreview){

	$scope.articleLoaded = false;
	$scope.url = "http://" + $location.host() + $location.path();
	$scope.isPreview = true;
	$scope.publishError = null;

	$scope.loadArticle = function(){
		var code = $routeParams.previewCode;
		//Getting the article 
		var article = ArticlePreview.get({previewCode: code},function(articles,responseHeader){       
			$scope.article = article;
			$scope.articleLoaded = true;
		});    
	};

	$scope.publishArticle = function(){
		if(confirm("Do you really want to publish this article?")){
			$scope.publishError = null;
			$http({
				method: 'GET',
				url: '/bnyapi/articles/preview/publish/' + $scope.article.metaData.previewCode
			}).then(function success(response){
				$location.path("/article/" + $scope.article.fileName);
			}, function error(response){
				$scope.publishError = response.status;
			});
		}
	}

	$scope.clearError = function(){
		$scope.publishError = null;	
	}

	$scope.toTrustedHtml = function(html){
		return $sce.trustAsHtml(html);
	}
});

