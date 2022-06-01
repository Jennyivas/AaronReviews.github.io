// define functions
$("#clickable").click(function(x='.contactinfo') {
    console.log($('.contactinfo').css('margin-top'));
    if ($('.contactinfo').css('margin-top') == '-2em') {
        console.log('-2');
        $('.contactinfo').css('margin-top', '0em');
    } else {
        console.log('0');
        $('.contactinfo').css('margin-top', '-2em');
    }
});

function create_content(content, mobile) {
    if (mobile) { 
        $(`<div class='Mcontainer' align='center'></div>`).insertBefore("#placeholder");
        $.each(content, function (index, value) {
            $(".Mcontainer").last().append(value);
        });
    } else {
        $(`<div class='container' align='center'></div>`).insertBefore("#placeholder");
        $.each(content, function (index, value) {
            console.log(value);
            $(".container").last().append(value);
        });
    }
}

// Content Script
$.getJSON(link_path, function(Json) {
    review = Json.reviews;
    content = Json.content;
    counter = 0;

    if (Id === 'Mobile') {
        $.each(content, function(index, value) {
            create_content(value, true);
        });
            
        $.each($('.Mcontainer').get(), function() {
            $("<div class='boxM'></div>").insertBefore($(this));
            $('.boxM').last().append("<blockquote class='Mreview' align='center'></blockquote>");
            $('.Mreview').last().append(review[counter]['comment']);
            counter += 1;
        });
    } else {
        create_content(content[Id], false);
        $('#review').text(review[counter]['comment']);
        $('#reviewer').text(review[counter]['author']);
        counter += 1;
        setInterval(function() {
            if (counter == review.length) { counter = 0; } 
            $('#review').text(review[counter]['comment']);
            $('#reviewer').text(review[counter]['author']);
            counter += 1;
        }, 5000);         
    }
});
