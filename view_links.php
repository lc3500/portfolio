<?php
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.


// Connect to the database
$servername = "sql211.epizy.com";
$username = "epiz_33580332";
$password = "6Us8jELiV1tpYL";
$dbname = "epiz_33580332_links";
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query the database to get all links
$sql = "SELECT * FROM links";
$result = $conn->query($sql);

// Create an array to store the links
$links = array();

// Loop through the result set and add each link to the array
while ($row = $result->fetch_assoc()) {
    $links[] = $row;
}

// Convert the links array to JSON format
$links_json = json_encode($links);

// Close the database connection
$conn->close();

// Output the links in JSON format
echo $links_json;
?>