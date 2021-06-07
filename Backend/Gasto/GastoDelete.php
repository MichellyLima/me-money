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
        
            
           
            
            $id=($_REQUEST["id"]);
                             
             
            $sql ="DELETE FROM Gasto WHERE idgasto='$id'";                     
            pg_set_client_encoding($db, "utf8");
            $execute=pg_query($db,$sql);

            $sql ="DELETE FROM despesag WHERE idgasto='$id'";                     
            pg_set_client_encoding($db, "utf8");
            $execute=pg_query($db,$sql);


            
