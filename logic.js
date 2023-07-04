DOM = (selector) => document.querySelector(selector)
//gamedev section
const gamedev = DOM(".gamedev");
var games = [];
var i=0;

fetch("gamedevelopment.json")
.then(data=>data.json())
.then((listOfGames)=>{
  games=listOfGames.slice(0,100);
  populate_games();
});

function populate_games() {
  for (i = 0; i < games.length; i++) {
      gamedev.innerHTML += `<div class="box">
              <img alt="Failed to load"  height=300px width=400px class ="image_gamedev" src="${games[i].thumbnail_url}">
         <div>  `;
  }
const a =games.length;
var width=(a)*300;



function games_width(x) {
  if (x.matches) { 
    width= (2/3)*width;
console.log(width);
    gamedev.style.width=width+'px';
}
else{
  console.log(width);
gamedev.style.width=width+'px';
}
}
var x = window.matchMedia("(max-width: 900px)");
games_width(x);
}

//3D-graphics section
const graphics_3D = DOM(".graphics_3");
var graphics_3 = [];
var j=0;
fetch("graphics_3D.json")
.then(data=>data.json())
.then((listOfGraphics_3)=>{
  graphics_3=listOfGraphics_3.slice(0,100);
  populate_3D();
});
function populate_3D() {
  for (j = 0; j < graphics_3.length; j++) {

      graphics_3D.innerHTML += `<div class="box">
              <img alt="Failed to load" height=300px width=400px  src="${graphics_3[j].thumbnail_url}">
         <div>  `;

  }
  const a =graphics_3.length;
var width=(a)*300;



function graphics_3D_width(x) {
  if (x.matches) { 
    width= (2/3)*width;
console.log(width);
    graphics_3D.style.width=width+'px';
}
else{
  console.log(width);
graphics_3D.style.width=width+'px';
}
}
var x = window.matchMedia("(max-width: 900px)");
graphics_3D_width(x);
}

//2D-graphics section
const graphics_2D = DOM(".graphics_2");
var graphics_2 = [];
var k=0;
fetch("graphics_2D.json")
.then(data=>data.json())
.then((listOfGraphics_2)=>{
  graphics_2=listOfGraphics_2.slice(0,100);
  populate_2D();
});
function populate_2D() {
  for (k = 0; k < graphics_3.length; k++) {

      graphics_2D.innerHTML += `<div class="box">
              <img alt="Failed to load" height=300px width=400px  src="${graphics_2[k].thumbnail_url}">
         <div>  `;

  }
  const a =graphics_2.length;
var width=(a)*300;


function graphics_2D_width(x) {
  if (x.matches) { 
    width= (2/3)*width;
console.log(width);
    graphics_2D.style.width=width+'px';
}
else{
  console.log(width);
graphics_2D.style.width=width+'px';
}
}
var x = window.matchMedia("(max-width: 900px)");
graphics_2D_width(x);
}

// hamburger section
const mobile_navbar=document.querySelector(".mobile_nav");
const mobile_navbar_list=document.querySelector(".list");
const nav_header=document.querySelector("header");

const toggleNavbar=()=>{
    nav_header.classList.toggle("active");
};

mobile_navbar.addEventListener('click',()=> toggleNavbar());
const toggleNavbar_2=()=>{
    nav_header.classList.remove("active");
};
mobile_navbar_list.addEventListener('click',()=> toggleNavbar_2());
