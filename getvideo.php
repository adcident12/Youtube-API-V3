<?php
//Get videos from channel by YouTube Data API
$API_key    = 'AIzaSyDR6gCV2reIDcoUnAyMlEwUF4m0oefgJro';
$channelID  = 'UCDpJzjhfr2xR0wp70PmfLSA';
$maxResults = 10;

$videoList = json_decode(file_get_contents('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId='.$channelID.'&maxResults='.$maxResults.'&key='.$API_key.''));
// print_r($videoList);
?>
<!doctype html>
<html lang="en">
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Youtube API</title>
</head>
<body>
    <div class="container">
        <?php
        foreach($videoList->items as $item){
            if(isset($item->id->videoId)){
                echo '<div class="youtube-video">
                        <iframe width="280" height="150" src="https://www.youtube.com/embed/'.$item->id->videoId.'" frameborder="0" allowfullscreen></iframe>
                        <h2>'. $item->snippet->title .'</h2>
                    </div>';
            }
        }
        ?>
    </div>
</body>
</html>