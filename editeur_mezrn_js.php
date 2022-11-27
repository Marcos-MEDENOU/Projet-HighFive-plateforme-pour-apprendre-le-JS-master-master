<?php
    $language=strtolower($_POST['language']);
    $code=$_POST['code'];
    echo $code;
    $random=substr(md5(mt_rand()), 0,7);
    $filePath= "temp/" .$random . "." . $language;
    $programFile=fopen($filePath, 'w');
    fwrite($programFile, $code);
    fclose($programFile);
    ECHO 'LO      hhhhhhhhhhhhhhFE';
    if($language =='node'){
        rename($filePath, $filePath. ".js");
        $output=shell_exec("node $filePath.js filePath.js 2>&1");
        echo $output;
    }