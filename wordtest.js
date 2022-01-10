set = new Array();

flag = 0;

var category = ["睡眠","クモ","フルーツ","怒り","黒","パン","椅子","寒い","医者","足","少女","高い","王","男","山","音楽","針","川","ざらざらした","遅い","柔らかい","甘い","盗賊","窓"];

var sl = [ "ベッド", "休憩", "起床", "疲れ", "夢","起きている", "うたた寝", "ブランケット", "居眠り", "まどろみ","いびき", "昼寝", "平和", "夜明け", "眠気"]
var sp = [ "糸", "昆虫", "虫", "飛行", "ダニ","這いずる", "タランチュラ", "毒", "噛む", "ぞっとする","動物", "不快な", "触覚", "小さい", "飛ぶ"]
var fr = [ "りんご", "野菜", "みかん", "キウイ", "シトラス","熟した", "梨", "バナナ", "ベリー", "チェリー","バスケット", "ジュース", "サラダ", "ボウル", "カクテル"]
var an = [ "狂気","恐怖","憎しみ","激怒","気性","鬱憤","憤り","憤怒","幸せ","闘争","憎悪","手段","冷静","感情","怒らせる"]
var bl = [ "白","暗い","猫","焦げた","夜","葬式","色","悲しみ","青","死","インク","底","石炭","茶色","灰色"]
var br = [ "バター","食べ物","食べる","サンドイッチ","ライ麦","ジャム","ミルク","小麦粉","ゼリー","こね粉","皮","スライス","ワイン","ひとかたまり","トースト"]
var ch = [ "テーブル","座る","足","シート","寝床","机","リクライニングチェアー","ソファー","木材","クッション","回転","腰掛け","着席","揺れる","ベンチ"]
var co = [ "暑い","雪","温かい","冬","氷","湿る","極寒","冷える","熱い","天気","凍る","空気","震える","北極","霜"]
var dc  = [ "ナース","病気","弁護士","薬","健康","病院","歯科医","内科医","不調","忍耐強い","オフィス","聴診器","外科医","クリニック","癒やし"]
var fo = [ "靴","手","つま先","サンダル","サッカー","庭","歩く","足首","腕","ブーツ","インチ","ソックス","匂い","口","キック"]
var gi = [ "少年","人形","女性","若い","ドレス","かわいい","髪の毛","姪","ダンス","美しい","きれい","デート","娘","姉","おば"]
var hi = [ "低い","雲","上昇","高い","塔","ジャンプ","超える","ビル","正午","崖","空","の上に","飛行機","飛び込み","エレベーター"]
var ki = [ "女王","イングランド","王冠","王子","エリザベス","独裁者","宮殿","玉座","チェス","法律","国民","主権者","王室","リーダー","支配"]
var ma = [ "女性","夫","おじ","女性","口","男性","父","強い","友達","あご","人間","ハンサム","筋肉","スーツ","古い"]
var mo = [ "丘","谷","登る","頂上","頂点","モグラの塚","峰","明白な","氷河","ヤギ","バイク","クライマー","放牧","険しい","スキー"]
var mu = [ "音色","音量","ピアノ","歌","ラジオ","バンド","旋律","ホルン","コンサート","楽器","交響曲","ジャズ","オーケストラ","絵","リズム"]
var ri = [ "水","流れ","湖","ミシシッピ","ボート","潮","泳ぐ","流れる","遊覧客船","入り江","小川","魚","橋","曲がりくねった","駆ける"]
var ne = [ "脅威","留め針","穴","裁縫","鋭い","点","突く","指ぬき","糸","とげ","怪我する","注射","注射器","服","縫う"]
var ro = [ "滑らかな","でこぼこの","道","固い","紙やすり","ぎざぎざ","迅速な","粗末な","不規則な","ライダー","ごつい","砂","板","地面","砂利"]
var sr = [ "速い","無気力な","止まる","無関心な","カタツムリ","慎重な","遅れ","交通","亀","ためらい","スピード","クイック","のろま","待つ","はちみつ"]
var so = [ "固い","明るい","まくら","織物","派手な","コットン","ファー","触る","ふわふわの","羽","毛皮付きの","うぶ毛の","子猫","顔","華奢な"]
var sw = [ "酸っぱい","飴","砂糖","苦い","良い","味","歯","うまい","はちみつ","ソーダ","チョコレート","心","ケーキ","辛辣な","パイ"]
var th = [ "盗み","泥棒","くすねる","不法侵入","金","警官","悪い","奪う","刑務所","銃","悪党","犯罪","金庫","山賊","けしからん"]
var wi = [ "ドア","ガラス","格子","影","棚","敷居","家","開ける","カーテン","フレーム","景色","そよ風","サッシ","網戸","シャッター"]

var wordlist = [];//表示した配列

var cate = 0;//表示するリストを3津からランダムに選ぶ
var answer = 0;//正解の選択肢

function f_start(){
	if(flag == 0){
		set[0] = document.flash.set1.value;//解答の個数
		set[1] = document.flash.set2.value;//単語数
		set[2] = document.flash.set3.value;//表示間隔

		cate = Math.floor(Math.random()*24);

		document.flash.b_start.disabled = true;
		document.flash.set3.disabled = true;

		timerID = setInterval('f_word()',set[2]*1000)
		wordcount = 0;
		count = 0;

		for(let j=0;j<3;j++){
			let childnode = document.getElementById('nb');
			childnode.remove();
		}
	}else if(flag == 1){
		document.flash.b_start.disabled = true;
		f_choose();
	}else{
		
	}
}

