angular.module('bnyBlogApp').factory('ArticleList',function($resource){
	return $resource('/bnyapi/articles/:articleName/:queryAction/:queryValue',
					{
						articleName: "@articleName",
						queryAction: "@queryAction",
						queryValue:  "@queryValue"
					},
					{
						searchByTag:{
							method: "GET",
							isArray: true,
							params: {
								queryAction: "tags",
							},
						}
					}
		)
});
