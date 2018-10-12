$(".textarea").on("input", function() {
    var characterCounts = $(this).val().length;
    $(".counter").html(140-characterCounts);
        if($(".counter").text() < 0) {
            $(".counter").addClass("counterRed");
        } else {
            $(".counter").removeClass("counterRed");
        };
    });
    $(".tweet").hover(function () {
        $(this).css("border", "1px solid", "opacity", "1em");
    }, function () {
        $(this).css("border", "1px solid #bcbcbc");
    });

