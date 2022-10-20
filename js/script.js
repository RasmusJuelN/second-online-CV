// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".background").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }

  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}


  // Custon Cursor on mousemove

 document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    } 


// Mouse hover effect

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
  t.style.left = n.clientX + "px", 
  t.style.top = n.clientY + "px", 
  e.style.left = n.clientX + "px", 
  e.style.top = n.clientY + "px", 
  i.style.left = n.clientX + "px", 
  i.style.top = n.clientY + "px"
  });
  var t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");
  function n(t) {
      e.classList.add("hover"), i.classList.add("hover")
  }
  function s(t) {
      e.classList.remove("hover"), i.classList.remove("hover")
  }
  s();
  for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
      o(r[a])
  }
  function o(t) {
      t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
  } 



  // Timeline

  //Sample dates
var dates = ["04/21/2021", "11/11/2021", "04/04/2022", "06/27/2022", "01/16/2023", "04/01/2023", "10/23/2023", "01/13/2024", "08/05/2024", "10/12/2024", "04/07/2025", "06/28/2025", "01/26/2026",  "04/27/2026"];
var textStrings = ['<h1 id="headertext">SPK1</h1><p id="subtext">C# Cases - Object oriented programming<br>Linux Environment - CentOS 8<br>Cisco Course - Routing and Switching Essentials<br>Website - HTML, CSS & BootStrap</p>',
'<h1 id="headertext">Primary Course 1</h1><p id="subtext">Object oriented programming - Advanced<br>Clientside Programming - HTML, CSS<br>Database Programming - MS SQL<br></p>',
  "3", "4", "5", "6", "7", "8", "9", "10", "11"];
//For the purpose of stringifying MM/DD/YYYY date format
var monthSpan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Format MM/DD/YYYY into string
function dateSpan(date) {
  var month = date.split('/')[0];
  month = monthSpan[month - 1];
  var day = date.split('/')[1];
  if (day.charAt(0) == '0') {
    day = day.charAt(1);
  }
  var year = date.split('/')[2];

  //Spit it out!
  return month + " " + day + ", " + year;
}

//Main function. Draw your circles.
function makeCircles() {
  //Forget the timeline if there's only one date. Who needs it!?
  if (dates.length < 2)
   {
    $("#line").hide();
    $("#span").show().text(dateSpan(dates[0]));
    //This is what you really want.
  } 

  else if (dates.length >= 2) 
  {
    //Set day, month and year variables for the math
    var first = dates[0];
    var last = dates[dates.length - 1];

    var firstMonth = parseInt(first.split('/')[0]);
    var firstDay = parseInt(first.split('/')[1]);
    var firstYear = parseInt(first.split('/')[2]);

    var lastMonth = parseInt(last.split('/')[0]);
    var lastDay = parseInt(last.split('/')[1]);
    var lastYear = parseInt(last.split('/')[2]);

    

    //Integer representation of the last day. The first day is represnted as 0
    var lastInt = ((lastMonth - firstMonth) *30) + ((lastDay - firstDay)) + ((lastYear - firstYear)*365);

    //Draw first date circle
    $("#line").append('<div class="circle" id="circle0" style="left: ' + 0 + '%;"><div class="popupSpan">' + dateSpan(dates[0]) + '</div></div>');
    
    $("#mainCont").append('<span id="span0" class="center";>' + '<h1 id="headertext">Basic Course, Frederiksberg.</h1><p id="subtext">Basic Programming - C#<br>Computersience - Operating systems, servers & security<br>Network - Cisco CCNA, subnetting & setting up LAN (IPv4 & IPv6).</p>' + '</span>');
            // var text1 = $("#mainCont").append('<span id="span1" class="center";> <h1 id="headertext">SPK1</h1><p id="subtext">C# Cases - Object oriented programming<br>Linux Environment - CentOS 8<br>Cisco Course - Routing and Switching Essentials<br>Website - HTML, CSS & BootStrap</p> </span>');
    //Loop through middle dates
    for (i = 1; i < dates.length - 1; i++) {
      
      var thisMonth = parseInt(dates[i].split('/')[0]);
      var thisDay = parseInt(dates[i].split('/')[1]);
      var thisYear = parseInt(dates[i].split('/')[2]);
      
      //Integer representation of the date
      var thisInt = ((thisMonth - firstMonth)*30) + ((thisDay - firstDay)) + ((thisYear - firstYear)*365);

      //Integer relative to the first and last dates
      var relativeInt = thisInt / lastInt;

      //Draw the date circle
      $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + relativeInt * 100 + '%;"><div class="popupSpan">' + dateSpan(dates[i]) + '</div></div>');

      if(i === 1) {$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[0] +'</span>');}
      if (i === 2){$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[1] +'</span>');}
      if (i === 3){$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[2] +'</span>');}
      if (i === 4){$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[3] +'</span>');}
      if (i === 5){$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[4] +'</span>');}
      if (i === 6){$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[5] +'</span>');}
      if (i === 7){$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[6] +'</span>');}
      if (i === 8){$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[7] +'</span>');}
      if (i === 9){$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[8] +'</span>');}
      if (i === 10){$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[9] +'</span>');}
      if (i === 11){$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[10] +'</span>');}
      if (i === 12){$("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[11] +'</span>');}

      // for (j = 0; j < textStrings.length; j++)
      // {
      // $("#mainCont").append('<span id="span' + i + '" class="right">' + textStrings[j] +'</span>');
   
      // }
    
    }

    //Draw the last date circle
    $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + 99 + '%;"><div class="popupSpan">' + dateSpan(dates[dates.length - 1]) + '</div></div>'); 
    // Last date text
    $("#mainCont").append('<span id="span' + i + '" class="right">' + '<h1 id="headertext">Final apprentice test</h1>' + '</span>');
    

    
  }

  $(".circle:first").addClass("active");
}

makeCircles();

$(".circle").mouseenter(function() {
  $(this).addClass("hover");
});

$(".circle").mouseleave(function() {
  $(this).removeClass("hover");
});

$(".circle").click(function() {
  var spanNum = $(this).attr("id");
  selectDate(spanNum);
});

function selectDate(selector) {
  $selector = "#" + selector;
  $spanSelector = $selector.replace("circle", "span");
  var current = $selector.replace("circle", "");
  
  $(".active").removeClass("active");
  $($selector).addClass("active");
  
  if ($($spanSelector).hasClass("right")) {
    $(".center").removeClass("center").addClass("left")
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("right")
  } else if ($($spanSelector).hasClass("left")) {
    $(".center").removeClass("center").addClass("right");
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("left");
  }; 
};