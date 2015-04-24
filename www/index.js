var API_URL = "http://localhost:8080/mvprueba-api/myresource";


/*
Details about repository of GitHub API 
https://developer.github.com/v3/repos/
*/

$("#got_it").click(function(e) {
	e.preventDefault();
	getMensaje();
});




function getMensaje() {
	console.log('getMessage()');
	var url = API_URL;
	$("#list_result").text('');

	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true
	}).done(function(data, status, jqxhr) {
		var gotit = data;
		console.log(gotit);
		$("#list_result").text(gotit);
	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Not found </div>').appendTo($("#result"));
	});

}