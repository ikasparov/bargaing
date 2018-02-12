<template>
<head>
	<meta charset="UTF-8">
	<title>Авторизация</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
  <div id="login-form">
    <h1>Авторизация на сайте</h1>
    <fieldset>
      <form>
          <input type="email" required placeholder="Логин">
          <input type="password" required placeholder="Пароль">
          <input type="submit" value="ВОЙТИ">
          <footer class="clearfix">
            <p><span class="info">?</span><a href="#">Забыли пароль?</a></p>
          </footer>
      </form>
    </fieldset>
  </div>
  <router-view></router-view>
  <link rel="stylesheet" href="../src/styles/login.scss">
</body>
</template>
