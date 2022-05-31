var Id = document.getElementById("PageMarker").dataset['pageId'];

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

if (deviceType == 'mobile' && Id != 'Mobile') {
    window.location.replace = "../index.html";
} else if (deviceType != 'mobile' && Id == 'Mobile') {
    window.location.replace = "m/index.html";
}

var link_path = () => {
    if (Id == 'Mobile') { return '../lib/PageInfo.json'; } 
    else { return 'lib/PageInfo.json'; }
};

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
            '--T': 1.5 + 'em',
            '--M': 38 + 'px'
        });
    }
});