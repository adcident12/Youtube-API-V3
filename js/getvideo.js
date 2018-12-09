// @ts-ignore
$(document).ready(function() {
  setInterval(function () {getRealData()}, 1000);
  // @ts-ignore
  $.get(
    "https://www.googleapis.com/youtube/v3/search",{
      order: 'date',
      maxResults: '4',
      part : 'snippet', 
      channelId : 'UCDpJzjhfr2xR0wp70PmfLSA',
      type : 'video',
      key: 'AIzaSyDR6gCV2reIDcoUnAyMlEwUF4m0oefgJro'
    },
    function(data) {
      // @ts-ignore
      $.each( data.items, function( i, item ) {
        //  console.log(item);
         // @ts-ignore
         $('#result').append('<div class="box-video"><iframe width="600" height="300" src="https://www.youtube.com/embed/'+item.id.videoId+'" class="box-responsive-img"></iframe></div>');
      });
  });
});

function getRealData() {
  // @ts-ignore
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",{
      part: 'snippet,statistics, contentDetails',
      id : 'UCDpJzjhfr2xR0wp70PmfLSA',
      key: 'AIzaSyDR6gCV2reIDcoUnAyMlEwUF4m0oefgJro'
    },
    function(data) {
      // @ts-ignore
      $.each( data.items, function( i, item ) {
        //  console.log(i);
         // @ts-ignore
         $('#description').html('<div class="box-detail"><div class="box-profile"><img src="'+item.snippet.thumbnails.high.url+'" class="box-profile-img"><p>'+item.snippet.localized.title+'</p></div><div class="button-subscribe">ติดตาม '+item.statistics.subscriberCount+'</div></div>');
      });
  });
}