window.onload = function () {
    $('#videolist h1').html(title); // set title
    
    // show list of videos
    $.each(videos, function (videoName, videoFile) {
        $('#videolist ul').append('<li onclick="play(\'' + videoFile + '\')">' + videoName + '</li>');
    });
    
    // update second icon in footer
    $('#second img').attr('src', 'console.svg');
    $('#second label').html('juego');
    $('#second a').attr('href', 'juego.php?category=' + title);
}

function play (videoFile) {
    var video = $('#showvideo video')[0];
    video.src = title + '/' + videoFile;
    video.load();
    video.play();
}