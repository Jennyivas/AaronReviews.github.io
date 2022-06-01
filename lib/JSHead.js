var link_path;
var Id = document.getElementById("PageMarker").dataset['pageId'];

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if (Id != 'Mobile') {
        window.location.replace('http://jennyivas.github.io/m');
    } else { link_path = '../lib/PageInfo.json'; }
} else {
    if (Id == 'Mobile') {
        window.location.replace('http://jennyivas.github.io');
    } else { link_path = 'lib/PageInfo.json'; }
}

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
                if (screen.width <= screen.height) { width = screen.width / 10 + 'px'; } 
                else { width = screen.height / 10 + 'px'; }
                return width;
            }
        });
    } else {
        $(':root').css({
            '--T': 1.2 + 'em',
            '--M': 35 + 'px'
        });
    }
});
