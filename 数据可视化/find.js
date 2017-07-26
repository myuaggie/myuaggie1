function find(str){
    $.getJSON('lol.json',function(data){
        //console.log(data['2017LPL春季赛']['0']['KDA']);
//KDA:2.5-6场均击杀:10-20场均死亡:5-20每分钟伤害:5w-7w每分钟补刀:26-37场均时长:32-39场均经济:1k6-2k
        var kmin=2.5;var kmax=6;
        var jsmin=10;var jsmax=20;
        var swmin=5;var swmax=20;
        var shmin=1700;var shmax=2400;
        var bdmin=26;var bdmax=37;
        var scmin=32;var scmax=45;
        var jjmin=53000;var jjmax=73000;
        var r=120;var rr=85;
        var r0=40;var rr0=28;
        var cx=500;var cy=500;
        // var mark=str.toJSON();
        // var club="战队".toJSON();
        // var kda="KDA".toJSON();
        // var cjjs="场均击杀".toJSON();
        // var cjsw="场均死亡".toJSON();
        // var sh="每分钟伤害".toJSON();
        // var cjsc="场均时长".toJSON();
        // var cjjj="场均经济".toJSON();
        // var bd="每分钟补刀".toJSON();
        var club1=data[str][0]['战队'];
        var club2=data[str][1]['战队'];
        var club3=data[str][2]['战队'];
        var club4=data[str][3]['战队'];
        var club5=data[str][4]['战队'];

        var t=document.getElementById("ddt");
        t.innerHTML=club1;
        t=document.getElementById("eet");
        t.innerHTML=club2;
        t=document.getElementById("fft");
        t.innerHTML=club3;
        t=document.getElementById("ggt");
        t.innerHTML=club4;
        t=document.getElementById("hht");
        t.innerHTML=club5;
        t=document.getElementById("d1");
        t.setAttribute("onmouseover","pop(evt,'dt1')");
        t.setAttribute("onmouseout","unpop(evt,'dt1')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("e1");
        t.setAttribute("onmouseover","pop(evt,'et1')");
        t.setAttribute("onmouseout","unpop(evt,'et1')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("f1");
        t.setAttribute("onmouseover","pop(evt,'ft1')");
        t.setAttribute("onmouseout","unpop(evt,'ft1')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("g1");
        t.setAttribute("onmouseover","pop(evt,'gt1')");
        t.setAttribute("onmouseout","unpop(evt,'gt1')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("h1");
        t.setAttribute("onmouseover","pop(evt,'ht1')");
        t.setAttribute("onmouseout","unpop(evt,'ht1')");
        t.setAttribute("fill-opacity","1");


        var k1=data[str][0]["KDA"];
        var k2=data[str][1]["KDA"];
        var k3=data[str][2]["KDA"];
        var k4=data[str][3]["KDA"];
        var k5=data[str][4]["KDA"];
        var kx1=-(k1-kmin)/(kmax-kmin)*rr+cx-rr0;
        var kx2=-(k2-kmin)/(kmax-kmin)*rr+cx-rr0;
        var kx3=-(k3-kmin)/(kmax-kmin)*rr+cx-rr0;
        var kx4=-(k4-kmin)/(kmax-kmin)*rr+cx-rr0;
        var kx5=-(k5-kmin)/(kmax-kmin)*rr+cx-rr0;
        var ky1=kx1;var ky2=kx2;var ky3=kx3;var ky4=kx4;var ky5=kx5;
        t=document.getElementById("d2");
        t.setAttribute("cx",kx1);
        t.setAttribute("cy",ky1);
        t.setAttribute("onmouseover","pop(evt,'dt2')");
        t.setAttribute("onmouseout","unpop(evt,'dt2')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("dt2");
        t.innerHTML=k1.toString();
        t=document.getElementById("e2");
        t.setAttribute("cx",kx2.toString());
        t.setAttribute("cy",ky2.toString());
        t.setAttribute("onmouseover","pop(evt,'et2')");
        t.setAttribute("onmouseout","unpop(evt,'et2')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("et2");
        t.innerHTML=k2.toString();
        t=document.getElementById("f2");
        t.setAttribute("cx",kx3.toString());
        t.setAttribute("cy",ky3.toString());
        t.setAttribute("onmouseover","pop(evt,'ft2')");
        t.setAttribute("onmouseout","unpop(evt,'ft2')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ft2");
        t.innerHTML=k3.toString();
        t=document.getElementById("g2");
        t.setAttribute("cx",kx4.toString());
        t.setAttribute("cy",ky4.toString());
        t.setAttribute("onmouseover","pop(evt,'gt2')");
        t.setAttribute("onmouseout","unpop(evt,'gt2')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("gt2");
        t.innerHTML=k4.toString();
        t=document.getElementById("h2");
        t.setAttribute("cx",kx5.toString());
        t.setAttribute("cy",ky5.toString());
        t.setAttribute("onmouseover","pop(evt,'ht2')");
        t.setAttribute("onmouseout","unpop(evt,'ht2')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ht2");
        t.innerHTML=k5.toString();


        var js1=data[str][0]["场均击杀"];
        var js2=data[str][1]["场均击杀"];
        var js3=data[str][2]["场均击杀"];
        var js4=data[str][3]["场均击杀"];
        var js5=data[str][4]["场均击杀"];
        var jsx1=cx;var jsx2=cx;var jsx3=cx;var jsx4=cx;var jsx5=cx;
        var jsy1=cy-r0-(js1-jsmin)/(jsmax-jsmin)*r;
        var jsy2=cy-r0-(js2-jsmin)/(jsmax-jsmin)*r;
        var jsy3=cy-r0-(js3-jsmin)/(jsmax-jsmin)*r;
        var jsy4=cy-r0-(js4-jsmin)/(jsmax-jsmin)*r;
        var jsy5=cy-r0-(js5-jsmin)/(jsmax-jsmin)*r;
        t=document.getElementById("d3");
        t.setAttribute("cx",jsx1.toString());
        t.setAttribute("cy",jsy1.toString());
        t.setAttribute("onmouseover","pop(evt,'dt3')");
        t.setAttribute("onmouseout","unpop(evt,'dt3')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("dt3");
        t.innerHTML=js1.toString();
        t=document.getElementById("e3");
        t.setAttribute("cx",jsx2.toString());
        t.setAttribute("cy",jsy2.toString());
        t.setAttribute("onmouseover","pop(evt,'et3')");
        t.setAttribute("onmouseout","unpop(evt,'et3')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("et3");
        t.innerHTML=js2.toString();
        t=document.getElementById("f3");
        t.setAttribute("cx",jsx3.toString());
        t.setAttribute("cy",jsy3.toString());
        t.setAttribute("onmouseover","pop(evt,'ft3')");
        t.setAttribute("onmouseout","unpop(evt,'ft3')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ft3");
        t.innerHTML=js3.toString();
        t=document.getElementById("g3");
        t.setAttribute("cx",jsx4.toString());
        t.setAttribute("cy",jsy4.toString());
        t.setAttribute("onmouseover","pop(evt,'gt3')");
        t.setAttribute("onmouseout","unpop(evt,'gt3')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("gt3");
        t.innerHTML=js4.toString();
        t=document.getElementById("h3");
        t.setAttribute("cx",jsx5.toString());
        t.setAttribute("cy",jsy5.toString());
        t.setAttribute("onmouseover","pop(evt,'ht3')");
        t.setAttribute("onmouseout","unpop(evt,'ht3')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ht3");
        t.innerHTML=js5.toString();

        var sw1=data[str][0]["场均死亡"];
        var sw2=data[str][1]["场均死亡"];
        var sw3=data[str][2]["场均死亡"];
        var sw4=data[str][3]["场均死亡"];
        var sw5=data[str][4]["场均死亡"];
        var swy1=-(sw1-swmin)/(swmax-swmin)*rr+cx-rr0;
        var swy2=-(sw2-swmin)/(swmax-swmin)*rr+cx-rr0;
        var swy3=-(sw3-swmin)/(swmax-swmin)*rr+cx-rr0;
        var swy4=-(sw4-swmin)/(swmax-swmin)*rr+cx-rr0;
        var swy5=-(sw5-swmin)/(swmax-swmin)*rr+cx-rr0;
        var swx1=(sw1-swmin)/(swmax-swmin)*rr+cx+rr0;
        var swx2=(sw2-swmin)/(swmax-swmin)*rr+cx+rr0;
        var swx3=(sw3-swmin)/(swmax-swmin)*rr+cx+rr0;
        var swx4=(sw4-swmin)/(swmax-swmin)*rr+cx+rr0;
        var swx5=(sw5-swmin)/(swmax-swmin)*rr+cx+rr0;
        t=document.getElementById("d4");
        t.setAttribute("cx",swx1.toString());
        t.setAttribute("cy",swy1.toString());
        t.setAttribute("onmouseover","pop(evt,'dt4')");
        t.setAttribute("onmouseout","unpop(evt,'dt4')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("dt4");
        t.innerHTML=sw1.toString();
        t=document.getElementById("e4");
        t.setAttribute("cx",swx2.toString());
        t.setAttribute("cy",swy2.toString());
        t.setAttribute("onmouseover","pop(evt,'et4')");
        t.setAttribute("onmouseout","unpop(evt,'et4')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("et4");
        t.innerHTML=sw2.toString();
        t=document.getElementById("f4");
        t.setAttribute("cx",swx3.toString());
        t.setAttribute("cy",swy3.toString());
        t.setAttribute("onmouseover","pop(evt,'ft4')");
        t.setAttribute("onmouseout","unpop(evt,'ft4')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ft4");
        t.innerHTML=sw3.toString();
        t=document.getElementById("g4");
        t.setAttribute("cx",swx4.toString());
        t.setAttribute("cy",swy4.toString());
        t.setAttribute("onmouseover","pop(evt,'gt4')");
        t.setAttribute("onmouseout","unpop(evt,'gt4')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("gt4");
        t.innerHTML=sw4.toString();
        t=document.getElementById("h4");
        t.setAttribute("cx",swx5.toString());
        t.setAttribute("cy",swy5.toString());
        t.setAttribute("onmouseover","pop(evt,'ht4')");
        t.setAttribute("onmouseout","unpop(evt,'ht4')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ht4");
        t.innerHTML=sw5.toString();

        var sh1=data[str][0]["每分钟伤害"];
        var sh2=data[str][1]["每分钟伤害"];
        var sh3=data[str][2]["每分钟伤害"];
        var sh4=data[str][3]["每分钟伤害"];
        var sh5=data[str][4]["每分钟伤害"];
        var shy1=cy;var shy2=cy;var shy3=cy;var shy4=cy;var shy5=cy;
        var shx1=cx+r0+(sh1-shmin)/(shmax-shmin)*r;
        var shx2=cx+r0+(sh2-shmin)/(shmax-shmin)*r;
        var shx3=cx+r0+(sh3-shmin)/(shmax-shmin)*r;
        var shx4=cx+r0+(sh4-shmin)/(shmax-shmin)*r;
        var shx5=cx+r0+(sh5-shmin)/(shmax-shmin)*r;
        if (sh1==0) {
            shx1=cx;shx2=cx;shx3=cx;shx4=cx;shx5=cx;
            shy1=cy;shy2=cy;shy3=cy;shy4=cy;shy5=cy;
        }
        t=document.getElementById("d5");
        t.setAttribute("cx",shx1.toString());
        t.setAttribute("cy",shy1.toString());
        t.setAttribute("onmouseover","pop(evt,'dt5')");
        t.setAttribute("onmouseout","unpop(evt,'dt5')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("dt5");
        t.innerHTML=sh1.toString();
        t=document.getElementById("e5");
        t.setAttribute("cx",shx2.toString());
        t.setAttribute("cy",shy2.toString());
        t.setAttribute("onmouseover","pop(evt,'et5')");
        t.setAttribute("onmouseout","unpop(evt,'et5')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("et5");
        t.innerHTML=sh2.toString();
        t=document.getElementById("f5");
        t.setAttribute("cx",shx3.toString());
        t.setAttribute("cy",shy3.toString());
        t.setAttribute("onmouseover","pop(evt,'ft5')");
        t.setAttribute("onmouseout","unpop(evt,'ft5')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ft5");
        t.innerHTML=sh3.toString();
        t=document.getElementById("g5");
        t.setAttribute("cx",shx4.toString());
        t.setAttribute("cy",shy4.toString());
        t.setAttribute("onmouseover","pop(evt,'gt5')");
        t.setAttribute("onmouseout","unpop(evt,'gt5')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("gt5");
        t.innerHTML=sh4.toString();
        t=document.getElementById("h5");
        t.setAttribute("cx",shx5.toString());
        t.setAttribute("cy",shy5.toString());
        t.setAttribute("onmouseover","pop(evt,'ht5')");
        t.setAttribute("onmouseout","unpop(evt,'ht5')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ht5");
        t.innerHTML=sh5.toString();

        var sc1=data[str][0]["场均时长"];
        var sc2=data[str][1]["场均时长"];
        var sc3=data[str][2]["场均时长"];
        var sc4=data[str][3]["场均时长"];
        var sc5=data[str][4]["场均时长"];
        var scx1=(sc1-scmin)/(scmax-scmin)*rr+cx+rr0;
        var scx2=(sc2-scmin)/(scmax-scmin)*rr+cx+rr0;
        var scx3=(sc3-scmin)/(scmax-scmin)*rr+cx+rr0;
        var scx4=(sc4-scmin)/(scmax-scmin)*rr+cx+rr0;
        var scx5=(sc5-scmin)/(scmax-scmin)*rr+cx+rr0;
        var scy1=scx1;var scy2=scx2;var scy3=scx3;var scy4=scx4;var scy5=scx5;
        t=document.getElementById("d6");
        t.setAttribute("cx",scx1.toString());
        t.setAttribute("cy",scy1.toString());
        t.setAttribute("onmouseover","pop(evt,'dt6')");
        t.setAttribute("onmouseout","unpop(evt,'dt6')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("dt6");
        t.innerHTML=sc1.toString();
        t=document.getElementById("e6");
        t.setAttribute("cx",scx2.toString());
        t.setAttribute("cy",scy2.toString());
        t.setAttribute("onmouseover","pop(evt,'et6')");
        t.setAttribute("onmouseout","unpop(evt,'et6')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("et6");
        t.innerHTML=sc2.toString();
        t=document.getElementById("f6");
        t.setAttribute("cx",scx3.toString());
        t.setAttribute("cy",scy3.toString());
        t.setAttribute("onmouseover","pop(evt,'ft6')");
        t.setAttribute("onmouseout","unpop(evt,'ft6')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ft6");
        t.innerHTML=sc3.toString();
        t=document.getElementById("g6");
        t.setAttribute("cx",scx4.toString());
        t.setAttribute("cy",scy4.toString());
        t.setAttribute("onmouseover","pop(evt,'gt6')");
        t.setAttribute("onmouseout","unpop(evt,'gt6')");
        t=document.getElementById("gt6");
        t.innerHTML=sc4.toString();
        t=document.getElementById("h6");
        t.setAttribute("cx",scx5.toString());
        t.setAttribute("cy",scy5.toString());
        t.setAttribute("onmouseover","pop(evt,'ht6')");
        t.setAttribute("onmouseout","unpop(evt,'ht6')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ht6");
        t.innerHTML=sc5.toString();

        var jj1=data[str][0]["场均经济"];
        var jj2=data[str][1]["场均经济"];
        var jj3=data[str][2]["场均经济"];
        var jj4=data[str][3]["场均经济"];
        var jj5=data[str][4]["场均经济"];
        var jjx1=cx;var jjx2=cx;var jjx3=cx;var jjx4=cx;var jjx5=cx;
        var jjy1=cy+r0+(jj1-jjmin)/(jjmax-jjmin)*r;
        var jjy2=cy+r0+(jj2-jjmin)/(jjmax-jjmin)*r;
        var jjy3=cy+r0+(jj3-jjmin)/(jjmax-jjmin)*r;
        var jjy4=cy+r0+(jj4-jjmin)/(jjmax-jjmin)*r;
        var jjy5=cy+r0+(jj5-jjmin)/(jjmax-jjmin)*r;
        t=document.getElementById("d7");
        t.setAttribute("cx",jjx1.toString());
        t.setAttribute("cy",jjy1.toString());
        t.setAttribute("onmouseover","pop(evt,'dt7')");
        t.setAttribute("onmouseout","unpop(evt,'dt7')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("dt7");
        t.innerHTML=jj1.toString();
        t=document.getElementById("e7");
        t.setAttribute("cx",jjx2.toString());
        t.setAttribute("cy",jjy2.toString());
        t.setAttribute("onmouseover","pop(evt,'et7')");
        t.setAttribute("onmouseout","unpop(evt,'et7')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("et7");
        t.innerHTML=jj2.toString();
        t=document.getElementById("f7");
        t.setAttribute("cx",jjx3.toString());
        t.setAttribute("cy",jjy3.toString());
        t.setAttribute("onmouseover","pop(evt,'ft7')");
        t.setAttribute("onmouseout","unpop(evt,'ft7')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ft7");
        t.innerHTML=jj3.toString();
        t=document.getElementById("g7");
        t.setAttribute("cx",jjx4.toString());
        t.setAttribute("cy",jjy4.toString());
        t.setAttribute("onmouseover","pop(evt,'gt7')");
        t.setAttribute("onmouseout","unpop(evt,'gt7')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("gt7");
        t.innerHTML=jj4.toString();
        t=document.getElementById("h7");
        t.setAttribute("cx",jjx5.toString());
        t.setAttribute("cy",jjy5.toString());
        t.setAttribute("onmouseover","pop(evt,'ht7')");
        t.setAttribute("onmouseout","unpop(evt,'ht7')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ht7");
        t.innerHTML=jj5.toString();

        var bd1=data[str][0]["每分钟补刀"];
        var bd2=data[str][1]["每分钟补刀"];
        var bd3=data[str][2]["每分钟补刀"];
        var bd4=data[str][3]["每分钟补刀"];
        var bd5=data[str][4]["每分钟补刀"];
        var bdx1=-(bd1-bdmin)/(bdmax-bdmin)*rr+cx-rr0;
        var bdx2=-(bd2-bdmin)/(bdmax-bdmin)*rr+cx-rr0;
        var bdx3=-(bd3-bdmin)/(bdmax-bdmin)*rr+cx-rr0;
        var bdx4=-(bd4-bdmin)/(bdmax-bdmin)*rr+cx-rr0;
        var bdx5=-(bd5-bdmin)/(bdmax-bdmin)*rr+cx-rr0;
        var bdy1=(bd1-bdmin)/(bdmax-bdmin)*rr+cx+rr0;
        var bdy2=(bd2-bdmin)/(bdmax-bdmin)*rr+cx+rr0;
        var bdy3=(bd3-bdmin)/(bdmax-bdmin)*rr+cx+rr0;
        var bdy4=(bd4-bdmin)/(bdmax-bdmin)*rr+cx+rr0;
        var bdy5=(bd5-bdmin)/(bdmax-bdmin)*rr+cx+rr0;
        t=document.getElementById("d8");
        t.setAttribute("cx",bdx1.toString());
        t.setAttribute("cy",bdy1.toString());
        t.setAttribute("onmouseover","pop(evt,'dt8')");
        t.setAttribute("onmouseout","unpop(evt,'dt8')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("dt8");
        t.innerHTML=bd1.toString();
        t=document.getElementById("e8");
        t.setAttribute("cx",bdx2.toString());
        t.setAttribute("cy",bdy2.toString());
        t.setAttribute("onmouseover","pop(evt,'et8')");
        t.setAttribute("onmouseout","unpop(evt,'et8')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("et8");
        t.innerHTML=bd2.toString();
        t=document.getElementById("f8");
        t.setAttribute("cx",bdx3.toString());
        t.setAttribute("cy",bdy3.toString());
        t.setAttribute("onmouseover","pop(evt,'ft8')");
        t.setAttribute("onmouseout","unpop(evt,'ft8')");
        t.setAttribute("fill-opacity","1");
        t=document.getElementById("ft8");
        t.innerHTML=bd3.toString();
        t=document.getElementById("g8");
        t.setAttribute("fill-opacity","1");
        t.setAttribute("cx",bdx4.toString());
        t.setAttribute("cy",bdy4.toString());
        t.setAttribute("onmouseover","pop(evt,'gt8')");
        t.setAttribute("onmouseout","unpop(evt,'gt8')");
        t=document.getElementById("gt8");
        t.innerHTML=bd4.toString();
        t=document.getElementById("h8");
        t.setAttribute("fill-opacity","1");
        t.setAttribute("cx",bdx5.toString());
        t.setAttribute("cy",bdy5.toString());
        t.setAttribute("onmouseover","pop(evt,'ht8')");
        t.setAttribute("onmouseout","unpop(evt,'ht8')");
        t=document.getElementById("ht8");
        t.innerHTML=bd5.toString();

        t=document.getElementById("dd");
        t.setAttribute("points","460,500,"+kx1.toString()+","+ky1.toString()+","+
            jsx1.toString()+","+jsy1.toString()+","+swx1.toString()+","+swy1.toString()+","+
            shx1.toString()+","+shy1.toString()+"+"+scx1.toString()+","+scy1.toString()+","+
            jjx1.toString()+","+jjy1.toString()+","+bdx1.toString()+","+bdy1.toString());
        t.setAttribute("onmouseover","pop(evt,'ddt')");
        t.setAttribute("onmouseout","unpop(evt,'ddt')");
        t.setAttribute("stroke","#DB4D6D")
     //   t.setAttribute("onmousedown","all('at1')");
        t.setAttribute("stroke-opacity","1");

        t=document.getElementById("ee");
        t.setAttribute("points","430,500,"+kx2.toString()+","+ky2.toString()+","+
            jsx2.toString()+","+jsy2.toString()+","+swx2.toString()+","+swy2.toString()+","+
            shx2.toString()+","+shy2.toString()+"+"+scx2.toString()+","+scy2.toString()+","+
            jjx2.toString()+","+jjy2.toString()+","+bdx2.toString()+","+bdy2.toString());
        t.setAttribute("onmouseover","pop(evt,'eet')");
        t.setAttribute("onmouseout","unpop(evt,'eet')");
        t.setAttribute("stroke","#DB4D6D")
      //  t.setAttribute("onmousedown","all('at2')");
        t.setAttribute("stroke-opacity","1");

        t=document.getElementById("ff");
        t.setAttribute("points","400,500,"+kx3.toString()+","+ky3.toString()+","+
            jsx3.toString()+","+jsy3.toString()+","+swx3.toString()+","+swy3.toString()+","+
            shx3.toString()+","+shy3.toString()+"+"+scx3.toString()+","+scy3.toString()+","+
            jjx3.toString()+","+jjy3.toString()+","+bdx3.toString()+","+bdy3.toString());
        t.setAttribute("onmouseover","pop(evt,'fft')");
        t.setAttribute("onmouseout","unpop(evt,'fft')");
        t.setAttribute("stroke","#DB4D6D")
      //  t.setAttribute("onmousedown","all('at3')");
        t.setAttribute("stroke-opacity","1");

        t=document.getElementById("gg");
        t.setAttribute("points","370,500,"+kx4.toString()+","+ky4.toString()+","+
            jsx4.toString()+","+jsy4.toString()+","+swx4.toString()+","+swy4.toString()+","+
            shx4.toString()+","+shy4.toString()+"+"+scx4.toString()+","+scy4.toString()+","+
            jjx4.toString()+","+jjy4.toString()+","+bdx4.toString()+","+bdy4.toString());
        t.setAttribute("onmouseover","pop(evt,'ggt')");
        t.setAttribute("onmouseout","unpop(evt,'ggt')");
        t.setAttribute("stroke","#DB4D6D")
      //  t.setAttribute("onmousedown","all('at4')");
        t.setAttribute("stroke-opacity","1");

        t=document.getElementById("hh");
        t.setAttribute("points","340,500,"+kx5.toString()+","+ky5.toString()+","+
            jsx5.toString()+","+jsy5.toString()+","+swx5.toString()+","+swy5.toString()+","+
            shx5.toString()+","+shy5.toString()+"+"+scx5.toString()+","+scy5.toString()+","+
            jjx5.toString()+","+jjy5.toString()+","+bdx5.toString()+","+bdy5.toString());
        t.setAttribute("onmouseover","pop(evt,'hht')");
        t.setAttribute("onmouseout","unpop(evt,'hht')");
        t.setAttribute("stroke","#DB4D6D")
       // t.setAttribute("onmousedown","all('at5')");
        t.setAttribute("stroke-opacity","1");

        var at1= data[str][0]["all"];
        var at2=data[str][1]["all"];
        var at3=data[str][2]["all"];
        var at4=data[str][3]["all"];
        var at5=data[str][4]["all"];

        t=document.getElementById("at1");
        t.innerHTML=at1;
        t.setAttribute("opacity","0");
        t=document.getElementById("at2");
        t.innerHTML=at2;
        t.setAttribute("opacity","0");
        t=document.getElementById("at3");
        t.innerHTML=at3;
        t.setAttribute("opacity","0");
        t=document.getElementById("at4");
        t.innerHTML=at4;
        t.setAttribute("opacity","0");
        t=document.getElementById("at5");
        t.innerHTML=at5;
        t.setAttribute("opacity","0");
        t=document.getElementById("i_we");
        t.setAttribute("opacity","0");


        t=document.getElementById("dd");
        t.setAttribute("onmousedown","all_('at1')");
        t=document.getElementById("ee");
        t.setAttribute("onmousedown","all_('at2')");
        t=document.getElementById("ff");
        t.setAttribute("onmousedown","all_('at3')");
        t=document.getElementById("gg");
        t.setAttribute("onmousedown","all_('at4')");
        t=document.getElementById("hh");
        t.setAttribute("onmousedown","all_('at5')");
        if (club1=="WE") {
            t=document.getElementById("dd");
            t.setAttribute("stroke","red");
        }
        if (club2=="WE") {
            t = document.getElementById("ee");
            t.setAttribute("stroke", "red");
        }
        if (club3=="WE") {
            t = document.getElementById("ff");
            t.setAttribute("stroke", "red");
        }
        if (club4=="WE") {
            t = document.getElementById("gg");
            t.setAttribute("stroke", "red");
        }
        if (club5=="WE") {
            t = document.getElementById("hh");
            t.setAttribute("stroke", "red");
        }

    })

}




