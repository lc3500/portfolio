<?php

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.


$servername = "sql211.epizy.com";
$username = "epiz_33580332";
$password = "6Us8jELiV1tpYL";
$dbname = "epiz_33580332_links";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind the INSERT statement
$stmt = $conn->prepare("INSERT INTO links (project_name, link_category, link_url) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $project_name, $link_category, $link_url);

// Get the values from the POST request
$project_name = $_POST["project-name"];
$link_category = $_POST["link-category"];
$link_url = $_POST["link-url"];

// Execute the INSERT statement
if ($stmt->execute() === TRUE) {
  echo "Link added successfully";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
