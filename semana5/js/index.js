$('document').ready(function () {
    $('#play').click(function () {
        var audio = {};
        audio["walk"] = new Audio();
        audio["walk"].src = "http://www.rangde.org/static/bell-ring-01.mp3"
        audio["walk"].addEventListener('load', function () {
            audio["walk"].play();
        });
    });
}); 