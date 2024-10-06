<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Table des soumissions</title>
</head>
<body>
    <center><h2 class="form-title">Données soumises du formulaire</h2></center>
    <style>
    .form-title {
        text-align: center;
        color: #333;
        font-size: 24px; 
        margin-bottom: 20px; 
        font-weight: bold;
        padding: 10px; 
        background-color: #f0f8e0; 
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        display: inline-block;
    }
</style>
    <?php
    $servername="localhost"; 
    $username="root";       
    $password="";         
    $dbname="contacts";   
    $conn=new mysqli($servername, $username, $password, "contacts");
    if($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if (isset($_GET['nom']) && isset($_GET['prenom']) && isset($_GET['email']) && isset($_GET['telephone']) && isset($_GET['adresse']) && isset($_GET['code_postal'])) {
        $nom = $_GET['nom'];
        $prenom = $_GET['prenom'];
        $email = $_GET['email'];
        $telephone = $_GET['telephone'];
        $adresse = $_GET['adresse'];
        $code_postal = $_GET['code_postal'];
        $sql = "INSERT INTO contacts (nom, prenom, email, telephone, adresse, code_postal)
                VALUES ('$nom', '$prenom', '$email', '$telephone', '$adresse', '$code_postal')";  
        if ($conn->query($sql) === TRUE) {
            echo "<center><p style='color: green;'>Données soumises avec succès.</p></center>";
        } else {
            echo "Erreur: " . $sql . "<br>" . $conn->error;
        }
    }
    $result = $conn->query("SELECT * FROM contacts");

    if ($result->num_rows > 0) {
        echo "<table class='data-table'>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Adresse</th>
                    <th>Code Postal</th>
                </tr>";
    
        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>{$row['nom']}</td>
                    <td>{$row['prenom']}</td>
                    <td>{$row['email']}</td>
                    <td>{$row['telephone']}</td>
                    <td>{$row['adresse']}</td>
                    <td>{$row['code_postal']}</td>
                  </tr>";
        }
        echo "</table>";
    } else {
        echo "<p>Aucune donnée trouvée.</p>";
    }
    $conn->close();
    ?>
</body>
</html>
