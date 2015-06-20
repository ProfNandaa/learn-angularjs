app.factory("books",["$firebaseArray",
	function($firebaseArray){
		var ref = new Firebase('https://fan1.firebaseio.com/books/');

		return $firebaseArray(ref);
	}
	]);