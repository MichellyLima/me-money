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
        
            
           
            
            $id= rand();
            $categoria=($_REQUEST["categoria"]);
            $valor=($_REQUEST["valor"]);
            $descricao=($_REQUEST["descricao"]);
     
            $mes=($_REQUEST["mes"]);
            $usuario = ($_REQUEST["usuario"]);


             
            
            $sql = "INSERT INTO Gasto(idgasto,categoria,valor,descricao) VALUES ('$id','$categoria','$valor','$descricao')";

           
            
            pg_set_client_encoding($db, "utf8");

            $execute=pg_query($db,$sql);
        
           

            $sql = "INSERT INTO despesag(mes,idGasto, usuario) VALUES ('$mes','$id', '$usuario')";

           
            pg_set_client_encoding($db, "utf8");

            $execute=pg_query($db,$sql);


          echo json_encode($vetor,JSON_UNESCAPED_UNICODE);
            
            
            


        

    


     
