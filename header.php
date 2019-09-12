<?php
    $page = basename($_SERVER['PHP_SELF']);
    $path = $_SERVER['DOCUMENT_ROOT'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;" />
    <meta name="author" content="mag" />
    <meta name="DC.date" scheme="W3CDTF" content="2019-07-">
    <title>Biblolabs Lengua de Señas</title>
    <link rel="stylesheet" media="screen" type="text/css" href="styles/style.css" />
    <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
    <script src="js/functions.js" language="javascript" type="text/javascript"></script>
<?php foreach($scripts as $script) : ?>
    <script src="<?php echo $script; ?>" language="javascript" type="text/javascript"></script>
<?php endforeach;?>
<script language="javascript" type="text/javascript"></script>
</head>
<body>
    <div id="page">
        <header>
            <div id="header-wrap">
                <div id="head-top">
                    <div id="logo">
                        <a href="https://bibliotecasmedellin.gov.co/cms/"><img src="img/logo blanco.png" /></a>
                    </div>
                    <div id="nav">
                        <a href="index.php"><!--<img id="thrones" src="https://fontmeme.com/permalink/190902/6cd2e363e142700cb3159a8e1b2c6d14.png" />-->
                        <img id="h1" src="img/juegosenas.png" />
                        <!--<h1>Juego de Señas</h1>-->
                        <img id="h2" src="img/bibliolabs.png" />
                        <!--<h2>#Bibliolabs</h2>-->
                        </a>
                    </div>
                </div>
            </div>
        </header>
