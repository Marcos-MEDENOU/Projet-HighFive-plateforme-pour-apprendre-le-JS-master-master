<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Espace de codage</title>
    <link rel="stylesheet" href="editeur_learn_js.css">
</head>

<body>
    <div class="header">Learn JS Editor Code</div>
    <div class="control-panel">
        Select Langage:
        &nbsp;&nbsp;
        <select name="" id="languages" class="languages" onchange="changeLange()">
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="php">php</option>
            <option value="python">python</option>
            <option value="node">node JS</option>
        </select>
    </div>
    <div class="editor" id="editor"></div>
    <div class="button-container">
        <button class="btn" onclick="executeCode()">Run</button>
    </div>
    <div class="output"></div>

    <script src="editeur_learn_js.js"></script>

</body>

</html>