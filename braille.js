/**
 * Braille.js
 *
 * @description    Draw dot graph & Edel files.
 * @fileoverview   Drawing library
 * @author         Hirotsugu Kaga
 * @version        0.1
 * @date           2016-10-09
 * @copyright      Copyright (c) Hirotsugu Kaga
 * @license        licensed under the MIT license.
 */

/*jshint bitwise:false,eqnull:true,newcap:false */

var tactileGraphic = function() {
	var arr = [];
	var size = "A4";
	var canvas,ctx;
	var interval = 6;
	return {

          /////////////////////設定系メソッド////////////////////////
  setCanvas:function(id){
    canvas = document.getElementById(id);
    ctx = canvas.getContext('2d');
    var len = arr.length;
    for(i=0; i<len; i++){
      var x = arr[i] % 1000;
      var y = (arr[i] - X) / 1000;
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI*2, false);
      ctx.fill();
    }
  },
  
  setSize:function(str){
    size = str;
  },

  setInterval:function(num){
    interval = num;
  },

         ///////////////////////描画系メソッド//////////////////////

  convertText:function(str){    //拗音などを記号の組み合わせに変換する
    var arr1 = new Array("きゃ","きゅ","きょ","しゃ","しゅ","しょ","ちゃ","ちゅ","ちょ","にゃ","にゅ","にょ","ひゃ","ひゅ","ひょ","みゃ","みゅ","みょ","りゃ","りゅ","りょ","いぇ","きぇ","しぇ","ちぇ","にぇ","ひぇ","すぃ","てぃ","ぎゃ","ぎゅ","ぎょ","じゃ","じゅ","じょ","ぢゃ","ぢゅ","ぢょ","びゃ","びゅ","びょ","うぃ","うぇ","うぉ","くぁ","くぃ","くぇ","くぉ","つぁ","つぃ","つぇ","つぉ","ふぁ","ふぃ","ふぇ","ふぉ","ぐぁ","ぐぃ","ぐぇ","ぐぉ","ヴぁ","ヴぃ","ヴぇ","ヴぉ","とぅ","ずぃ","でぃ","どぅ","てゅ","ふゅ","ふょ","でゅ","ヴゅ","ヴゅ","が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ","キャ","キュ","キョ","シャ","シュ","ショ","チャ","チュ","チョ","ニャ","ニュ","ニョ","ヒャ","ヒュ","ヒョ","ミャ","ミュ","ミョ","リャ","リュ","リョ","イェ","キェ","シェ","チェ","ニェ","ヒェ","スィ","ティ","ギャ","ギュ","ギョ","ジャ","ジュ","ジョ","ヂャ","ヂュ","ヂョ","ビャ","ビュ","ビョ","ウィ","ウェ","ウォ","クァ","クィ","クェ","クォ","ツァ","ツィ","ツェ","ツォ","ファ","フィ","フェ","フォ","グァ","グィ","グェ","グォ","ヴァ","ヴィ","ヴェ","ヴォ","トゥ","ズィ","ディ","ドゥ","テュ","フュ","フョ","デュ","ヴュ","ヴュ","ヴ","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ");
    var arr2 = new Array("拗か","拗く","拗こ","拗さ","拗す","拗そ","拗た","拗つ","拗と","拗な","拗ぬ","拗の","拗は","拗ふ","拗ほ","拗ま","拗む","拗も","拗ら","拗る","拗ろ","拗え","拗け","拗せ","拗て","拗ね","拗へ","拗し","拗ち","小か","小く","小こ","小さ","小す","小そ","小た","小つ","小と","小は","小ふ","小ほ","＋い","＋え","＋お","＋か","＋き","＋け","＋こ","＋た","＋ち","＋て","＋と","＋は","＋ひ","＋へ","＋ほ","。か","。き","。け","。こ","。は","。ひ","。へ","。ほ","＋つ","小し","小ち","。つ","斜つ","斜ゆ","斜よ","拡つ","拡ゆ","拡よ","濁か","濁き","濁く","濁け","濁こ","濁さ","濁し","濁す","濁せ","濁そ","濁た","濁ち","濁つ","濁て","濁と","濁は","濁ひ","濁ふ","濁へ","濁ほ","半ほ","半ひ","半ふ","半へ","半ほ","拗カ","拗ク","拗コ","拗サ","拗ス","拗ソ","拗タ","拗ツ","拗ト","拗ナ","拗ヌ","拗ノ","拗ハ","拗フ","拗ホ","拗マ","拗ム","拗モ","拗ラ","拗ル","拗ロ","拗エ","拗ケ","拗セ","拗テ","拗ネ","拗ヘ","拗シ","拗チ","小カ","小ク","小コ","小サ","小ス","小ソ","小タ","小ツ","小ト","小ハ","小フ","小ホ","＋イ","＋エ","＋オ","＋カ","＋キ","＋ケ","＋コ","＋タ","＋チ","＋テ","＋ト","＋ハ","＋ヒ","＋ヘ","＋ホ","。カ","。キ","。ケ","。コ","。ハ","。ヒ","。ヘ","。ホ","＋ツ","小シ","小チ","。ツ","斜ツ","斜ユ","斜ヨ","拡ツ","拡ユ","拡ヨ","濁ウ","濁カ","濁キ","濁ク","濁ケ","濁コ","濁サ","濁シ","濁ス","濁セ","濁ソ","濁タ","濁チ","濁ツ","濁テ","濁ト","濁ハ","濁ヒ","濁フ","濁ヘ","濁ホ","半ホ","半ヒ","半フ","半ヘ","半ホ");
    str += "";  //引数を文字列として扱わせる
    str = str.replace(/([0-9０１２３４５６７８９])/g, "数$1");  //全てのアラビア数字の直前に数符を置く
    str = str.replace(/([0-9０１２３４５６７８９])数/g, "$1");  //数符の直前に数字があったら、その数符を取り除く
    str = str.replace(/数数/g, "数");  //数符の連続があればそれを解消する
        //数字の直後にア行とラ行、AからJまでのアルファベットがあったら間に繋ぎ符を挿入する
    str = str.replace(/([0-9０１２３４５６７８９])([ろロﾛＪJｊjあアｱＡAａaいイｲＢBｂbうウｳＣCｃcるルﾙＤDｄdらラﾗＥEｅeれレﾚＧGｇgえエｴＦFｆfりリﾘＨHｈhおオｵＩIｉi])/g, "$1_$2");
    
    for(var i = 0 ; i < arr1.length ; i++){ //>配列の変換
      var regex = new RegExp(arr1[i], 'g');
      str = str.replace(regex,arr2[i]);
    }
    return str;
  },

  drawBraille:function(str,x,y){
    var arrLetter = new Array("あアｱ１1ＡAａa","いイｲ２2ＢBｂb","うウｳ３3ＣCｃc","えエｴ６6ＦFｆf","おオｵ９9ＩIｉi","かカｶ＊*","きキｷ｛{","くクｸ","けケｹ","こコｺ＠@","さサｻ","しシｼ","すスｽ","せセｾ","そソｿＷWｗw","たタﾀＯoｏo","ちチﾁＲRｒr","つツﾂＮNｎn","てテﾃＱQｑq","とトﾄＴTｔt","なナﾅＫKｋk","にニﾆＬLｌl","ぬヌﾇＭMｍm","ねネﾈＰPｐp％%","のノﾉＳSｓs","はハﾊＵUｕu","ひヒﾋＶVｖv","ふフﾌＸXｘx","へヘﾍ＆&","ほホﾎ","まマﾏＺZｚz","みミﾐ[","むムﾑＹYｙy","めメﾒ","もモﾓ]","やヤﾔ／/分","ゆユﾕ〒郵","よヨﾖ√根｝}","らラﾗ5５ＥEｅe","りリﾘ8８ＨHｈh","るルﾙ4４ＤDｄd","れレﾚ７7ＧGｇg","ろロﾛ０0ＪJｊj","わワﾜ’'?","ゐヰ、，,外＄$↓","ゑヱ、。．.句∋","をヲｦ－","八語","濁・〃中","数","　 &nbsp;無","ーー三","小＾^ぎギｷﾞじジｼﾞぢヂﾁﾞびビﾋﾞ↑","拗†￥\´?","半πΠ¶?ぱパﾊﾟ大","促っッｯ一","＿_「」-‐継～：:","七＝=","斜‡ぴピﾋﾟ≠","？?＋+五疑","二；;","！!！感六","んンﾝ零閉","｜|拡");
  var arrNum = new Array("1","12","14","124","24","16","126","146","1246","246","156","1256","1456","12456","2456","135","1235","1345","12345","2345","13","123","134","1234","234","136","1236","1346","12346","2346","1356","12356","13456","123456","23456","34","346","345","15","125","145","1245","245","3","56","256","35","236","5","3456","","25","45","4","6","2","36","2356","46","26","23","235","356","456");
    str += "";
    str = this.convertText(str);
    var arr = [];
    for(i=0;i<str.length;i++){  //>1文字毎に配列を作成
      var letter = str.charAt(i);
      arr.push(seek(letter));
    }
    
    function seek(letter){        //数字コードを取得
      var a = new Array(".", "\(", "\)", "\[", "\]", "\\", "\*", "?", "\{", "\}", "\^", "$", "-", "\|", "\/");
      var b = new Array("256","2356","2356","2356","2356","4","16","26","2356","2356"," ","56","36","456","34");
      for(var i= 0 ; i < a.length ; i++){ //エスケープが必要な文字を先に文字列として比較
        if(letter === a[i])return b[i]
      }

      for(var j = 0 ; j < arrLetter.length ; j++){ //>
        if(arrLetter[j].match(letter)){
          return arrNum[j];
        }
      }
      //alert("文字列に点字に変換出来ない文字が含まれています。");
      return "none";
    }
    
    this.arr2braille(arr,x,y);
  },

  arr2braille:function(arr,x,y){ //点字の描画処理/
    var w = 6;
    var h = 7;
    var r = 15;
    if(arr.length===1) x += 7;   //一文字の場合、インデントしてマスの中央に寄せる
    for(var i = 0 ; i < arr.length ; i++){         //>
      if(arr[i].match("1"))this.drawDot(x + r * i , y);
      if(arr[i].match("2"))this.drawDot(x + r * i , y + h);
      if(arr[i].match("3"))this.drawDot(x + r * i , y + h*2);
      if(arr[i].match("4"))this.drawDot(x + w + r * i , y);
      if(arr[i].match("5"))this.drawDot(x + w + r * i , y + h);
      if(arr[i].match("6"))this.drawDot(x + w + r * i , y + h*2);
      //if(arr[i].match("none"))ctx.strokeRect(w + r * i, h, w*2, h*3);
    }
  },

  drawLine:function(x1, y1, x2, y2) {     ////点線の描画処理///
    var d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    var rad = Math.atan2(y2 - y1, x2 - x1);
    var dotted = Math.round(d / interval );
    for (var i = 0; i <= dotted; i++) {
      var x3 = Math.cos(rad) * interval * i + x1;
      var y3 = Math.sin(rad) * interval * i + y1;
      this.drawDot(x3, y3);
    }
  },

  strokeRect:function(x, y, w, h) {   ////長方形の描画処理①///
    this.drawLine(x, y , x+w, y);
    this.drawLine(x, y , x, y+h);
    this.drawLine(x+w, y , x+w, y+h);
    this.drawLine(x, y+h , x+w, y+h);
  },

  fillRect:function(x, y, w, h) {     ////長方形の描画処理②///
    var s = 3;
    var j = Math.round(h /s /2 );
    for (var i = 0; i <= j; i++) {
      this.drawLine(x, y + s*i*2, x+w, y + s*i*2);
    }
  },
  
  strokeCircle:function(r, x, y) {     ////円の描画処理///
    var cir = 2 * Math.PI * r;
    var a = Math.round(360 / (cir / interval)); // 角度（度）
    for(i=0; a*i < 360; i++){
      var X = x + r * Math.cos(a*i / 180 * Math.PI); // X座標
      var Y = y + r * Math.sin(a*i / 180 * Math.PI); // Y座標
      this.drawDot(X, Y);
    }
  },

  drawDot:function(x,y) {               /////点の描画///////
    if(ctx){
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI*2, false);
      ctx.fill();
    }
    arr.push(y*1000 + x);
  },

             /////////////入出力系メソッド//////////////////

  loadEdl:function() {              //////エーデルファイルの出力///////
    arr.sort(function(a,b){
      if( a < b ) return -1;
      if( a > b ) return 1;
      return 0;
    });
    
    var str = "";
    var len = arr.length;
    for(i=0; i<len; i++){
      var X = arr[i] % 1000;
      var Y = (arr[i] - X) / 1000;
      str += num2edi(parseInt(X,10)) + num2edi(parseInt(Y,10));
    }
    
    function num2edi(num){
      var str = num.toString(26);
      str = str.replace(/10(.)/, "Z$1");
      str = str.replace(/11(.)/, "\[$1");
      str = str.replace(/12(.)/, "\\$1");
      var js26 = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
      var ed26 = ['@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'];
      for(var i=0; i<26; i++){
        str = str.replace(new RegExp(js26[i],"g"),ed26[i]);
        str= ("@"+str).slice(-2);  //ゼロ埋め
      }
      return str;
    }
    
    str = "EDEL" + size + "0,740\n2" + str;
    return str;
  },

  clear:function(){arr=[];},

  map2esa:function(){
    var element = document.createElement("canvas");
    element.setAttribute("width", 599);
    element.setAttribute("height", 744);
    var ctx2 = element.getContext('2d');
    
    var len = arr.length;
    
    for(i=0; i<len; i++){
      var X = arr[i] % 1000;
      var Y = (arr[i] - X) / 1000;
      ctx2.fillRect(X,Y,1,1);
    }
    var data = element.toDataURL();
    return data;
  }

  };
};
