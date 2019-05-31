<?php
	header("Content-type: application/xml; charset=UTF-8");
	$url = "";
	if (isset($_GET['url'])) {
		$url = $_GET['url'];
	}
	$xml = file_get_contents($url);
	print $xml;
?>