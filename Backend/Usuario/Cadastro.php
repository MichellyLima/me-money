  
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
            