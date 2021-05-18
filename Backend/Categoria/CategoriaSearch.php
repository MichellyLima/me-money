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
                      
                 


            $sql ="SELECT nome,descricao FROM Categoria WHERE nome='$nome'";

            $execute=pg_query($db,$sql);
           
           
           while ($row = pg_fetch_assoc($execute)) {
            $nome=$nome['nome'];
            $descricao=$row['descricao'];
                        
              

            

            $vetor[] = array("nome" => $nome , "descricao" => $descricao);
          }  

          


          echo json_encode($vetor,JSON_UNESCAPED_UNICODE);
            
            
            


         //$sql = "INSERT INTO cursosql.produto (codigo, nome, qtd , endereco) VALUES (15,'Ovo', 2, 'Rua S')";
         // $sql = "INSERT INTO cursosql.CLIENTE (codigo, nome, qtd , endereco) VALUES ($nome,$senha,$email,$cpf,$endereco)";





          //$insert=mysql_query($db , $sql);
         // $sql=pg_query($sql);
        

    


     
