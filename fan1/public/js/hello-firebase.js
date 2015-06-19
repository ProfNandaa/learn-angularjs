var ref = new Firebase('https://fan1.firebaseio.com/');

var bookRef = ref.child("books");

bookRef.on("value",function(snapshot){
	// console.log(snapshot.val());
	var books = snapshot.val();
	for(book in books){
		$(".books").append("<li>"+
			books[book].title + " - " +
			books[book].author + "</li>");
	}
}, function(errorObject){
	console.log("The read failed: " + errorObject.code);
});


// var ref = new Firebase('https://fan1.firebaseio.com/');

// function authHandler(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//   }
// }

// ref.authWithOAuthRedirect("github", authHandler);


// bookRef.set(null); //reset all records

$(".add-book").click(function(){
	var pubdate = $("#pubdate").val().split("/");
	pubdate = Math.round(new Date(pubdate[0],pubdate[1],pubdate[2]).getTime()/1000.0);

	var book = {
		title: $("#title").val(),
		author: $("#author").val(),
		price: $("#price").val(),
		pubdate: pubdate
	}
	bookRef.push(book);
});
