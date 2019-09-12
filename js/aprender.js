window.onload = function () {
    $('#videolist h1').html(title); // set title
    
    // show list of videos
    $.each(videos, function (videoName, videoFile) {
        if (Object.keys(videos).length > 15) {
            $('#videolist ul').addClass('columns');
        }
        id = videoName.replace(/\s/g, '');
        $('#videolist ul').append('<li id="' + id + '" class="list" onclick="play(\'' + videoName + '\')">' + videoName + '</li>'); // add to list
        if ($('#showvideo video')[0].src == '') { // set first video by default
            play(videoName);
        }
    });
    
    // update second icon in footer
    $('#second img').attr('src', 'img/jugar.png');
    $('#second label').html('juego');
    $('#second a').attr('href', 'juego.php?category=' + carpeta);
}

function play (videoName) {
    // change video
    var video = $('#showvideo video')[0];
    video.src = carpeta + '/' + videos[videoName];
    video.load();
    video.play();
    
    // highlight selection
    id = videoName.replace(/\s/g, '');
    $('.list').removeClass('bold'); // remove existing bold lines
    $('#' + id).addClass("bold"); // make active line bold
    
    // label video
    $('#showvideo label').html(videoName);
}