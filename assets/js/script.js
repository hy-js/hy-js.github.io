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

  // page views
  function callbackName(response) {
    document.getElementById('visits').innerText = response.value;
}