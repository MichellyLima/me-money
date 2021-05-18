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
           $nome=($_REQUEST["nome"]);
           $descricao=($_REQUEST["descricao"]);

           
             
           if(!empty($nome)){
            $sql ="UPDATE Categoria SET nome='$nome' WHERE id='$id'";
            $sql=pg_query($sql);
           }
           if(!empty($descricao)){
                $sql ="UPDATE Categoria SET descricao='$descricao' WHERE id='$id'";
                $sql=pg_query($sql);
           }
          
            



    


     
