contactInitVals = $('.contactinfo').css('margin-top');

// define functions
$("#clickable").click(function() {
    if ($('.contactinfo').css('margin-top') == contactInitVals) {
        $('.contactinfo').css('margin-top', '0em');
    } else {
        $('.contactinfo').css('margin-top', contactInitVals);
    }
});

$("#phone").click(function() {
    window.open("tel:+447504880524");
});
$("#email").click(function() {
    window.open("mailto:jennyivas@icloud.com");
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
            $("<div class='boxM' align='center'></div>").insertBefore($(this));
            $('.boxM').last().append("<blockquote class='Mreview'></blockquote>");
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