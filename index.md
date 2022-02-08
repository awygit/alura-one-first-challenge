<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <link rel="stylesheet" href="style.css">
  <script type="text/javascript" src="script.js" defer></script>
  <title>🔎 Secret Code</title>
</head>

<body class="container">  
  <header>
    <div>
      <h1 class="titulo">Secret Code 🔎 </h1>
    </div>
  </header>

  <main class="main">
    <section class="form box">
        <h2 for="input-texto">Texto para codificar/descodificar</h2>
        <textarea class="text-input" type="text" name="input-texto" id="input-texto" placeholder="Digite a sua mensagem aqui, mas sem números ou caracteres especiais."></textarea></br>
        <button class="btn" type="submit" id="btn-cripto">Criptografar</button>
        <button class="btn" type="submit" id="btn-descripto">Descriptografar</button>
      
    </section>
  
    <section class="msg box">
      <h2 id="">Resultado</h2>
      <textarea class="text-resultado d-none" type="text" id="msg"></textarea></br>
      <button class="btn" type="submit" id="btn-copy">Copiar</button>
    </section>
  </main>  
  <footer>
    <section class = "footer">
      <div class = "container">
        <p>powered by: amayr santos</p>
      <a href="https://github.com/awygit" target="_blank" > <img class="git" src ="./img/GIT.png">
        </div>
  </footer>
</body>
</html>
