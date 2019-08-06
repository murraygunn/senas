window.onload = function() {
    var currentVideo;
    $('.video').hover(
        function() {
            var idVideo = $(this).attr('data-id');
            currentVideo = document.getElementById(idVideo);
            currentVideo.play();
        }, function() {
            currentVideo.pause();
            currentVideo.currentTime = 0;
        }
    );
}