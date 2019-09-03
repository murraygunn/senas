<?php
    $category = $_GET['category'];
    $scripts = array('js/juego.js', $category . '/videos.js');
    include('header.php');
?>
        <div id="main">
            <div id="main-wrap">
                <div id="showvideo">
                    <div class="box video">
                            <video class="full" autoplay loop muted>
                                <source src="" type="video/mp4">
                            </video>
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
                    <div id="score">0</div>
                    <div id="thumb"><img src="" /></div>
                </div>
                <div class="break"></div> <!-- break -->
                <div class="nav">
                    <a href="index.php">
                        <img src="img/house-outline.svg" />
                        <label>Inicio</label>
                    </a>
                </div>
                <div class="nav" id="second">
                    <a href="">
                        <img src="" />
                        <label></label>
                    </a>
                </div>
            </div>
        </div>
<?php include('footer.php'); ?>