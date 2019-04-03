<?php

	require_once('TwitterAPIExchange.php');
	 
	// Set access tokens: https://dev.twitter.com/apps/
	$settings = array(
	    'oauth_access_token' => "1110227336190787584-w9Ktgv5isSZEgHLiE724G9iuJRVNgK",
	    'oauth_access_token_secret' => "tRqooYkhTOkCLKKPhEy60Qs6oF4Kjjc5W2aM6EYo0NFGI",
	    'consumer_key' => "eHe6k8tZ9nzqsUOGKpoxdcfZ8",
	    'consumer_secret' => "wjMDc0dDLphkKlsPiwS3rGiCaz2yGAWWuRBHt9vD13Subjrr9N"
	);
	
	$q = $_REQUEST["q"]; 
	// Choose URL and Request Method
	$url = "https://api.twitter.com/1.1/search/tweets.json";
	$getfield = '?q=#'. $q .'&lang=en&count=1&tweet_mode=extended'; // queries start with ? and are strung together with &
	$requestMethod = "GET";
	
	//Perform the request!
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();

?>

