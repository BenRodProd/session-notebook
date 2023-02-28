// PACMAN MIT MAUS STEUERN
// document.addEventListener("mousemove", function (e) {
//   let circle = document.getElementById("circle");
//   let left = e.layerX;
//   let top = e.layerY;
//   circle.style.left = left + "px";
//   circle.style.top = top + "px";
// });

window.onload = function () {
  const jf = document.getElementById("jugendforscht");
  const fcW = document.getElementById("fccWeg");
  const fccJ = document.getElementById("fccJS");
  const cpWep = document.getElementById("cpWep");
  const cpJS = document.getElementById("cpJS");

  const aboutdiv = document.getElementById("about-text");
  // JUGENDFORSCHT
  jf.addEventListener("mouseover", (e) => {
    const jfimg = document.createElement("img");

    jfimg.setAttribute("id", "jfimg");
    jfimg.setAttribute("src", "../html/jugendforscht95jpg.jpg");
    aboutdiv.appendChild(jfimg);
    let left = e.pageX;
    let top = e.pageY;
    jfimg.style.left = 225 + "px";
    jfimg.style.top = top - 40 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(jfimg);
    }, 300);
  });
  //WEBDESIGN
  fcW.addEventListener("mouseover", (e) => {
    const fccWeb = document.createElement("img");

    fccWeb.setAttribute("id", "fccWeb");
    fccWeb.setAttribute("src", "../html/freecodecampweb.jpg");
    aboutdiv.appendChild(fccWeb);
    let left = e.pageX;
    let top = e.pageY;
    fccWeb.style.left = 10 + "%";
    fccWeb.style.top = top - 40 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(fccWeb);
    }, 300);
  });
  //JAVASCRIPT
  fccJ.addEventListener("mouseover", (e) => {
    const fcJimg = document.createElement("img");

    fcJimg.setAttribute("id", "fcJimg");
    fcJimg.setAttribute("src", "../html/freecodecampjs.jpg");
    aboutdiv.appendChild(fcJimg);
    let left = e.pageX;
    let top = e.pageY;
    fcJimg.style.left = 250 + "px";
    fcJimg.style.top = top - 40 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(fcJimg);
    }, 300);
  });
  cpWep.addEventListener("mouseover", (e) => {
    const cpWepImg = document.createElement("img");

    cpWepImg.setAttribute("id", "cpWepImg");
    cpWepImg.setAttribute("src", "../html/certificate.png");
    aboutdiv.appendChild(cpWepImg);
    let left = e.pageX;
    let top = e.pageY;
    cpWepImg.style.left = left - 450 + "px";
    cpWepImg.style.top = top - 400 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(cpWepImg);
    }, 300);
  });
  cpJS.addEventListener("mouseover", (e) => {
    const cpJSImg = document.createElement("img");

    cpJSImg.setAttribute("id", "cpJSImg");
    cpJSImg.setAttribute("src", "../html/certificate-1.png");
    aboutdiv.appendChild(cpJSImg);
    let left = e.pageX;
    let top = e.pageY;
    cpJSImg.style.left = left - 450 + "px";
    cpJSImg.style.top = top - 400 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(cpJSImg);
    }, 300);
  });
};
