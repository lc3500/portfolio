<?php

header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.

// Retrieve link ID from POST data
$linkId = $_POST['id'];

// Connect to database
$servername = "sql211.epizy.com";
$username = "epiz_33580332";
$password = "6Us8jELiV1tpYL";
$dbname = "epiz_33580332_links";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Delete link from database
$sql = "DELETE FROM links WHERE id = $linkId";

if ($conn->query($sql) === TRUE) {
    echo "Link deleted successfully";
} else {
    echo "Error deleting link: " . $conn->error;
}

// Close database connection
$conn->close();
?>