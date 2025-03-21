const con = document.getElementById("container");
const minImg = document.getElementsByClassName("myImg");
console.log(minImg);
let image = [
  "https://4kwallpapers.com/images/walls/thumbs_3t/20926.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_2t/21610.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_2t/21413.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_2t/21086.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_3t/20940.png",
  "https://4kwallpapers.com/images/walls/thumbs_3t/20910.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_2t/9809.jpg",
];

let i = 0;
function next() {
  minImg[i].classList.remove("active");
  i++;
  if (i == image.length) {
    i = 0;
  }
  minImg[i].classList.add("active");
  con.style.backgroundImage = 'url("' + image[i] + '")';
  con.style.transitionDuration = "1s";
}
function prev() {
  minImg[i].classList.remove("active");
  i--;
  if (i < 0) {
    i = image.length - 1;
  }
  con.style.backgroundImage = 'url("' + image[i] + '")';
  con.style.transitionDuration = "1s";
}
