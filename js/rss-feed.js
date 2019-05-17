var i = 1;
$.ajax({
	url: 'model/index_rss.php',
	type: 'GET',
	dataType: 'xml',
	success: function(data) {
		$(data).find('item').each(function() {
			titleTxt = $(this).find('title').text();
			pubdateTxt = $(this).find('pubDate').text();
			$("#output").append("<div class='box' id='item"+i+"'></div>");
			$("#output #item"+i).append("<h2>"+titleTxt+"</h2>");
			$("#output #item"+i).append("<p>"+pubdateTxt+"</p>");
			i++;
		})	// find
	},
	error: function(){
	}
})
