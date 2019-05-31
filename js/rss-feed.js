function send_ajax () {
	$.ajax({
		url: 'model/index_rss.php',			// データ送り先のphpファイルのパス(相対)
		type: 'GET',						// 送信データタイプ
		dataType: 'xml',					// 受信データのファイル形式
		data: {
			// チェックしているラジオボタンのvalueを、'model/index_rss.php'にgetタイプで送信
			'url': $("input[name='url']:checked").val(),
		},

		// 'model/index_rss.php'で画面出力された文字列を、'xml'形式で変数dataに格納。
		success: function(data) {
			var i = 1;
			$('#output').empty();
			$('#url-error').remove();
			$(data).find('item').each(function() {
				titleTxt = $(this).find('title').text();
				pubdateTxt = $(this).find('pubDate').text();
				link = $(this).find('link').text();
				$("#output").append("<div class='box' id='item"+i+"'></div>");
				$("#output #item"+i).append("<a href='"+link+"'><h2>"+titleTxt+"</h2></a>");
				$("#output #item"+i).append("<p>"+pubdateTxt+"</p>");
				$("#output #item"+i).append("<hr>");
				i++;
			})	// find
		},
	})
}
