<?php
  header('Access-Control-Allow-Origin: *');
        //http://pgadmin.saude-go.net/browser/
        $servername = "localhost";
        $database = "postgres";
        $username = "postgres";
        $password = "batata";
        // Create connection
        $db = pg_connect("host=$servername port=5432 dbname=$database user=$username password=$password" );
        //$conn = mysqli_connect($servername, $username, $password, $database);
        // Check connection

            $usuario = ($_REQUEST["usuario"]);

            $sql ="SELECT mes, gasto.idgasto, categoria, valor, descricao FROM DespesaG inner join Gasto on DespesaG.idgasto = Gasto.idgasto and Despesag.usuario = '$usuario'";

            pg_set_client_encoding($db, "utf8");

            $execute=pg_query($db,$sql);
           //$sql = "INSERT INTO cursosql.cliente (login, senha, email , cpf,endereco) VALUES ('$nome','$senha','$email','$cpf','$endereco')";
           
           while ($row = pg_fetch_assoc($execute)) {
            $mes=$row['mes'];
            $gasto=$row['idgasto'];
            $categoria=$row['categoria'];
            $valor=$row['valor'];
            $descricao=$row['descricao'];

            $vetor[] = array("mes" => $mes , "gasto" => $gasto , "categoria" => $categoria , "valor" => $valor, "descricao" => $descricao);
          }  

          echo json_encode($vetor,JSON_UNESCAPED_UNICODE);

         //$sql = "INSERT INTO cursosql.produto (codigo, nome, qtd , endereco) VALUES (15,'Ovo', 2, 'Rua S')";
         // $sql = "INSERT INTO cursosql.CLIENTE (codigo, nome, qtd , endereco) VALUES ($nome,$senha,$email,$cpf,$endereco)";

          //$insert=mysql_query($db , $sql);
         // $sql=pg_query($sql);
        

    

