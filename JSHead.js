function create_content(content) {
    $("<div class='Mcontainer' align='center'></div>").insertBefore("#placeholder");
    $.each(content, function (index, value) {
        $('.Mcontainer').last().append("<p class='text'></p>");
        $('.text').last().append(value);
    });
}

$.getJSON('PageInfo.json', function(Json) {
    var colours = Json.colour['default'];           
    $(':root').css({
        '--color0': colours[0],
        '--color1': colours[1],
        '--color2': colours[2],
        '--color3': colours[3],
        '--color4': colours[4],
        '--color5': colours[5],
        '--color6': colours[6],
        '--color7': colours[7],
        '--T': 0.9 + 'em',
        '--M': function() {
            if (screen.width <= screen.height) { width = screen.width / 8 + 'px'; } 
            else { width = screen.height / 8 + 'px'; }
            return width;
        }
    });
});
