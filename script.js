
function controlImageSize() {
    var contentWidth = $("#content").width();
    var newHeight = 0.6 * contentWidth;

    $(".column").css("height", newHeight);
}

function changeHeaderBg() {
    var scroll = $(window).scrollTop();
    
    if(scroll > 20) {
        $("header").removeClass('headerNorm');
        $("header").addClass('headerScroll');
    } else {
        $("header").removeClass('headerScroll');
        $("header").addClass('headerNorm');
    }
}

function scrollBox() {
    var width = $(window).width();
    if(width < 540) {
        $("#scrollDown").css("bottom", "5%");
        $("#scrollDown").css("right", "calc(50% - 50px)");
        $("#scrollDown").css("background", "white");
    } else {
        $("#scrollDown").css("bottom", "5%");
        $("#scrollDown").css("right", "300px");
        $("#scrollDown").css("background", "none");
    }
}


function changeBg(scrollBox) {
    var scroll = $(window).scrollTop();
    var width = $(window).width();
    var height = $(window).height();
    
    if(height < 1100) {
        $("#contentWrapper").css("top", height);
    } else {
        $("#contentWrapper").css("top", "1100px");
    }
   
    
    //Actions
    
    if(scroll > 20) {
        $("#mainPhoto").css("background", "darkslategrey");
        $("#mainPhotoContent").removeClass('visible');
        $("#mainPhotoContent").addClass('hidden');
        
    } else {
        $("#mainPhoto").css("background", "antiquewhite");
         $("#mainPhotoContent").removeClass('hidden');
         $("#mainPhotoContent").addClass('visible');
    }
    
    if(scroll > 40) {
        $("#scrollDown").css("bottom", "calc(50% - 85px)");
        $("#scrollDown").css("right", "calc(50% - 50px)");
        $("#scrollDown").css("color", "white");
        $("#scrollDown").css("background", "none");
    } else {
        scrollBox();
        $("#scrollDown").css("color", "black");
    }
    
    if(scroll > 500) {
        $("#scrollDown").css("opacity", "0");
    } else { 
        $("#scrollDown").css("opacity", "1");
    }
    

}

function cursorBox(width) {
    //Set width
    $("#cursorBox").outerWidth(width);
    
    //Variables
    var divOffsetRight = $(window).width() - ($("#links").offset().left + $("#links").outerWidth());
    var linkPadding = $("#links").css("padding");
    
    
    //Offset to the right
    $("#cursorBox").css("right", divOffsetRight);
    
    //Hover acrivity
    $(".link").hover(
        function(){
            //Add animations
            $("#cursorBox").addClass('cursorAnimate');
            
            //Variables
            var linkWidth = $(this).outerWidth();
            var linkHeight = $(this).outerHeight();
            var position = $(this).offset();
            var rightOffsetLink = $(window).width() - (position.left + $(this).outerWidth());
            
            //Actions
            $("#cursorBox").css("width", linkWidth);
            $("#cursorBox").css("height", linkHeight);
            $("#cursorBox").css("padding", 10);
            $("#cursorBox").css("background-color", "darkslategrey");
            $("#cursorBox").css("right", rightOffsetLink - 15);
            $("#cursorBox").css("opacity", "0.5");
        },
        
        function(){
            //Return to original position
            $("#cursorBox").outerWidth(width);
            $("#cursorBox").outerHeight(50);
            $("#cursorBox").css("right", divOffsetRight);
            $("#cursorBox").css("background", "none");
             $("#cursorBox").css("opacity", "1");
            
            
        }
    
    );
}


function linkControl() {
    
    $("#homeButton").click(function() {
        $("html, body").animate({scrollTop: 0});
         $("#mobileMenu").removeClass("show");
        $("#mobileMenu").addClass("hide");
        
        if($("#mobileMenu").css('visibility') == 'visible') {
            $(".top").toggleClass("open");
            $(".middle").toggleClass("open");
            $(".bottom").toggleClass("open");
            unlockScroll();
        
        }
        
    
    });
    
    $(".resumeLink").click(function() {
        var resume = $("#resumeTitle").offset().top;
            $("html, body").animate({scrollTop: resume - 200});
            $("#mobileMenu").toggleClass("show");
            $("#mobileMenu").toggleClass("hide");
            $(".top").toggleClass("open");
            $(".middle").toggleClass("open");
            $(".bottom").toggleClass("open"); 
        
    });
    
    
    $(".programsLink").click(function() {
        var programs = $("#programsTitle").offset().top;
        $("html, body").animate({scrollTop: programs - 200});
        $("#mobileMenu").toggleClass("show");
            $("#mobileMenu").toggleClass("hide");
            $(".top").toggleClass("open");
            $(".middle").toggleClass("open");
            $(".bottom").toggleClass("open");
    
    });
    
    $(".makingLink").click(function() {
        var making = $("#howMade").offset().top;
        $("html, body").animate({scrollTop: making - 200});
        $("#mobileMenu").toggleClass("show");
            $("#mobileMenu").toggleClass("hide");
            $(".top").toggleClass("open");
            $(".middle").toggleClass("open");
            $(".bottom").toggleClass("open");
    })
    
    
    $(".mobileLink").click(function() {
        unlockScroll();
    });
    
    
}


function lockScroll() {
 $('body').css({'overflow':'hidden'});
  $(document).bind('scroll',function () { 
       window.scrollTo(0,0); 
  });
}


function unlockScroll() {
    $(document).unbind('scroll'); 
    $('body').css({'overflow':'visible'});
}

