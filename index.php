<!DOCTYPE html>
<html lang="ja">
	<head>
		<title>Document</title>
		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
		<!-- script type="text/javascript" src="js/rss-feed.js"></script -->
	</head>
	<body>
		<form action="index.php" method="GET">
			<input type="radio" name="news_url" value="http://news.yahoo.co.jp/pickup/rss.xml" checked>yahoo.co.jp国内最新情報<br/>
			<input type="radio" name="news_url" value="https://news.yahoo.co.jp/pickup/computer/rss.xml">yahoo.co.jpITトピックス<br/>
			<input type="radio" name="news_url" value="https://news.yahoo.co.jp/pickup/economy/rss.xml">yahoo.co.jp経済トピックス<br/>
			<button type="button" id="button">送信</button>
		</form>
		<div id="output"></div>
		<script>
			$('#button').click(function() {
				$.ajax({
					url: 'model/index_rss.php',			// データ送り先のphpファイルのパス
					type: 'GET',						// 送信データタイプ
					dataType: 'xml',					// 受信データのファイル形式
					data: {
						// チェックしているラジオボタンのvalueを、'model/index_rss.php'にgetタイプで送信
						'news_url': $("input[name='news_url']:checked").val(),
					},

					// 'model/index_rss.php'で画面出力された文字列を、'xml'形式で変数dataに格納。
					success: function(data) {
						var i = 1;
						$(data).find('item').each(function() {
							titleTxt = $(this).find('title').text();
							pubdateTxt = $(this).find('pubDate').text();
							$("#output").append("<div class='box' id='item"+i+"'></div>");
							$("#output #item"+i).append("<h2>"+titleTxt+"</h2>");
							$("#output #item"+i).append("<p>"+pubdateTxt+"</p>");
							$("#output #item"+i).append("<hr>");
							i++;
						})	// find
					},
					error: function(){
					}
				})
			})
		</script>
	</body>
</html>