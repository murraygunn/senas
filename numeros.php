<?php
    $scripts = Array('apprender.js');
    $items   = Array(
        array('Uno', '1.mp4'),
        array('Dos', '2.mp4'),
        array('Tres', '3.mp4'),
        array('Quatro', '4.mp4')
    );
    include('header.php');
?>
        <div id="main">
            <div id="main-wrap">
                <div id="videolist">
                    <h1></h1>
                    <ul></ul>
                </div>
                <div id="showvideo">
                    <div class="video">
                            <video class="full" controls>
                                <source src="videos/rabbit.mp4" type="video/mp4">
                            </video>
                    </div>
                </div>
            </div>
        </div>
<?php include('footer.php'); ?>