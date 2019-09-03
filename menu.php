<?php
    $categories_file = file_get_contents('json/categorias.json');
    $categories = json_decode($categories_file);
    $filename = substr(explode('?', $_SERVER['REQUEST_URI'])[0], 2);
?>

                <div class="nav">
                    <a href="index.php">
                        <img src="img/inicio.png" />
                        <label>Inicio</label>
                    </a>
                </div>
                <div class="nav" id="second">
                    <a href="">
                        <img src="" />
                        <label></label>
                    </a>
                </div>
<?php foreach($categories->categories as $category) {
    error_log(print_r($category, true)); ?>
                <div class="nav">
                    <a href='<?php echo "$filename?category={$category->name}"; ?>'>
                        <img src="img/<?php echo $category->name; ?>.svg" />
                        <label><?php echo $category->title; ?></label>
                    </a>
                </div>
<?php } ?>