function zoomIn() {
    var width = parseInt($("#pdfWindow img").css("max-width"));
    var newWidth = width + 100;

    if(newWidth >= $(window).width()) {
        $("#pdfWindow img").css("max-width", $(window).width());
    } else {
        $("#pdfWindow img").css("max-width", newWidth);
    }



    console.log($("#pdfWindow img").css("max-width"));
}

function zoomOut() {
    var width = parseInt($("#pdfWindow img").css("max-width"));
    var newWidth = width - 100; 

    if(newWidth < 500) {
        $("#pdfWindow img").css("max-width", "500px");
    } else {
        $("#pdfWindow img").css("max-width", newWidth);
    }
}




$(window).bind("load", function() {
//Uses bind-load function due to calculation
//errors using window-ready
    
     //Cursor box
    var width = $("#cursorReference").width();
    cursorBox(width);

    //Resizing with cursorbox
    $(window).resize(function() {
        var width = $("#cursorReference").width();
        $("#cursorBox").removeClass('cursorAnimate');
       cursorBox(width); 
    });
    
 //Loading fade out when document loaded
     $("#loading").delay(4500).fadeOut(1000);
    
});

$(window).ready(function main() {
      
    
    //Controlling main content images
    controlImageSize();
    $(window).resize(function() {
        controlImageSize();
    });
    
    //Controlling header background
    changeHeaderBg();
    $(window).scroll(function() {
        changeHeaderBg();
    });
    
    

    
    //Controlling bg change when scrolling 
    changeBg(scrollBox);
    $(window).scroll(function() {
        changeBg(scrollBox);
    });
    
    $(window).resize(function() {
        changeBg(scrollBox);
    })
    
    $(window).resize(scrollBox);
   
    
    //Link control
    linkControl();
    
    
    //Typing animations
    var typed = new Typed(".autoType", {
        strings: ["engineer", "programmer", "friend", "explorer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
    
    var typed2 = new Typed(".autoType2", {
        strings: ["hard-working", "motivated", "willing to learn"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
    
    
    //Mobile menu
    
    $("#mobileButton").click(function() {
        $("#mobileMenu").toggleClass("show");
        $("#mobileMenu").toggleClass("hide");
        
        
        $(".top").toggleClass("open");
        $(".middle").toggleClass("open");
        $(".bottom").toggleClass("open");
        
        if($("#mobileMenu").css('visibility') == 'hidden') {
            lockScroll();

        } else if ($("#mobileMenu").css('visibility') == 'visible') {
            unlockScroll();
        }
        
    });
    
    $(window).resize(function() {
        var width = $(window).width();
        if(width > 540) {
            unlockScroll();
        } else if($("#mobileMenu").css('visibility') == 'visible' && width < 540) {
            lockScroll();
        }
    })
    
    
     
    
    
    //Program buttons
     $(".cHeader").click(function() {
        if($("#cContent").is(":visible")) {
             $(".carrow").css("transform", "rotate(0deg)");
            $("#cContent").toggleClass("retract");
            $("#cContent").delay(500).queue(function() {
                $(this).css("display", "none");
                $(this).dequeue();
            });
        } else if ($("#cContent").is(":hidden")){
           
            $(".carrow").css("transform", "rotate(180deg)");
             $("#cContent").css("display", "flex");
            $("#cContent").delay(1).queue(function() {
                $("#cContent").toggleClass("retract");
                 $(this).dequeue();
            });
        }
    });
    
    
     $(".pyHeader").click(function() {
        if($("#pyContent").is(":visible")) {
             $(".pyarrow").css("transform", "rotate(0deg)");
            $("#pyContent").toggleClass("retract");
            $("#pyContent").delay(500).queue(function() {
                $(this).css("display", "none");
                $(this).dequeue();
            });
        } else if ($("#pyContent").is(":hidden")){
           
            $(".pyarrow").css("transform", "rotate(180deg)");
             $("#pyContent").css("display", "flex");
            $("#pyContent").delay(1).queue(function() {
                $("#pyContent").toggleClass("retract");
                 $(this).dequeue();
            });
        }
    });
    
    

    
    
    //Content width management
    var contentWidth = $(".programHeader").outerWidth();
    $(".programList").width(contentWidth);
    $(window).resize(function() {
        var contentWidth = $(".programHeader").outerWidth();
        $(".programList").width(contentWidth);
    })
    
    
    //Open close pdf
    $("#pdfWinX").click(function() {
        $("#pdfWindow").toggleClass("hide");
        $("#pdfWindow").toggleClass("show");
        $("#pdfWindow").delay(300).queue(function() {
            $(this).css("display", "none");
            $(this).dequeue();
        });
        
    });
    
    $("#pdfButton").click(function() {
        $("#pdfWindow").css("display", "block")
        $("#pdfWindow").delay(1).queue(function() {
            $(this).toggleClass("hide");
            $(this).toggleClass("show");
            $(this).dequeue();
        })
    });
    
    //Zoom control pdf
    $("#pdfMinus").click(zoomOut);
    
    $("#pdfPlus").click(zoomIn);
    
    $("#pdfPlus").mousedown(function() {
        counter = setInterval(function() {
            zoomIn();
        }, 100);
    });
    
    $("#pdfPlus").mouseup(function() {
        clearInterval(counter);
    });
    
    //"How-Made" pics animating into view 
    
       $(window).scroll(function() {
          var pos = $(".howMadePic").offset().top;
          var winTop = $(window).scrollTop();
        

          if (pos < winTop + $(window).height() + 600) {
            $(".howMadePic").addClass("animate");
          } else {
              $(".howMadePic").removeClass("animate");
          }
        });
});