function f_word(){
	console.log(cate);
	count++;
	if(set[1] < count){
		f_clear();
	}else{
		if(cate == 0){
		document.flash.word.value = sl[wordcount];
		wordlist[wordcount] = sl[wordcount];
		wordcount++;
		}else if(cate == 1){
		document.flash.word.value = sp[wordcount];
		wordlist[wordcount] = sp[wordcount];
		wordcount++;
		}else if(cate == 2){
		document.flash.word.value = fr[wordcount];
		wordlist[wordcount] = fr[wordcount];
		wordcount++;
		}else if(cate == 3){
		document.flash.word.value = an[wordcount];
		wordlist[wordcount] = an[wordcount];
		wordcount++;
		}else if(cate == 4){
		document.flash.word.value = bl[wordcount];
		wordlist[wordcount] = bl[wordcount];
		wordcount++;
		}else if(cate == 5){
		document.flash.word.value = br[wordcount];
		wordlist[wordcount] = br[wordcount];
		wordcount++;
		}else if(cate == 6){
		document.flash.word.value = ch[wordcount];
		wordlist[wordcount] = ch[wordcount];
		wordcount++;
		}else if(cate == 7){
		document.flash.word.value = co[wordcount];
		wordlist[wordcount] = co[wordcount];
		wordcount++;
		}else if(cate == 8){
		document.flash.word.value = dc[wordcount];
		wordlist[wordcount] = dc[wordcount];
		wordcount++;
		}else if(cate == 9){
		document.flash.word.value = fo[wordcount];
		wordlist[wordcount] = fo[wordcount];
		wordcount++;
		}else if(cate == 10){
		document.flash.word.value = gi[wordcount];
		wordlist[wordcount] = gi[wordcount];
		wordcount++;
		}else if(cate == 11){
		document.flash.word.value = hi[wordcount];
		wordlist[wordcount] = hi[wordcount];
		wordcount++;
		}else if(cate == 12){
		document.flash.word.value = ki[wordcount];
		wordlist[wordcount] = ki[wordcount];
		wordcount++;
		}else if(cate == 13){
		document.flash.word.value = ma[wordcount];
		wordlist[wordcount] = ma[wordcount];
		wordcount++;
		}else if(cate == 14){
		document.flash.word.value = mo[wordcount];
		wordlist[wordcount] = mo[wordcount];
		wordcount++;
		}else if(cate == 15){
		document.flash.word.value = mu[wordcount];
		wordlist[wordcount] = mu[wordcount];
		wordcount++;
		}else if(cate == 16){
		document.flash.word.value = ri[wordcount];
		wordlist[wordcount] = ri[wordcount];
		wordcount++;
		}else if(cate == 17){
		document.flash.word.value = ne[wordcount];
		wordlist[wordcount] = ne[wordcount];
		wordcount++;
		}else if(cate == 18){
		document.flash.word.value = ro[wordcount];
		wordlist[wordcount] = ro[wordcount];
		wordcount++;
		}else if(cate == 19){
		document.flash.word.value = sr[wordcount];
		wordlist[wordcount] = sr[wordcount];
		wordcount++;
		}else if(cate == 20){
		document.flash.word.value = so[wordcount];
		wordlist[wordcount] = so[wordcount];
		wordcount++;
		}else if(cate == 21){
		document.flash.word.value = sw[wordcount];
		wordlist[wordcount] = sw[wordcount];
		wordcount++;
		}else if(cate == 22){
		document.flash.word.value = th[wordcount];
		wordlist[wordcount] = th[wordcount];
		wordcount++;
		}else if(cate == 23){
		document.flash.word.value = wi[wordcount];
		wordlist[wordcount] = wi[wordcount];
		wordcount++;
		}
	}
	flag=1;
}

function f_clear(){
	clearInterval(timerID)
	document.flash.word.value = "";
	document.flash.b_start.disabled = false;
	document.flash.b_start.value = "選択肢表示";
	flag = 1;
}

function f_choose(){
	document.flash.b_start.disabled = true;
	answer = Math.floor(Math.random()*15);
	var fake,fknum;
	var ord = Math.floor(Math.random()*6);
	var cho;
	//不正解の答え(別のカテゴリ名)
	while(1){
		fknum = Math.floor(Math.random()*24);
		if(fknum != cate){
			fake = category[fknum];
			break;
		}
	}
	//選択肢の順番ランダム
	if(ord == 0){
		cho = [category[cate],wordlist[answer],fake];
	}else if(ord == 1){
		cho = [category[cate],fake,wordlist[answer]];
	}else if(ord == 2){
		cho = [wordlist[answer],category[cate],fake];
	}else if(ord == 3){
		cho = [wordlist[answer],fake],category[cate];
	}else if(ord == 4){
		cho = [fake,category[cate],wordlist[answer]];
	}else if(ord == 5){
		cho = [fake,wordlist[answer],category[cate]];
	}

	const postbtn = document.createElement("input");
	postbtn.type = "hidden";
	postbtn.name = "pbtn";
	const postcategory = document.createElement("input");
	postcategory.type = "hidden";
	postcategory.name = "pcate";
	const s3 = document.createElement("input");
	s3.type = "hidden";
	s3.name = "s3";
	s3.value = set[2];

   	for(let j=0; j<3; j++){
		const newBtn = document.createElement("button");
		newBtn.classList.add("nbutton");
		newBtn.id ="nb";
		newBtn.innerHTML = cho[j];

	    newBtn.onclick = () => {
			postcategory.value = category[cate];
			postbtn.value = newBtn.innerHTML;
			if(newBtn.innerHTML == wordlist[answer]){
				alert("正解!");
			}else{
				alert("不正解！");
			}
			document.flash.b_start.value = "start";
			flag =0;
			document.flash.word.value ="";
   		}
	    flash.appendChild(newBtn);
	    flash.appendChild(postbtn);
	    flash.appendChild(postcategory);
	    flash.appendChild(s3);
	}
}
