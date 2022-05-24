<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Find the Subject in the Sentence Level 1</title>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous"></script>
<script type="text/javascript"  src="https://cdn.jsdelivr.net/npm/sweetalert2@10.16.6/dist/sweetalert2.all.js"></script>
<script type="text/javascript" src="js/csschange.js"></script>
<link id="pgStyle" rel="stylesheet" href="css/btcstyle.css">
</head>

<body><div id="saveIndicator"></div>
	<div><div id="title">Find the Subject in the Sentence Level 1</div>
	<div id="score"></div>
	<div id="numQues"></div>
	<div id="question-box">
		<div id="myProgress">Progress
		  <div id="myBar"></div>
		</div>
		<div id="sentences"></div>
		<div id="correct_incorrect">CORRECT</div>
		<div id="explanation"></div>
		<div id="link"></div>
		<div class="btn" id="next-question">Next Question</div>
	</div>
	</div>
	<div id="footTxt">
	<div id="ipaddress"><?php
/**
 * Gets IP address.
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
	<div class="btn" id="start-over">Start Over</div>
	


</body>

	
</html>