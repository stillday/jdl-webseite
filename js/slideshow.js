(function() {
    
     /*
         module variables 
     */
     var myIndex = 0;
     var carouseDelay = 6500; // Change image every 3 seconds
     var fadeTiming = 2000; // Fade Timing for FadeIn and fadeOut of the images
     var carouselImages; // Variable zum speichern des Arrays, in dem alle Bilder abgelegt werden
     
     init();  // die gesammelten functionen von unten werden gestartet.
     
     /*
         functions 
     */
     function carousel() {
         for (var i = 0; i < carouselImages.length; i++) {
            $(carouselImages[i]).fadeOut(fadeTiming);
 //         carouselImages[i].style.display = "none";
         }
         myIndex++;
         if (myIndex > carouselImages.length) {
             myIndex = 1;
         }
 //        carouselImages[myIndex-1].style.display = "block";myIndex-1
         $(carouselImages[myIndex-1]).fadeIn(fadeTiming);
         setTimeout(carousel, carouseDelay);
     };
     
     function getCarouselImages() {
         carouselImages = document.getElementsByClassName("freesliedes"); // zum einmaligen laden aller Bilder aus der HTML Datei
     }
     
     
     function setupEvents() {    // für weiter Funktionen
         
     }
     
     function init() {   // hier werden alle funktionen gesammelt und gesammelt gestartet
         getCarouselImages();
         carousel();
         setupEvents();
     }
     
 })();