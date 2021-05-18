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
        
            
           
            
            $nome=($_REQUEST["nome"]);
            $descricao=($_REQUEST["descricao"]);
                      
           

            $cont=0;
             
            
                 



            $sql = "INSERT INTO Categoria (nome,descricao) VALUES ('$nome','$descricao')";

           
            
            pg_set_client_encoding($db, "utf8");

            $execute=pg_query($db,$sql);
        
           
                 


          echo json_encode($vetor,JSON_UNESCAPED_UNICODE);
            
            
            


        

    


     
