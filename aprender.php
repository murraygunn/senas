<?php
    $category = $_GET['category'];
    $scripts  = Array('js/aprender.js', $category . '/videos.js');
    include('header.php');
?>
        <div id="main">
            <div id="main-wrap">
                <div id="videolist">
                    <h1></h1>
                    <ul></ul>
                </div>
                <div id="showvideo">
                    <div class="box video">
                            <video class="full" controls muted loop>
                                <source src="" type="video/mp4">
                            </video>
                    </div>
                    <label></label>
                </div>
                <div class="break"></div> <!-- break -->
                <?php include 'menu.php'; ?>
            </div>
        </div>
<?php include('footer.php'); ?>