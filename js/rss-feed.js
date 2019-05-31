function send_ajax() {
	$.ajax({
		url: 'php/xdomain_connect.php',		// データ送り先のphpファイルのパス(htmlからの相対パス)
		type: 'GET',						// 送信データタイプ
		dataType: 'xml',					// 受信データのファイル形式
		data: {
			// チェックしているラジオボタンのvalueを、'xdomain_connect.php'にgetタイプで送信
			'url': $("input[name='url']:checked").val(),
		},
	}) /* ajax() */
	.then(
		// 読み込み成功
		function(data) {
			var i = 1;
			$('#output').empty();	// 通信に成功したら前回のxmlの出力結果をリセット
			$(data).find('item').each(function() {
				var titleTxt = $(this).find('title').text();
				var link = $(this).find('link').text();
				var date = new Date($(this).find('pubDate').text());
				$("#output").append("<div class='box' id='item" + i + "'></div>");
				$("#output #item" + i).append("<a href='" + link + "'><h2>" + titleTxt + "</h2></a>");
				$("#output #item" + i).append(
					date.getFullYear() + "年"
					+ (date.getMonth() + 1) + "月"
					+ date.getDate() + "日"
					+ date.getHours() + "時"
					+ date.getMinutes() + "分"
					+ date.getSeconds() + "秒"
				);
				$("#output #item" + i).append("<hr>");
				i++;
			}) /* $(data).find('item').each() */
		},
		// 読み込み失敗
		function() {
			alert("読み込み失敗");
		}
	); /* then() */
}
