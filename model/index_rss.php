<?php
	header("Content-type: application/xml; charset=UTF-8");
	$url = "";
	if (isset($_GET['news_url'])) {
		$url = $_GET['news_url'];
	}
	$xml = file_get_contents($url);
	print $xml;
?>