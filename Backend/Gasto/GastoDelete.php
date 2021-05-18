<?php
    
    

        
        //http://pgadmin.saude-go.net/browser/
        $servername = "postgres-desenv.saude-go.net";
        $database = "desenvolvimento";
        $username = "gabrielmendonca";
        $password = "rathalos2";
        // Create connection
        $db = pg_connect("host=$servername port=5432 dbname=$database user=$username password=$password" );
        //$conn = mysqli_connect($servername, $username, $password, $database);
        // Check connection
        
            
           
            
            $id=($_REQUEST["id"]);
                             
            
             
             
            $sql ="DELETE FROM Gasto WHERE id='$id'";                     
            pg_set_client_encoding($db, "utf8");
            $execute=pg_query($db,$sql);


            
