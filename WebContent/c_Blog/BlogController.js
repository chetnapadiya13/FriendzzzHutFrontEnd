app.controller("BlogController", function($scope, $http, $location, $route) {
	console.log("In BlogController");

	$scope.blog = {
		"blogName" : '',
		"blogContent" : '',
		"createdDate" : '',
		"Blikes" : 0,
		"userName" : '',
		"status" : ''
	}

	$scope.blogData;

	$scope.insertBlog = function() {
		//alert("In insert blog");
		console.log("In insertBlog method");
		$http.post('http://localhost:8181/FriendzzzHutMiddleWare/insertBlog',
				$scope.blog).then(fetchAllBlogs(), function(response) {
					$route.reload();
					console.log('Status Text ' + response.statusText);
		});
	};

	$scope.deleteBlog = function(blogId){
		//alert("in delete blog");
		$http.delete('http://localhost:8181/FriendzzzHutMiddleWare/deleteBlog/'+blogId)
		.then(fetchAllBlogs(), function(response){
			console.log('Blog deleted '+ blogId);
			console.log('Response Status ' + response.statusText);
			$route.reload();
		});
	};
	
	
	$scope.editBlog = function(blogId){
		//alert('In editBlog()');
		$http.get('http://localhost:8181/FriendzzzHutMiddleWare/getBlog/'+blogId)
		.then(function(response){
			console.log('In edit blog');
			$scope.blog = response.data;
			console.log(response.data);
			//$location.path('/updateBlog');
		});

	};
	
	$scope.updateBlog = function(blogId){
		//alert("in update blog");
		$http.put('http://localhost:8181/FriendzzzHutMiddleWare/updateBlog/'+ blogId, $scope.blog)
		.then(fetchAllBlogs(), function(response){
			console.log('updated blog'+ blogId+ ' successfully');
			$location.path('/manageBlogs');
			//console.log(blogId +" updated successfully");
			$route.reload();
		});
		
	};
	$scope.getBlog = function(blogId){
		//alert("in update blog");
		$http.get('http://localhost:8181/FriendzzzHutMiddleWare/getBlog/'+ blogId, $scope.blog)
		.then(
				function(response) {
					console.log('Status Text ' + response.statusText);
					console.log('fetch blog by id'+ blogId+ ' successfully');
					$location.path('/ViewBlog');
					$scope.blogData = response.data;
					$route.reload();
				});
		
	};
	
	
	function fetchAllBlogs() {
		console.log('In fetchAllBlogs method');
		$http.get('http://localhost:8181/FriendzzzHutMiddleWare/getBlogs').then(
				function(response) {
					console.log('Status Text ' + response.statusText);
					$scope.blogData = response.data;
				});
	};
	
	fetchAllBlogs();
});