videolist = [];
active    = '';

window.onload = function () {
    $('#videolist h1').html(title); // set title
    
    
    // choose first random video
    createList();
    active = randomVideo('');
    console.log(active + videos[active]);
    play(videos[active]);
    
    // show random buttons
    showFive(active);
    
    // update second icon in footer
    $('#second img').attr('src', 'img/giphy.webp');
    $('#second label').html('aprender');
    $('#second a').attr('href', 'aprender.php?category=' + title);
}

function createList () {
    $.each(videos, function (name, file) {
        videolist.push(name);
    });    
}

function play (videoFile) {
    var video = $('#showvideo video')[0];
    video.src = title + '/' + videoFile;
    video.load();
}

function randomVideo (current) {
    count = $(videolist).length;
    var random
    do {
        random = Math.floor(Math.random()*count);
    }
    while (videolist[random] == current);
    return (videolist[random]);
}

function showFive (active) {
    templist = videolist; // make a copy so we can modify it
    five = []; // array to keep our chosen values
    templist = remove(templist, active);
    var i;
    for(i = 0; (i < 4) && (templist.length > 0); i++) { // get 4 more values
        random = Math.floor(Math.random()*$(templist).length);
        five.push(videolist[random]);
        templist = remove(templist, videolist[random]);
    }
    // add correct answer to random position
    pos = Math.floor(Math.random()*(five.length+1));
    console.log(pos);
    five.splice(pos, 0, active);
    
    // show choices
    $('.choice').html('-'); // clear previous choices
    i = 1; // button counter
    $.each(five, function (key, choice) {
        $('#button' + i).html(choice);
        i++;
    });
}
    
function remove (array, value) {
    var index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    }
    return(array);
}

function answer(choice) {
    // check if correct
    response = $(choice).html();
    console.log(response);
    if ($(choice).html() == active) {
        // increment counter and show thumbs up
        score = Number($('#score').html()) + 1;
        $('#score').html(score);
        $('#thumb img').attr('src', 'img/up.svg');
        var audio = new Audio('sonidos/ganar.mp3');
        audio.play();
    } else {
        // show thumbs down
        $('#thumb img').attr('src', 'img/down.svg');
        var audio = new Audio('sonidos/pierde.mp3');
        audio.play();
    }
    
    // choose next random video
    createList();
    active = randomVideo(active);
    console.log(active + videos[active]);
    play(videos[active]);
    
    // show random buttons
    showFive(active);

    $('.choice').attr('disabled', true);
    setTimeout(function () {$('.choice').attr('disabled', false)}, 5000);
}