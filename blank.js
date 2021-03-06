
var tg = tactileGraphic("a","IJB4","edl", decapoint, kleintype);
function drawGraph(){///////////////////////////////////////////////////////
  tg.clear();
  ///////ここから下に描画メソッドを記述します//////////////
 tg.aug("ABCDE",0,0,600,12);
 tg.drawBraille("ABCDE");
 var line = tg.drawLineTilt(400,200,300,80);
 console.log(line);
 var arr = tg.strokeArc(200,200,100,90,180);
console.log(arr);

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