var page = document.getElementById("PageMarker");
var Id = page.dataset['pageId'];
var link_path;
if (Id == 'Mobile') { link_path = 'PageInfo.json'; } 
else { link_path = 'lib/PageInfo.json'; }
console.log(page.dataset)
console.log(Id);
console.log(link_path);

$.getJSON(link_path, function(Json) {
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
        '--font-family-titles': '"cambria", "calibri", "baskerville", serif',
        '--font-family-sans-serif': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    });
    if (Id === 'Mobile') {
        $(':root').css({
            '--T': 1 + 'em',
            '--M': function() {
                if (screen.width <= screen.height) { width = screen.width / 8 + 'px'; } 
                else { width = screen.height / 8 + 'px'; }
                return width;
            }
        });
    } else {
        $(':root').css({
            '--T': 1.5 + 'em'
        });
    }
});
