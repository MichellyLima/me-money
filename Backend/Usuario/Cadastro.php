  
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
                    if (!$db) {
                        die("Connection failed: " . mysqli_connect_error());
                    }
                    
                                
                        $email=($_REQUEST["email"]);
                        $nome=($_REQUEST["nome"]);
                        $senha=$_REQUEST["senha"];
                        


                        
                        $sql = "INSERT INTO Usuario (email,nome,senha) VALUES ('$email','$nome','$senha')";

                         $sql=pg_query($sql);
            
            
            
            
                ?>
            
            
                 <!--PHP -->
            