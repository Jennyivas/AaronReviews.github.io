// define functions
function create_content(content, mobile) {
    if (mobile) { container = 'Mcontainer'; css_ref = '.Mcontainer'; } 
    else { container = 'container'; css_ref = '#container' }
    $(`<div class='${container}' align='center'></div>`).insertBefore("#placeholder");
    $.each(content, function (index, value) {
        $(value).appendTo($(container).last());
    });
}

// Content Script
$.getJSON(link_path, function(Json) {
    review = Json.reviews;
    rev_len = review.length - 1;
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
            $('#review').text(review[counter]['comment']);
            $('#reviewer').text(review[counter]['author']);
            if (container >= rev_len) { counter = 0; } 
            else { counter += 1; }
        }, 5000);         
    }
});
