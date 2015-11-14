angular.module('bnyBlogApp').factory('Article',function($resource){
	return $resource('/bnyapi/articles/:articleName');
});

