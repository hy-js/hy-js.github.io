// Cover hides JS elements until loaded
// input last modified date and output DD/MM/YYYY
function getLastModifiedDate() {
    let lastModifiedDate = document.lastModified.split(' ')[0];
    let ausDate = lastModifiedDate.split('/')
    document.getElementById("update").innerHTML = `${ausDate[1]}/${ausDate[0]}/${ausDate[2]}`;
  }
  getLastModifiedDate()

// Choose random colour for main heading
  const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("color").style.color = "#" + randomColor;
  }
  setBg();


// Only display banner if new to page
// Click to remove 'under construction' banner and jump to top, if been to page before remove banenr immediately
var no_display = localStorage.getItem('no_display');
var no_annoy = localStorage.getItem('no_annoy');

var wrapper = document.getElementById("wrapper");
// localStorage(clear);
// localStorage.setItem('no_display', 0)
console.log(localStorage)
if (no_display == 'true') {
  if (no_annoy == 'true'){
    document.querySelector(".title").innerHTML = "";
    setTimeout(() => {document.queryselector(".title").innerHTML = "";}, 1000);
    wrapper.classList.remove("wrapper");
  }
  else{
    document.getElementById("color").innerHTML = "Welcome Back";
    localStorage.setItem('no_annoy', true)
    // wrapper.classList.remove("wrapper");
  }
}

else {
  wrapper.classList.add("wrapper");
  document.getElementById("color").innerHTML = "Under Construction";
} 

function removeBanner() {
  localStorage.setItem('no_display', true)
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto'
  })
  wrapper.classList.remove("wrapper");
  document.getElementById("color").innerHTML = "Welcome!";
  setTimeout(() => {
    document.getElementById("color").innerHTML = "";
  }, 1000);

}
wrapper.addEventListener("click", removeBanner); 

// window.onbeforeunload = () => {
//   localStorage.removeItem('no_annoy', true);
// }

// Show page after JS has loaded ADD style="opacity:0" to body
