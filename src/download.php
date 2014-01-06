<?php
	require('config.php');
	session_start();
	if(!isset($_SESSION['mapid'])) {
		$_SESSION['mapid'] = uniqid();
	}
	$mapid = $_SESSION['mapid'];
	$mapcss = $_POST['mapcss'];
	
	$put = file_put_contents("/tmp/$mapid.mapcss",$mapcss);
	
	if($put === false) {
		die('write error');
	}
	
	if($_POST['format'] === 'css') {
		header("Content-Type: text/css");
		header("Content-Disposition: attachment; filename=$mapid.mapcss");
		readfile("/tmp/$mapid.mapcss");
		exit();
	}
	
	else {	
		$command = "python ".PATH_TO_CONVERTER."scripts/mapcss_converter.py --mapcss /tmp/$mapid.mapcss --output /tmp/$mapid.js --icons-path styles/icons/ --output-sprite styles/osmosnimki.png --name converted";
		exec($command);
		header("Content-Type: application/javascript");
		header("Content-Disposition: attachment; filename=$mapid.js");
		readfile("/tmp/$mapid.js");	
	}
?>
