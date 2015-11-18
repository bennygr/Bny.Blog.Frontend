
angular.module('bnyBlogApp').factory('ArticlePreview',function($resource){
	return $resource('/bnyapi/articles/preview/:previewCode');
});
