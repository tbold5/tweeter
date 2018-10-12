$(() => {
    $(".textarea").mouseover("input", function() {
        $(".tweet").hover(function () {
            $(this).css("border", "1px solid", "opacity", "1em");
        }, function () {
            $(this).css("border", "1px solid #bcbcbc");
        });
    });

    $("#compose").click(function() {
        $(".new-tweet").slideToggle("slow", function(){
            $(".textarea").focus()
        });
    });
     $(".textarea").on("input", function() {
        $("label").slideUp()
    })
    $("form").on("submit", function(event) {
        event.preventDefault();
        if ($(".counter").text() < 0) {
            $("label").slideDown(); 
            $("label").text("Tweet too long")
            return;
        } else if ($(".counter").text() === "140") {
            $("label").slideDown();
            $("label").text("Text area is empty, please hum!")
            return;
        } else {  
            $("label").slideUp();
            $.ajax({
                method: 'POST',
                url: '/tweets',
                data: $(this).serialize()
        }).then((res) => {
            $(".textarea").val('').trigger("input")
            console.log('success!',res) 
            getAllTweets();
        });
    };
});


    function getAllTweets() {
        return $.ajax({
            method: "GET",
            url: '/tweets',
            success: function(tweets) {
                renderTweets(tweets);
            }
        });
    };
       
  getAllTweets();
        
    function renderTweets(tweets) {
    let newTweets = tweets.reverse();
    $("#tweet-container").empty();
        newTweets.forEach(function(tweet) {    
            $('#tweet-container').append(createTweetElement(tweet));
        });
    };
  function createTweetElement(tweet) {
    let $image = $("<img>").addClass("avatar").attr("src", tweet.user.avatars.small);
    let $h1 = $("<h1>").text(tweet.user.name);
    let $h2 = $("<h2>").text(tweet.user.handle);
    let $header = $("<header>").append($image).append($h1).append($h2);
    let $p = $("<p>").text(tweet.content.text).addClass("input");
    let $footerp = $("<p>").text(moment(tweet.created_at).fromNow());
    let $footer = $("<footer>").append($footerp);
    let $section = $("<section>").addClass("tweet").append($header).append($p).append($footer);
    let $article = $('<article>').addClass('tweeterarticle').append($section);
    let $tweet = $article;
    return $tweet;
    }; 
 
});
