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
        
            
           
            
            $email=($_REQUEST["email"]);
                           
           
                        
                 



            $sql ="SELECT Gasto.id,Gasto.categoria,Gasto.valor,Gasto.descricao FROM DespesaG,DespesaU,Gasto WHERE DespesaU.usuario='$email' AND DespesaU.idDespesa=DespesaG.idDespesa AND DespesaG.id=Gasto.id ";

            

            pg_set_client_encoding($db, "utf8");

            $execute=pg_query($db,$sql);
           //$sql = "INSERT INTO cursosql.cliente (login, senha, email , cpf,endereco) VALUES ('$nome','$senha','$email','$cpf','$endereco')";
           
           
           while ($row = pg_fetch_assoc($execute)) {
            $id=$row['id'];
            $categoria=$row['categoria'];
            $valor=$row['valor'];
            $descricao=$row['descricao'];
            
              


            

            $vetor[] = array("id" => $id , "categoria" => $categoria , "valor" => $valor , "descricao" => $descricao);
          }  

          


          echo json_encode($vetor,JSON_UNESCAPED_UNICODE);
            
            
            


         //$sql = "INSERT INTO cursosql.produto (codigo, nome, qtd , endereco) VALUES (15,'Ovo', 2, 'Rua S')";
         // $sql = "INSERT INTO cursosql.CLIENTE (codigo, nome, qtd , endereco) VALUES ($nome,$senha,$email,$cpf,$endereco)";





          //$insert=mysql_query($db , $sql);
         // $sql=pg_query($sql);
        

    


     
