<?php
  $con = new mysqli('localhost', 'root', '','clavijero_bdd_tarea7');//Conexion a la base de datos

  //Consultas

  $datos = $con->query("SELECT * FROM estudiantes");//Muestra todos los datos
  //Fragmentacion Horizontal 
  $horizontal_A = $con->query("SELECT * FROM estudiantes WHERE grupo = 'A'");//Frag. Horizontal Grupo A
  $horizontal_B = $con->query("SELECT * FROM estudiantes WHERE grupo = 'B'");//Frag. Horizontal Grupo B
  $horizontal_C = $con->query("SELECT * FROM estudiantes WHERE grupo = 'C'");//Frag. Horizontal Grupo C

  //Fragmentacion Vertical por Departamentos
  $departamento1 = $con->query("SELECT Matricula, Nombre,Dir,Grupo FROM estudiantes");
  $departamento2 = $con->query("SELECT Edad, Promedio, Sexo FROM estudiantes");
?>

<!DOCTYPE html>
<html>
 <head>
   <title>BBD Tarea7 Arturo Trejo</title>
   <meta charset = "utf-8"/>
   <link href="https://fonts.googleapis.com/css?family=Handlee" rel="stylesheet">
   <style type = "text/css">

    @font-face {
      font-family: chintzy;
      src: url(chintzy.ttf) format('truetype');
      
           
    }

    @font-face {
      font-family: chintzys;
      src: url(chintzys.ttf) format('truetype');
      
           
    }
    
    body{
      background-color: #F2F2F2;/*Color de fondo de pagina*/
    }

    h1{
      font-family: sans-serif;/*Tipo de letra del encabezado*/
    }

    .center{              /*Alineacion centrada*/
       text-align: center;
       border-top: none;
       color: #0404B4;
    }

    .est{
      margin-left: 220px;
      color: #DF3A01;
    }

    #isc{
       float: left;
       font-family: 'chintzys';
       font-weight: bolder;
       font-size: 25px;
       margin-left: 40px;
       
    }

    #bdd{
       float: right;
       font-family: 'chintzy';
       font-weight: bolder;
       font-size: 25px;
       margin-right: 40px;
     } 

    #me{
       font-family: 'Handlee', cursive;
       font-size: 33px;
       color:#489CE3;
       font-weight: bold;
    }
   </style>
 </head>
   <body>
     <div>
        <h1 class = "center">INSTITUTO CONSORCIO CLAVIJERO</h1>
        <div id = "isc">Ingeniería en Sistemas Computacionales</div>
        <div id = "bdd">Bases de Datos Distribuidas</div>
     </div>
      <br><br>
        <div id = "me" align="center">Arturo Iván Trejo De León</div>
      <br><br>
     <div class = "est">Tabla Estudiantes</div>
      <table border = "1px" align = "center" ><!---Creacion de la tabla -->
        <thead>
          <th>MATRICULA</th> <!--Campos de la tabla -->
          <th>NOMBRE</th>
          <th>DIR</th>
          <th>GRUPO</th>
          <th>PROMEDIO</th>
          <th>EDAD</th>
          <th>SEXO</th>
        </thead>
          <tbody>
            <?php while ($user = mysqli_fetch_array($datos)){ ?><!--Ciclo para acceder a los datos de la tabla-->

              <tr>
                <td class="center"><?php echo $user['Matricula']; ?></td><!--impresion de todas las matriculas-->
                <td class="center"><?php echo $user['Nombre']; ?></td>   <!--impresion de todos los nombres-->
                <td class="center"><?php echo $user['Dir']; ?></td>      <!--impresion de todas las direcciones-->
                <td class="center"><?php echo $user['Grupo']; ?></td>    <!--impresion de todos los grupos-->
                <td class="center"><?php echo $user['Promedio']; ?></td> <!--impresion de todos los promedios-->
                <td class="center"><?php echo $user['Edad']; ?></td>     <!--impresion de todos las edades-->
                <td class="center"><?php echo $user['Sexo']; ?></td>     <!--impresion de todos los sexos-->
              </tr>

              <?php } ?>
          </tbody>
      </table>  
        
        <br>
      <div class = "est">Fragmentacion HORIZONTAL del grupo A</div>
      <table border="1px" align = "center" >
        <thead>
          <th>MATRICULA</th> 
          <th>NOMBRE</th>
          <th>DIR</th>
          <th>GRUPO</th>
          <th>PROMEDIO</th>
          <th>EDAD</th>
          <th>SEXO</th>
        </thead>
          <tbody>
            <?php while ($user = mysqli_fetch_array($horizontal_A)){ ?>

              <tr>
                <td class="center"><?php echo $user['Matricula']; ?></td>
                <td class="center"><?php echo $user['Nombre']; ?></td>
                <td class="center"><?php echo $user['Dir']; ?></td>
                <td class="center"><?php echo $user['Grupo']; ?></td>
                <td class="center"><?php echo $user['Promedio']; ?></td>
                <td class="center"><?php echo $user['Edad']; ?></td>
                <td class="center"><?php echo $user['Sexo']; ?></td>
              </tr>

              <?php } ?>
          </tbody>
      </table>

      <br>
      <div class = "est">Fragmentacion HORIZONTAL del grupo B</div>
      <table border="1px" align = "center" >
        <thead>
          <th>MATRICULA</th> 
          <th>NOMBRE</th>
          <th>DIR</th>
          <th>GRUPO</th>
          <th>PROMEDIO</th>
          <th>EDAD</th>
          <th>SEXO</th>
        </thead>
          <tbody>
            <?php while ($user = mysqli_fetch_array($horizontal_B)){ ?>

              <tr>
                <td class="center"><?php echo $user['Matricula']; ?></td>
                <td class="center"><?php echo $user['Nombre']; ?></td>
                <td class="center"><?php echo $user['Dir']; ?></td>
                <td class="center"><?php echo $user['Grupo']; ?></td>
                <td class="center"><?php echo $user['Promedio']; ?></td>
                <td class="center"><?php echo $user['Edad']; ?></td>
                <td class="center"><?php echo $user['Sexo']; ?></td>
              </tr>

              <?php } ?>
          </tbody>
      </table>

      <br>
      <div class = "est">Fragmentacion HORIZONTAL del grupo C</div>
      <table border="1px" align = "center" >
        <thead>
          <th>MATRICULA</th> 
          <th>NOMBRE</th>
          <th>DIR</th>
          <th>GRUPO</th>
          <th>PROMEDIO</th>
          <th>EDAD</th>
          <th>SEXO</th>
        </thead>
          <tbody>
            <?php while ($user = mysqli_fetch_array($horizontal_C)){ ?>

              <tr>
                <td class="center"><?php echo $user['Matricula']; ?></td>
                <td class="center"><?php echo $user['Nombre']; ?></td>
                <td class="center"><?php echo $user['Dir']; ?></td>
                <td class="center"><?php echo $user['Grupo']; ?></td>
                <td class="center"><?php echo $user['Promedio']; ?></td>
                <td class="center"><?php echo $user['Edad']; ?></td>
                <td class="center"><?php echo $user['Sexo']; ?></td>
              </tr>

              <?php } ?>
          </tbody>
      </table>

      <br><br>
      <div class = "est">Fragmentacion VERTICAL del DEPARTAMENTO 1</div>
      <table border="1px" align = "center" >
        <thead>
          <th>MATRICULA</th> 
          <th>NOMBRE</th>
          <th>DIR</th>
          <th>GRUPO</th>
        </thead>
          <tbody>
            <?php while ($user = mysqli_fetch_array($departamento1)){ ?>

              <tr>
                <td class="center"><?php echo $user['Matricula']; ?></td>
                <td class="center"><?php echo $user['Nombre']; ?></td>
                <td class="center"><?php echo $user['Dir']; ?></td>
                <td class="center"><?php echo $user['Grupo']; ?></td>
              </tr>

              <?php } ?>
          </tbody>
      </table>

      <br>
      <div class = "est">Fragmentacion VERTICAL del DEPARTAMENTO 2</div>
      <table border="1px" align = "center" >
        <thead>
          <th>PROMEDIO</th>
          <th>EDAD</th>
          <th>SEXO</th>
        </thead>
          <tbody>
            <?php while ($user = mysqli_fetch_array($departamento2)){ ?>

              <tr>
                <td class="center"><?php echo $user['Promedio']; ?></td>
                <td class="center"><?php echo $user['Edad']; ?></td>
                <td class="center"><?php echo $user['Sexo']; ?></td>
              </tr>

              <?php } ?>
          </tbody>
      </table>
      <br>
   </body> 
</html>




