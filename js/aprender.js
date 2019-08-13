window.onload = function () {
    $('#videolist h1').html(title); // set title
    
    // show list of videos
    $.each(videos, function (videoName, videoFile) {
        $('#videolist ul').append('<li id="' + videoName + '" class="list" onclick="play(\'' + videoName + '\')">' + videoName + '</li>'); // add to list
        if ($('#showvideo video')[0].src == '') { // set first video by default
            var video = $('#showvideo video')[0];
            video.src = carpeta + '/' + videoFile;
            video.load();            
        }
    });
    
    // update second icon in footer
    $('#second img').attr('src', 'img/console.svg');
    $('#second label').html('juego');
    $('#second a').attr('href', 'juego.php?category=' + title);
}

function play (videoName) {
    // change video
    var video = $('#showvideo video')[0];
    video.src = carpeta + '/' + videos[videoName];
    video.load();
    video.play();
    
    // highlight selection
    $('.list').removeClass('bold'); // remove existing bold lines
    $('#' + videoName).addClass("bold"); // make active line bold
}