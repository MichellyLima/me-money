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
           $descricao=($_REQUEST["descricao"]);

          if(!empty($descricao)){
                $sql ="UPDATE Categoria SET descricao='$descricao' WHERE nome='$nome'";
                $sql=pg_query($sql);
          }
          
            



    


     
