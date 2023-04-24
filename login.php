<!--<?php
session_start();

// Connect to the database
$db = new mysqli('sql211.epizy.com', 'epiz_33580332', '6Us8jELiV1tpYL', 'epiz_33580332_logins');

// Check if the login form was submitted
if (isset($_POST['username']) && isset($_POST['password'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Prepare the SQL statement
  $stmt = $db->prepare("SELECT id, username, password FROM users WHERE username = ?");
  $stmt->bind_param("s", $username);

  // Execute the query and get the result
  $stmt->execute();
  $result = $stmt->get_result();

  // Check if the username exists
  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();

    // Verify the password 
    if ($password == $row['password']) {
      // Start a new session and store the user's information
      $_SESSION['user_id'] = $row['id'];
      $_SESSION['username'] = $row['username'];

      // Redirect to the home page or another authorized page
      header("Location: https://www.lanecrowder.com/admin");
      exit();
    } else {
      $error = "Invalid password";
    }
  } else {
    $error = "Invalid username";
  }
}

// Display the login form with an error message (if any)
?>--->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Lane Crowder — Login</title>
	<link rel="stylesheet" type="text/css" href="login.css">
    <link rel="icon" href="icon.png" type="image/png">
</head>
<body>
   <div id="container">
   <h1 id="header"><span style="color: darkslategrey;">LANE</span><span style="color: darkorange;">CROWDER</span></h1>
    <div id="loginBox">
	<form action="login.php" method="post" id="login">
      <label for="username">Username:</label>
      <input class="input" type="text" name="username" id="username" required>
      <br>
      <label for="password">Password:</label>
      <input class="input" type="password" name="password" id="password" required>
      <br>
      <div id="buttonContainer">
      <input id="loginButt" type="submit" value="Login">
        </div>
    </form>
    </div>
    </div>
</body>
</html>
