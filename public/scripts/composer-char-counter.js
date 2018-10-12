$(".textarea").on("input", function() {
       // "this" becomes whatever we are calling on top
       // using val() to show the value of what we putting in the keyboard
       // using length to convert words (strings) into counts 
        var characterCounts = $(this).val().length;
        //use html to get the html content matched element
        $(".counter").html(140-characterCounts);
        // text() works because "140" === 140
        if($(".counter").text() < 0) {
            $(".counter").addClass("counterRed");
        } else {
            $(".counter").removeClass("counterRed");
        }
    });
    $(".tweet").hover(function () {
        $(this).css("border", "1px solid", "opacity", "1em");
    }, function () {
        $(this).css("border", "1px solid #bcbcbc");
    });

