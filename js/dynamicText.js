$(document).ready(function(){

  let jobTitles = ["WEB DEVELOPER.", "ADMINISTRATOR.", "APP DEVELOPER.", "PROGRAMMER.", "HTML5.", "JAVASCRIPT.", "PHP.", "SWIFT.", "LINUX+.", "CABLING.", "LARAVEL.", "MYSQL.", "BOOTSTRAP.", "XCODE.", "NETWORKING.", "CABLING.", "SPRITEKIT.", "SCENEKIT.", "CSS.", "SASS.", "ANGULAR.", "GIT.", "APACHE.", "JQUERY.", "GIMP.", "SERVER ADMIN.", "DATABASES.", "CYBER SECURITY."];
  let counter = 0;


  function dynamicText() {
    $("#dynamicText").text(jobTitles[counter]);
           if (counter==jobTitles.length - 1) {
             counter = 0;
           } else {
             counter++;
           }
  }
           window.setInterval(dynamicText, 1500);
});
