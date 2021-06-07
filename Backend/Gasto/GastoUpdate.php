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
           $categoria=($_REQUEST["categoria"]);
           $valor=($_REQUEST["valor"]);
           $descricao=($_REQUEST["descricao"]);

           
             
           
           if(!empty($categoria)){
                $sql ="UPDATE Categoria SET categoria='$categoria' WHERE id='$id'";
                $sql=pg_query($sql);
           }
           if(!empty($valor)){
               $sql ="UPDATE Categoria SET valor='$valor' WHERE id='$id'";
               $sql=pg_query($sql);
          }
          if(!empty($descricao)){
               $sql ="UPDATE Categoria SET descricao='$descricao' WHERE id='$id'";
               $sql=pg_query($sql);
          }
          
            



    


     
