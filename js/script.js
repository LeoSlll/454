"use string"

function image_loaded() {
   images_loaded_count++;
   perc_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';
   if (images_loaded_count >= images_total_count) {

      setTimeout(function () {

         if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
         }
      }, 3000);

   }

}
let
   images = document.images,
   images_total_count = images.length,
   images_loaded_count = 0;
perc_display = document.getElementById('load_perc');
preloader = document.getElementById('page preloader');
for (let i = 0; i < images_total_count; i++) {
   image_clone = new Image();
   image_clone.onload = image_loaded;
   image_clone.onerror = image_loaded;
   image_clone.src = images[i].src;
}

//album2.onmouseover = function () {
// let target = 'album2';
// if (target == 'album2');
// document.getElementById("background-block2").style.visibility = "visible";
// document.getElementById("background-block2").style.opacity = "1";
//}


//album2.onmouseout = function () {
// let target = body;
// document.getElementById("background-block2").style.visibility = "hidden";
//document.getElementById("background-block2").style.opacity = "0";


//}


