<?php
session_start();
header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past


// Check if user is not logged in, redirect to login page
if (!isset($_SESSION['user_id']) || !isset($_SESSION['username'])) {
  header("Location: login.php");
  exit();
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lane Crowder – Admin</title>
    <link rel="stylesheet" href="./style.css">
    <meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
    <meta http-equiv="Expires" content="Sat, 26 Jul 1997 05:00:00 GMT">
     <link rel="icon" href="icon.png" type="image/png">
  </head>
  <body>
    <div id="profileMain">
      <div id="backdrop"></div>
       <div style="display: flex;">
           <a href="https://www.lanecrowder.com" style="text-decoration: none; color: black"><div  id="backLinkProfile" style=""><h1 style="margin: 0;">&#8635 back</h1></div></a>
           <div id="profileHeader">
            <h1 style="font-size: 40px; margin-top: 10px; display: inline-block;">Welcome, <h1 style="font-size: 40px; display: inline-block; color: orange;">&nbsp Lane <h1 style="display: inline-block; font-size: 40px;">!</h1></h1></h1>
           </div>
        </div>
        <div id="profileContent">
            <div id="addDiv">
                <h2>Want to add a project?</h2>
                <button id="addFormButt" style="padding: 10px; background: white; font-family: serif; border-width: medium;">Add a project</button>
                <div id="addFormDiv">
                   <div id="addFormContain">
                    <div id="addFormX" draggable="false" class="xIcon">&#x2715</div>
                   <form  id="addLinkForm">
                      <label for="project-name" class="form-label">Project Name: </label>
                      <input type="text" id="project-name" name="project-name" required><br>

                      <label for="link-category" class="form-label">Link Category: </label>
                        <select id="link-category" name="link-category" required>
                            <option value="" selected>--Choose a category--</option>
                            <option value="C">C</option>
                            <option value="Python">Python</option>
                        </select><br>

                        <label for="link-url" class="form-label">Link URL: </label>
                          <input type="text" id="link-url" name="link-url" required><br>

                      <div style="text-align: center">
                        <input class="submitButt" type="submit" value="Submit">
                      </div>
                    </form>

                    </div>
                </div>
            </div>    
            <div id="viewProj" style="">
                <h2>Want to manage projects?</h2>
                <button id="viewProjButt" style="padding: 10px; background: white; font-family: serif; border-width: medium;">View projects</button>
                <div id="viewProjDiv">
                  <div id="viewProjContain">
                   <div id="viewProjX" draggable="false" class="xIcon">&#x2715</div>
                   <div id="listContain">
                    <div id="projListCDiv">
                       <h1>C</h1>
                        <ul id="projListC" class="projList">
                            <p class="noProjC">No projects</p>
                        </ul>
                    </div>
                    <div id="projListCDiv" class="projList">
                       <h1>Python</h1>
                        <ul id="projListPy" class="projList">
                            <p class="noProjPy">No projects</p>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>        
        
        
        
    </div>

 <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
   <script src="admin.js" ></script>
   <script src="linkFunctions.js"></script>
   
  </body>
</html>