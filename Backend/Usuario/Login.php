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
            $senha=($_REQUEST["senha"]);         
             
                                             



            $sql ="SELECT * FROM Usuario WHERE email='$email' AND senha='$senha'";


            pg_set_client_encoding($db, "utf8");

            $execute=pg_query($db,$sql);
           //$sql = "INSERT INTO cursosql.cliente (login, senha, email , cpf,endereco) VALUES ('$nome','$senha','$email','$cpf','$endereco')";
           

            $num=pg_num_rows($execute);
            
                      

          if($num==0){
            echo $num; 
            return ;
          }


           while ($row = pg_fetch_assoc($execute)) {
            $email=$row['email'];
            $nome=$row['nome'];
            $senha=$row['senha'];
            
              


            

            $vetor[] = array("email" => $email , "nome" => $nome , "senha" => $senha);
          }  

          

          
          echo json_encode($vetor,JSON_UNESCAPED_UNICODE);
            
            
            


         //$sql = "INSERT INTO cursosql.produto (codigo, nome, qtd , endereco) VALUES (15,'Ovo', 2, 'Rua S')";
         // $sql = "INSERT INTO cursosql.CLIENTE (codigo, nome, qtd , endereco) VALUES ($nome,$senha,$email,$cpf,$endereco)";





          //$insert=mysql_query($db , $sql);
         // $sql=pg_query($sql);
        

    


     
