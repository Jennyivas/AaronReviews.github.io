// define functions
function create_content(content, mobile) {
    if (mobile) { container = 'Mcontainer'; css_ref = '.Mcontainer'; } 
    else { container = 'container'; css_ref = '#container' }
    $(`<div class='${container}' align='center'></div>`).insertBefore("#placeholder");
    $.each(content, function (index, value) {
        $(css_ref).last().append(value);
    });
}

// Content Script
$.getJSON(linkpath, function(Json) {
    review = Json.reviews;
    content = Json.content;

    if (Id === 'Mobile') {
        counter = 0;
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
        const interval = setInterval(function() {
            $('#review').text(review[counter]['comment']);
            $('#reviewer').text(review[counter]['author']);
            if (container < (review.length - 1)) { counter += 1; } 
            else { counter = 0; }
          }, 5000);         
    }
});
