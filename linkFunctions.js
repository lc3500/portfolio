function getLinks() {
  $.getJSON('view_links.php', function(links) {
    // Add link divs to container
    console.log(links);
    $.each(links, function(index, link) {
      var linkDiv = $('<a href="'+ link.link_url +'" target="_blank"></a>')
        .append($('<div class="contentLink"><h1>'+ link.project_name +'</h1></div>'));
        
        if (link.link_category === 'C') {
             $('#cContent').append(linkDiv);
        } else if (link.link_category === 'Python') {
            $('#pyContent').append(linkDiv);
        }     
        console.log("appended");
    });
  });
}

function submitLink() {
  var projectName = $('#project-name').val();
  var linkCategory = $('#link-category').val();
  var linkUrl = $('#link-url').val();

  $.post('insert_link.php', { 'project-name': projectName, 'link-category': linkCategory, 'link-url': linkUrl }, function(response) {
    console.log(response);
    getLinks();
  });
}



function displayLinks() {
  // Fetch the links from the server
  $.getJSON('view_links.php', function(links) {
    // Create a list to display the links
    var cList = $("#projListC");
    var pyList = $("#projListPy");
    // Loop through the links and add them to the list
    $.each(links, function(index, link) {
      var linkItem = $('<li id="link-'+ link.id +'" class="linkItem")><p style="text-align: left; display: inline-block; margin: 0; font-size: 20px;">&#x2715 &nbsp;</p>'+ link.project_name +'</li>')
        
        if(link.link_category === 'C') {
            cList.append(linkItem);
        } else if (link.link_category === 'Python') {
            pyList.append(linkItem);
        }
    });
      
      if ($('#projListC li').length > 0) {
        $('.noProjC').hide();
    } else {
        $('.noProjC').show();
    }
    
    if ($('#projListPy li').length > 0) {
        $('.noProjPy').hide();
    } else {
        $('.noProjPy').show();
    }
  });
 
    
}

function deleteLink(linkId) {
 

  // Send a POST request to delete the link from the database
    
if(confirm("Are you sure you want to delete this project?")) {
  $.post('delete_link.php', {id: linkId}, function(result) {
    if (result.success) {
      // If the link was deleted successfully, remove it from the list
      $('#link-' + linkId).remove();
        
        displayLinks();
    } else {
      alert('Failed to delete link');
    }
  }, 'json');
   
}
}

$(document).ready(function() {
  getLinks();
    
    $('#addLinkForm').submit(submitLink);

    displayLinks();
    
    $('#projListC, #projListPy').on('click', '.linkItem', function() {
        var linkId = $(this).attr('id').split('-')[1];
        deleteLink(linkId);
        location.reload();
  });
    
    if ($('#projListC li').length > 0) {
        $('.noProjC').hide();
    } else {
        $('.noProjC').show();
    }
    
    if ($('#projListPy li').length > 0) {
        $('.noProjPy').hide();
    } else {
        $('.noProjPy').show();
    }

});
    




