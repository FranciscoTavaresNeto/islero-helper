<style type="text/css">@import url("style.css");</style>
<a href="<?php echo $_SERVER["REQUEST_URI"];?>">Refresh</a>

<title>Islero Helper</title>

<p>
<b>Versão do PHP Desktop:</b> <?php echo $_ENV["PHPDESKTOP_VERSION"]; ?>
</p>

<p>
<b>Versão do Chrome:</b> <script>document.write(navigator.userAgent);</script>
</p>

<p>
<b>Versão do PHP:</b> <?php echo phpversion(); ?>
</p>

<hr>

<p>scripts in the www/ directory:</p>

<?php

$files = glob("./*");
foreach ($files as $file) {
	$file = basename($file);
    if ($file and $file[0] == "_") {
        continue;
    }
	printf("<a href='%s'>%s</a><br>", $file, $file);
}

?>

<hr>
