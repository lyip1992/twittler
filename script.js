$(document).ready(function() {
  
  // Shows All Tweets or All Tweets for Specific User
  var showTweets = function(user) {
    $('section').html('');
    var index = user === undefined ? streams.home.length - 1 : streams.users[user].length - 1;
    
    while (index >= 0) {
      var tweet = user === undefined ? streams.home[index] : streams.users[user][index];
      var $tweet = $('<div class="tweet"></div>').attr('data-user', tweet.user);
      var $user = $("<a class='username' href='#'>@</a>").append(tweet.user);
      var $timestamp = $("<div class='timestamp'></div/>").append(tweet.created_at);
      var $message = $("<div class='message'></div>").append(tweet.message);
      $tweet.append($user, $timestamp, $message);
      $tweet.appendTo('section');
      index -= 1;
    }

    // Click Event Listener to Display and Load Updated List of Tweets For Clicked Username
    $('.username').on('click', function() {
    for (var i in streams.users)
      if ($(this).closest('.tweet').data('user') == i) showTweets(i);
    });
  };

  // Initial Call To Display Tweets On Page
  showTweets();

  // Click Event Listener to Load Updated List of Tweets
  $('.logo').on('click', function() { showTweets(); });
  
});