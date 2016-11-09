var Twit = require('twit')

var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
});

// ecoute tous les tweet qui contiennent 'connard'
var stream = T.stream('statuses/filter', { track: 'connard' })

// a chaque tweet
stream.on('tweet', function (tweet) {
  //console.log('@'+ tweet.user.screen_name + ' a dit : ' + tweet.text);
  var user = tweet.user.screen_name;
  var reponse = {
    status : 'toi meme @'+ user + '!',
    in_reply_to_status_id: tweet.id_str
  };
  //console.log('ON REPOND:' + reponse)

  T.post('statuses/update', reponse, function(err, data, response) {
      console.log(data)
  });
})