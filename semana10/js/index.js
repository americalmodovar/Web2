/*

Nos creamos un archivo check.php a donde se redigirá la información del formulario:

<body>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
			<?php
				$email = $_POST["email"]; Convertimos en var la inf de email y password q nos llega por el metodo POST.
				$password = $_POST["password"];

Esta no seria la forma correcta de hacerlo, ya que habría que validarlo:
				if($email == "anamuzasroa@gmail.com" && $password == "123"){
			?>
				<div class="well">
					<h3>Bienvenida</h3>
					<p><a href="Formulario-09.php">Salir</a></p>
				</div>
			<?php
			}else{
			?>
				<div class="alert alert-danger">Mail o contraseña incorrectos</div> 
				<a href="login.php">Volver</a>
			<?php
			}
			?>

		</div>
	</div>
	
</body>

*/