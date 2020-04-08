/*##E74C3C Kırmızı gibi olan
###2ECC71 yeşil gibi olan*/
var menu = document.getElementById('menu')
menu.style.width = "15%"
menu.style.height ="50%"
menu.style.marginTop = "10%"
menu.style.float = "left"
var img = document.getElementsByTagName('img')[0]
var menuSide = document.getElementById('menuSide')
img.style.marginLeft = "30%"
menuSide.style.overflow="hidden"
var table = document.getElementsByTagName('table')[0]
table.style.marginLeft = "-77%"
table.style.backgroundColor  = "E74C3C"
table.style.borderRadius=  "0px 30px 30px 0px";
var anasayfa = document.getElementById('anasayfa')
var hakkimizda = document.getElementById('hakkimizda')
var urunlerimiz = document.getElementById('urunlerimiz')
var vizyonumuz = document.getElementById('vizyonumuz')
var iletisim = document.getElementById('iletisim')
anasayfa.style.borderRadius=  "0px 30px 30px 0px";
anasayfa.align = "center"
anasayfa.style.fontFamily = "Raleway";
anasayfa.style.fontSize = "25px"
hakkimizda.style.borderRadius=  "0px 30px 30px 0px";
hakkimizda.align = "center"
hakkimizda.style.fontFamily = "Raleway";
hakkimizda.style.fontSize = "25px"
urunlerimiz.style.borderRadius=  "0px 30px 30px 0px";
urunlerimiz.align = "center"
urunlerimiz.style.fontFamily = "Raleway";
urunlerimiz.style.fontSize = "25px"
vizyonumuz.style.borderRadius=  "0px 30px 30px 0px";
vizyonumuz.align = "center"
vizyonumuz.style.fontFamily = "Raleway";
vizyonumuz.style.fontSize = "25px"
iletisim.style.borderRadius=  "0px 30px 30px 0px";
iletisim.align = "center"
iletisim.style.fontFamily = "Raleway";
iletisim.style.fontSize = "25px"
anasayfa.onmouseover = function(){
  anasayfa.style.backgroundColor  = "2ECC71"
  anasayfa.style.color = "#ffffff"
};
anasayfa.onmouseout = function(){
  anasayfa.style.backgroundColor  = "#E74C3C"
  anasayfa.style.color = "#000000"

};
hakkimizda.onmouseover = function(){
  hakkimizda.style.backgroundColor  = "2ECC71"
  hakkimizda.style.color = "#ffffff"
};
hakkimizda.onmouseout = function(){
  hakkimizda.style.backgroundColor  = "#E74C3C"
  hakkimizda.style.color = "#000000"
};
urunlerimiz.onmouseover = function(){
  urunlerimiz.style.backgroundColor  = "2ECC71"
  urunlerimiz.style.color = "#ffffff"
};
urunlerimiz.onmouseout = function(){
  urunlerimiz.style.backgroundColor  = "#E74C3C"
  urunlerimiz.style.color = "#000000"
};
vizyonumuz.onmouseover = function(){
  vizyonumuz.style.backgroundColor  = "2ECC71"
  vizyonumuz.style.color = "#ffffff"
};
vizyonumuz.onmouseout = function(){
  vizyonumuz.style.backgroundColor  = "#E74C3C"
  vizyonumuz.style.color = "#000000"
};
iletisim.onmouseover = function(){
  iletisim.style.backgroundColor  = "2ECC71"
  iletisim.style.color = "#ffffff"
};
iletisim.onmouseout = function(){
  iletisim.style.backgroundColor  = "#E74C3C"
  iletisim.style.color = "#000000"
};

document.getElementsByTagName("img")[0].addEventListener("click", myFunction);
var whereIs = true
function myFunction() {
  rotateAndSlide();
}

function rotateAndSlide(){
    if(whereIs == true){
      var slide = -77;
      var width = 0;
      var id = setInterval(frame,1);
      function frame() {
        if (slide >= 0) {
          clearInterval(id);
        } else {
          slide+=1.3;
          table.style.marginLeft = slide+"%"
        }
        if (width == 180) {
          clearInterval(id);
        } else {
          width+=3;
          img.style.transform = "rotate("+width+"deg)"
        }
      }
      whereIs = false
    }
    else{
      var width = 180;
      var slide = 0;
      var id = setInterval(frame,1);
      function frame() {
        if (slide <=-77) {
          clearInterval(id);
        } else {
          slide-=1.3;
          table.style.marginLeft = slide+"%"
        }
        if (width == 360) {
          clearInterval(id);
        } else {
          width+=3;
          img.style.transform = "rotate("+width+"deg)"
        }
      }
      whereIs = true
    }
}
