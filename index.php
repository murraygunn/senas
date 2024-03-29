<?php
    $scripts = array('js/index.js');
    include('header.php');
    $categories_file = file_get_contents('json/categorias.json');
    $categories = json_decode($categories_file);
?>
<div id="main">
    <div id="main-wrap">
        <?php foreach($categories->categories as $category): ?>
            <div class="box video" data-id="<?php echo $category->name;?>">
                <video class="mini" id="<?php echo $category->name;?>" preload muted>
                    <source src="videos/<?php echo $category->video;?>" type="video/mp4">
                </video>
                <a href="aprender.php?category=<?php echo $category->name;?>">
                    <label><!--<img src="img/<?php echo $category->name; ?>.svg" />--><?php echo $category->title; ?></label>
                </a>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<?php include ('footer.php'); ?>