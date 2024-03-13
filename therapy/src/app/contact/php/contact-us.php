<?php
// Récupération des données du formulaire
$nom = $_POST['username'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$sujet = $_POST['Subject'];
$message = $_POST['message'];
// Connexion à la base de données
$conx=mysqli_connect('localhost','root','','thearapymakeupstore') or die ('Erreur connexion');
// Vérification de la connexion
if (!$conx) {
    die('Erreur de connexion à la base de données : ' . mysqli_connect_error());
}
// Préparation de la requête SQL
$sql = "INSERT INTO contacter_nous (nom,phone,email,sujet,message) VALUES ('$nom','$phone','$email', '$sujet', '$message')";
// Exécution de la requête SQL
if (mysqli_query($conx, $sql)) {
    echo "Votre message a été envoyé avec succès !";
} else {
    echo "Erreur d'envoi du message : " . mysqli_error($conx);
}

// Fermeture de la connexion à la base de données
mysqli_close($conx);
?>
