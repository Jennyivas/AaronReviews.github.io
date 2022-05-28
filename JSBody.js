$.getJSON('PageInfo.json', function(Json) {
    counter = 0;
    review = Json.reviews;
    content = Json.content;
    
    $.each(content, function(index, value) {
        create_content(value);
    });
    
    $.each($('.Mcontainer').get(), function() {
        $("<div class='boxM'></div>").insertBefore($(this));
        $('.boxM').last().append("<blockquote class='review' align='center'></blockquote>");
        $('.review').last().append(review[counter]['comment']);
        counter += 1;
    });
});
