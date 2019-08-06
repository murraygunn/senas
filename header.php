<?php $page = basename($_SERVER['PHP_SELF']);
$path = $_SERVER['DOCUMENT_ROOT']; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>

<head>
        <meta http-equiv="Content-Type" content="text/html;" />
        <meta name="author" content="mag" />
        <meta name="DC.date" scheme="W3CDTF" content="2019-07-">
        <title>Biblolabs Lengua de Seña</title>
        <link rel="stylesheet" media="screen" type="text/css" href="/bibliolabs/style.css" />
        <script type="text/javascript" src="/bibliolabs/jquery-3.3.1.min.js"></script>
        <script src="/bibliolabs/functions.js" language="javascript" type="text/javascript"></script>
<?php
    foreach($scripts as $script) {
?>
        <script src="/bibliolabs/<?php echo $script; ?>" language="javascript" type="text/javascript"></script>
<?php
    }
?>
        <script language="javascript" type="text/javascript">
<?php
//    foreach($items as $item) {
        
//    }
?>
        </script>
</head>
<body>
    <div id="page">
        <header>
            <div id="header-wrap">
                <div id="head-top">
                    <div id="logo">
                        <img src="/bibliolabs/logo.png" />
                    </div>
                    <div id="nav">
                    </div>
                </div>
            </div>
        </header>
