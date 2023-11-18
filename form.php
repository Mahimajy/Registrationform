<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirmPassword"];

    // You can add more validation here as needed
    if ($password !== $confirmPassword) {
        echo "Passwords do not match.";
    } else {
        // You can further validate email format and password strength here

        // Assuming you have a database connection
        // You should store user registration information in your database
        // For simplicity, we're just printing the user information here
        echo "Registration successful!<br>";
        echo "Name: $name<br>";
        echo "Email: $email<br>";
        echo "Username: $username<br>";
    }
}
?
