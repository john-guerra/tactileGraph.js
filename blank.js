var tg = tactileGraphic("a","IJB5","edl");
function drawGraph(){///////////////////////////////////////////////////////
  tg.clear();
  ///////ここから下に描画メソッドを記述します//////////////



var hoge;
hoge= tg.drawBraille("nsd",150,180);
tg.setType("edi");
hoge= tg.drawBraille("nsd",hoge[0],hoge[1]);
console.log(hoge);
tg.drawLine(120,100,120,110);
tg.setDot(0);
tg.drawLine(140,100,140,110);
tg.drawLine(160,100,160,110);
tg.setDot(2);



  //////////////ここまで///////////////
}
  ///////////以下はダウンロードに関する設定です。///////////////////////
var filename = "Graph";

var edl = document.querySelector('#edl');
//var png = document.querySelector('#png');
var esa = document.querySelector('#esa');

edl.onclick = function() {
  var blob = new Blob([ tg.loadEdl() ], { "type" : "text/plain" });
  if (window.navigator.msSaveBlob) { 
    window.navigator.msSaveBlob(blob, filename + ".edl"); 
  } else {
    edl.download =  filename + ".edl";  //ダウンロードするファイル名を設定
    edl.href = window.URL.createObjectURL(blob);
  }
}

esa.onclick = function(){
  imgURL = tg.map2esa();
  var bin = atob(imgURL.split(',')[1]);
  var buffer = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) {
    buffer[i] = bin.charCodeAt(i);
  }
  var blob = new Blob([buffer.buffer], {type: 'image/png'});
  
  if (window.navigator.msSaveBlob) {
  window.navigator.msSaveBlob(blob, filename + '.png'); 
  } else {
    esa.download =  filename + ".png";
    esa.href = window.URL.createObjectURL(blob);
  }
}
window.onload = function(){
  drawGraph();
}