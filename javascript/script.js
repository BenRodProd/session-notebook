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
  const BRde = document.getElementById("BenjaminRodensteinDe");
  const BTde = document.getElementById("BenjoTrashDe");

  const aboutdiv = document.getElementById("about-text");
  // JUGENDFORSCHT
  jf.addEventListener("mouseover", (e) => {
    const jfimg = document.createElement("img");

    jfimg.setAttribute("id", "jfimg");
    jfimg.setAttribute("src", "../html/jugendforscht95jpg.jpg");
    aboutdiv.appendChild(jfimg);
    let left = e.layerX;
    let top = e.pageY;
    jfimg.style.left = left - 200 + "px";
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
    fccWeb.style.top = top - 300 + "px";
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
    let left = e.layerX;
    let top = e.pageY;
    fcJimg.style.left = left - 40 + "px";
    fcJimg.style.top = top - 300 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(fcJimg);
    }, 300);
  });
  cpWep.addEventListener("mouseover", (e) => {
    const cpWepImg = document.createElement("img");

    cpWepImg.setAttribute("id", "cpWepImg");
    cpWepImg.setAttribute("src", "../html/certificate.png");
    aboutdiv.appendChild(cpWepImg);
    let left = e.layerX;
    let top = e.pageY;
    cpWepImg.style.left = left - 40 + "px";
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
    let left = e.layerX;
    let top = e.pageY;
    cpJSImg.style.left = left - 40 + "px";
    cpJSImg.style.top = top - 400 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(cpJSImg);
    }, 300);
  });
  BRde.addEventListener("mouseover", (e) => {
    const BRdeImg = document.createElement("img");

    BRdeImg.setAttribute("id", "BRdeImg");
    BRdeImg.setAttribute("src", "../html/authorpage.png");
    aboutdiv.appendChild(BRdeImg);
    let left = e.layerX;
    let top = e.pageY;
    BRdeImg.style.left = left - 40 + "px";
    BRdeImg.style.top = top - 400 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(BRdeImg);
    }, 300);
  });
  BTde.addEventListener("mouseover", (e) => {
    const BTdeImg = document.createElement("img");

    BTdeImg.setAttribute("id", "BTdeImg");
    BTdeImg.setAttribute("src", "../html/benjotrash.gif");
    aboutdiv.appendChild(BTdeImg);
    let left = e.layerX;
    let top = e.layerY;
    BTdeImg.style.left = left - 140 + "px";
    BTdeImg.style.top = top - 140 + "px";
    setTimeout(() => {
      aboutdiv.removeChild(BTdeImg);
    }, 300);
  });
};
