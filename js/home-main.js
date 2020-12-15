
	// Loading page
	var loaderPage = function() {

		 // var i = 0;
   //      function move() {
   //        if (i == 0) {
   //          i = 1;
   //          var elem = document.getElementById("myBar");
   //          var height = 1;
   //          var id = setInterval(frame, 10);
   //          function frame() {
   //            if (height >= 100) {
   //              clearInterval(id);
   //              i = 0;
   //            } else {
   //              height++;
   //              elem.style.height = height + "%";
   //            }
   //          }
   //        }
   //      }

//        move();
         setTimeout(function(){
          					document.getElementById("canvasing-left").style.transform = "translateX(-100%)";
										document.getElementById("canvasing-right").style.transform = "translateX(100%)";
         }, 1000);

				 setTimeout(function(){
					 document.getElementById("scroll-down").style.display = "none";
					 $(".canvasing").hide();
				 }, 2000);

				 setTimeout(function(){
					 document.getElementById("scroll-down").style.display = "none";
				 }, 1000);
	};
  $(function(){
		loaderPage();
}());
