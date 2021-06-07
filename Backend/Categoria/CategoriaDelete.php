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
        
            
           
            
            $nome=($_REQUEST["nome"]);
                             
            
            $sql ="DELETE FROM Categoria WHERE nome='$nome'";
             
            
            pg_set_client_encoding($db, "utf8");

            $execute=pg_query($db,$sql);

             
           
