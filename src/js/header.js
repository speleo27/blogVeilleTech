const hamburger = {
  Elem: document.getElementById("hamburger"),
  status: false,
};
const menu= document.getElementById('menu');

hamburger.Elem.addEventListener("click", () => {
  hamburger.Elem.style.transform = hamburger.status
    ? "rotate(0deg)"
    : "rotate(90deg)";
  hamburger.status = !hamburger.status;
  menu.classList.toggle("d-none");
});

//  hamburger.Elem.addEventListener("click", ()=>{
//  if(hamburger.status === true){
// hamburger.style.transform= "";
//  }else{
//     hamburger.style.transform= "rotate(90deg)"};
// });
