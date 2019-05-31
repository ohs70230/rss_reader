<?php
	// クロスドメイン制約を回避する為、一旦外部のphpでxmlを取得する
	header("Content-type: application/xml; charset=UTF-8");
	$url = "";
	if (isset($_GET['url'])) {
		$url = $_GET['url'];
	}
	$xml = file_get_contents($url);
	print $xml;
?>