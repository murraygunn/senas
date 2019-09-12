videolist   = [];
correctlist = [];
current     = 0;
errors      = 0;
categories  = [];

window.onload = function () {
    $('#videolist h1').html(title); // set title
    
    // update second icon in footer
    $('#second img').attr('src', 'img/aprender.png');
    $('#second label').html('aprender');
    $('#second a').attr('href', 'aprender.php?category=' + carpeta);
    
    // create list with random order
    createList();
    
    // play first video
    play();
} // end onload

function createList () {
    $.each(videos, function (name, file) {
        var random = Math.floor(Math.random()*videolist.length);
        videolist.splice(random, 0, name);
    });
} // end function createList

function play () {
    var video = $('#showvideo video')[0];
    var videoFile = videos[videolist[current]];
    video.src = carpeta + '/' + videoFile;
    video.load();
    
    // show random buttons
    showFive(current);

    // disable buttons while video plays
    $('.choice').attr('disabled', true);
    setTimeout(function () {$('.choice').attr('disabled', false)}, 5000);
} // end function play

function showFive (current) {
    templist = $.extend([], videolist) // make a copy so we can modify it
    five = []; // array to keep our chosen values
    templist = remove(templist, templist[current]);
    var i;
    for(i = 0; (i < 4) && (templist.length > 0); i++) { // get 4 more values
        random = Math.floor(Math.random()*templist.length);
        five.push(templist[random]);
        templist = remove(templist, templist[random]);
    }
    // add correct answer to random position
    pos = Math.floor(Math.random()*(five.length+1));
    five.splice(pos, 0, videolist[current]);
    
    // show choices
    $('.choice').html('-'); // clear previous choices
    i = 1; // button counter
    $.each(five, function (key, choice) {
        $('#button' + i).html(choice);
        i++;
    });
} // end function showFive
    
function remove (array, value) {
    var index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    }
    return(array);
} // end function remove

function answer(choice) {
    // check if correct
    response = $(choice).html();
    if ($(choice).html() == videolist[current]) {
        // increment counter and show thumbs up
        score = Number($('#score').html()) + 1;
        $('#score').html(score);
        $('#thumb img').attr('src', 'img/ganar.png');
        var audio = new Audio('sonidos/winner.mp3');
        audio.play();
        
        // add correct answer to list
        correctlist.push(videolist[current]);
        
        // win when list is finished
        if(current+1 == videolist.length) {
            $('#winner').show();
            setTimeout(function () {
                $('#winner').hide();
                // go to next category
                $.getJSON('json/categorias.json', function(data) {
                    categories = data.categories;
    
    console.log('categories ' + categories.length);
                    $.each(categories, function (key, details) {
                        console.log(key);
                        if (details.name == carpeta) { // this category
                            key++;
                            if (key == categories.length) { // no categories left - return to category list
                                window.location.replace ('index.php');
                            } else {
                                window.location.replace ('juego.php?category=' + categories[key].name);
                            }
                        }
                    });
                });
            }, 5000);
        }
    } else {
        // show thumbs down
        $('#thumb img').attr('src', 'img/perder.png');
        var audio = new Audio('sonidos/pierde.mp3');
        audio.play();
        
        // three strikes and you're out (reload page)
        errors += 1;
        if (errors == 3) {
            setTimeout(function () {
                window.location.replace ('index.php');
            }, 5000);
        }
    }
    
    // play next video
    current++;
    play();
} // end function answer