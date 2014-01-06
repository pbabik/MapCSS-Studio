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
	
	$command = "python ".PATH_TO_CONVERTER."scripts/mapcss_converter.py --mapcss /tmp/$mapid.mapcss --output /tmp/$mapid.js --icons-path styles/icons/ --output-sprite styles/osmosnimki.png --name converted";
	exec($command);
	readfile("/tmp/$mapid.js");
?>
