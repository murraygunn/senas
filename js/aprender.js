window.onload = function () {
    $('#videolist h1').html(title); // set title
    
    // show list of videos
    $.each(videos, function (videoName, videoFile) {
        if (Object.keys(videos).length > 15) {
            $('#videolist ul').addClass('columns');
        }
        $('#videolist ul').append('<li id="' + videoName + '" class="list" onclick="play(\'' + videoName + '\')">' + videoName + '</li>'); // add to list
        if ($('#showvideo video')[0].src == '') { // set first video by default
            play(videoName);
/*            var video = $('#showvideo video')[0];
            video.src = carpeta + '/' + videoFile;
            video.load();    */         
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
    $('.list').removeClass('bold'); // remove existing bold lines
    $('#' + videoName).addClass("bold"); // make active line bold
    
    // label video
    $('#showvideo label').html(videoName);
}