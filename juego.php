<?php
    $category = $_GET['category'];
    $scripts = array('js/juego.js', $category . '/videos.js');
    include('header.php');
?>
        <div id="main">
            <div id="main-wrap">
                <div id="showvideo">
                    <div class="video">
                            <video class="full" controls>
                                <source src="videos/rabbit.mp4" type="video/mp4">
                            </video>
                            <label id="answer">0/label>
                    </div>
                    <div id="answers">
                        <button id="button1" class="choice" onclick="answer(this)">1</button>
                        <button id="button2" class="choice" onclick="answer(this)">1</button>
                        <button id="button3" class="choice" onclick="answer(this)">1</button>
                        <button id="button4" class="choice" onclick="answer(this)">1</button>
                        <button id="button5" class="choice" onclick="answer(this)">1</button>
                    </div>
                </div>
                <div id="results">
                    <div id="score"></div>
                    <div id="thumb"><img src="" /></div>
                </div>
            </div>
        </div>
<?php include('footer.php'); ?>