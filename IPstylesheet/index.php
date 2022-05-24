<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Style Sheet Change Based on IP Address</title>
<script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous"></script>
<script type="text/javascript"  src="https://cdn.jsdelivr.net/npm/sweetalert2@10.16.6/dist/sweetalert2.all.js"></script>
<script type="text/javascript" src="js/csschange.js"></script>
<link id="pgStyle" rel="stylesheet" href="css/le1style.css">
</head>

<body>
	<div id="container"><div id="title">Style Sheet Change Based on IP Address</div>
		<div id="name">Michael F Langdon</div>
		<div class="education-experience" id="education">UW Whitewater for both BSE and MSE</div>
		<div class="education-experience" id="experience">Learningengineer.com for seven years.</div>
		<div class="btn" id="changeStyleSheet">Next Question</div>
	</div>
	</div>
	<div id="footTxt">
	<div id="ipaddress"><?php
/**
 * Gets IP address.
 * 

 */
function getIpAddress()
{
    $ipAddress = '';
    if (! empty($_SERVER['HTTP_CLIENT_IP'])) {
        // to get shared ISP IP address
        $ipAddress = $_SERVER['HTTP_CLIENT_IP'];
    } else if (! empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        // check for IPs passing through proxy servers
        // check if multiple IP addresses are set and take the first one
        $ipAddressList = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        foreach ($ipAddressList as $ip) {
            if (! empty($ip)) {
                // if you prefer, you can check for valid IP address here
                $ipAddress = $ip;
                break;
            }
        }
    } else if (! empty($_SERVER['HTTP_X_FORWARDED'])) {
        $ipAddress = $_SERVER['HTTP_X_FORWARDED'];
    } else if (! empty($_SERVER['HTTP_X_CLUSTER_CLIENT_IP'])) {
        $ipAddress = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
    } else if (! empty($_SERVER['HTTP_FORWARDED_FOR'])) {
        $ipAddress = $_SERVER['HTTP_FORWARDED_FOR'];
    } else if (! empty($_SERVER['HTTP_FORWARDED'])) {
        $ipAddress = $_SERVER['HTTP_FORWARDED'];
    } else if (! empty($_SERVER['REMOTE_ADDR'])) {
        $ipAddress = $_SERVER['REMOTE_ADDR'];
    }
    return $ipAddress;
}

echo getIpAddress();
?> </div>
	 Copyright 2021 Michael F Langdon All Rights Reserved.</div>
</body>

	
</html>