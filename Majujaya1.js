
const keyLisensi = "NjM1MjMxMzIwMTMy";
const IDLisensi = "AKfycbzOGuUb45ZVr92pFKYoQHsjjPJ5dfoufs24RWVavRVw2JIF50P59OWwX_rdYTVImOjUKA";
let urlLisensi = "https://script.google.com/macros/s/" + IDLisensi + "/exec";
license(); // load license

function license() {
    function dkrypt(data) {
        function isBase64(str) {
            try {
                return btoa(atob(str)) == str;
            } catch (err) {
                return false;
            }
        }
        if (isBase64(data)) {
            data = atob(data);
            data = data.replaceAll('XXX', '.');
            data = data.replaceAll('YY', '-');
            data = data.replaceAll('O5', 'a');
            data = data.replaceAll('E4', 'i');
            data = data.replaceAll('U3', 'u');
            data = data.replaceAll('I2', 'e');
            data = data.replaceAll('A1', 'o');

            function reverseString(str) {
                const arrayStrings = str.split("");
                const reverseArray = arrayStrings.reverse();
                const joinArray = reverseArray.join("");
                return joinArray;
            }
            data = reverseString(data); // balikeun
            return data; // ambil hanya hostname
        } else {
            return '';
        }
    }

    function notice_html(text) {
        var html = '\
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet">\
            <style>* { font-family: "Rubik", sans-serif; font-weight:400; box-sizing:border-box;margin:0;padding:0; text-decoration:none; color:#636363; } b { font-weight: 500; color:#232323; }</style>\
            <div id="notice_html" style="display:flex;background:#fafafa;min-height:100vh;text-align:center;">\
                <div style="margin:auto;width:480px;max-width:80%;background:white;padding:30px;border-radius:10px;border:1px solid #ddd;">\
                    <svg style="fill:#636363;width:100px;height:100px;display:block;margin:0 auto 20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"/></svg>\
                    <h2><b>Peringatan</b> :</h2>\
                    <br>\
                    <p>' + text + '</p>\
                    <br>\
                    <hr style="border:0;border-top:1px solid #ddd;">\
                    <br>\
                    <a href="https://tokosourcecodeachsin.blogspot.com/?m=1" target="_blank" style="opacity:.7;font-size:70%;letter-spacing:0px;">https://tokosourcecodeachsin.blogspot.com</a>\
                </div>\
            </div>\
        ';
        return document.body.innerHTML = html;
    }
  if (typeof keyLisensi == "undefined"){
    notice_html("<b>Cie... lisensinya dihapus</b><br><br>Source Code Milik <b>Achsin UI/UX (083125227588)</b><br>Klik Toko dibawah 👇");
  } else {
    if (keyLisensi == ""){
      notice_html("<b>Cie... lisensinya dihapus</b><br><br>Source Code Milik <b>Achsin UI/UX (083125227588)</b><br>Klik Toko dibawah 👇");
    } else {
      const getLisensi = dkrypt(keyLisensi);
      if (getLisensi == ""){
        notice_html("<b>Cie... mau rubah lisensi nih...</b><br><br>Source Code Milik <b>Achsin UI/UX (083125227588)</b><br>Klik Toko dibawah 👇");
      } else {
        var url = urlLisensi+"?action=read";
        $.getJSON(url, function (data){
          var respon = data.records.reverse();
          var date = "";
          for(i=0; i<respon.length; i++){
            if(respon[i]){
              var id = respon[i].id.toString();
              if (getLisensi == id){
                date += dkrypt(respon[i].license);
              }               
            }
          }
          if (date === ""){
            notice_html("<b>ID Lisensi Tidak Tersedia</b><br><br>Source Code Milik <b>Achsin UI/UX (083125227588)</b><br>Klik Toko dibawah 👇");
          } else {
          const invalid = new Date(date);
          if (invalid == "Invalid Date"){
            notice_html("<b>Tanggal Tidak Sesuai Format</b><br><br>Source Code Milik <b>Achsin UI/UX (083125227588)</b><br>Klik Toko dibawah 👇");
          } 
            else {
                  var e = new Date(date) - new Date().getTime();
                  var t = setInterval(function () {
                    e -= 1e3;
                    if (e > 0 ){
                      clearInterval(t);
                      console.log('Developed by. Ahsin');
                    } else if (e < 0) {
                      notice_html('<b>Masa Aktif Telah Berakhir, </b> Sampai tanggal <br><b>' + date + '</b><br><br>Yuk perpanjang lisensi/buat aplikasi serupa ke <b>Achsin UI/UX (083125227588)</b><br>Klik Toko dibawah 👇')
                    }
                  }, 1e3);
                }
          }
        }); // penutup json
      }
    }
  }
}
var cssHTML = "<style>*{-webkit-tap-highlight-color:transparent}.AchsinulUmamBu{position:fixed;float:left;color:dark;margin-left:7px;width:70%;margin-top:13px;z-index:999999;font-size:27px;font-weight: 600;font-family:'Arial';}.text-UcapanAchsinulUmam{margin-left:12px;font-size:19px;}.menudark{background-color: #2A2A2A;color: white}.menu-bg{background:0 0;border-radius:inherit;width:100%;height:auto;color:dark;padding:0 10px;justify-content:space-between;overflow:hidden;margin-top:-1%}.menu-item .icon{font-size:24px;transition:.3s ease-out;transform:translateY(12px);margin-top:0}.menu-item .label{transform:translateY(50px);color:dark;padding:15px 19px 30px;font-size:14px;font-weight:700;margin-top:-5px;text-align:center;background:linear-gradient(to bottom,#FFDEAB -10%,rgba(255,255,255,0) 90%);clip-path:polygon(5% 100%,25% 0px,75% 0px ,95% 100%)}.menu-item .circle{width:45px;height:3px;border-radius:12px;background:var(--AchsinulUmamB2);transform:translateX(-124px);opacity:0;margin-top:23px}.menu-item.active .circle{transform:translateX(0);transition:.3s linear;animation:.3s linear bounce;opacity:1}.menu-item.active .icon{transform:translateY(-80px);transition:.3s ease-out;animation:.2s ease-out fadeOut}.menu-item.active .label{transform:translateY(-18px);transition:.3s ease-in-out}@keyframes bounce{0%{transform:translateX(-130px);opacity:.4;width:10px;border-radius:50%}40%{transform:translateX(-78px);opacity:.6;width:70px;border-radius:30%}100%{transform:translateX(0);opacity:1;width:10px;border-radius:50%}}@keyframes fadeOut{from{opacity:1}to{opacity:.5}}.kotak-headerdark{background-color: #2A2A2A;color: white}.kotak-header3dark{background-color: #000;color: white}.kotak-header31dark{background-color: #2A2A2A;color: white}.sscrollmenu2{position:relative;overflow:auto;white-space:nowrap;border-radius:0;margin:34px 0 0;line-height:20px;float:center;z-index:10;height:165px}.sscrollmenu2dark{background-color:#2a2a2a}.sscrollmenu2 a{display:inline-block;color:#fff;text-align:center;text-decoration:none;cursor:none;user-select:none;font-size:14px;width:15.5%;font-family:'Open Sans',sans-serif;margin-bottom:1%;margin-top:11%;border-radius:35px;padding:7px 1px 20px;background:var(--AchsinulUmamB1)}.imgs17{width:65%;padding:6px;margin-bottom:10px;border-radius:25px}.TitleCarddark{background-color: #2A2A2A;color: white}.aChsinulUmamTCarddark{background-color: #2A2A2A;color: white}.boxslide .owl-stage-outer .owl-stage{display:flex;position:relative;width:100%!important;top:0;overflow:hidden;transform:none!important;transition:none!important}.boxslide.owl-carousel .owl-item{background-size:cover;background-position:center;background-repeat:no-repeat;height:24vh;border-radius:10px;flex:0.2;position:relative;transition:flex .5s ease-in;color:#fff;cursor:pointer;margin:5px}.boxslide.owl-carousel .owl-item.cloned{display:none}.btekss{background:linear-gradient(180deg,hsla(var(--hue),24%,40%,.3) 0,hsla(var(--hue),24%,4%,1) 95%);backdrop-filter:blur(2px);width:100%;height:40.5%;bottom:0;border-radius:0 0 10px 10px;position:absolute;z-index:1111111}.bgpes{width:100%;background:0 0;border-radius:0;padding:16px;margin-top:55px;z-index:1111112}.bgpes pesanen{width:91%;background:#e5e5e5;height:42px;display:flex;align-items:center;border:0 solid #ccc;border-radius:18px;position:fixed;padding:10px;margin-top:-5px;z-index:1111112}.bgpesdark pesanen{background-color:#000;color:#fff}pesanen label{color:dark;height:100%;z-index:2;width:50%;display:flex;cursor:pointer;font-size:15px;position:relative;align-items:center;justify-content:center;transition:color .3s}#wadah-1:checked~pesanen .wadah-1,#wadah-2:checked~pesanen .wadah-2{color:#00000;font-weight:700}pesanen label:nth-child(2){width:40%}pesanen .Suwwuit{position:absolute;height:79%;border-radius:18px;background:#fff;transition:.3s}pesanen .Suwwuitdark{background-color:#2a2a2a;color:#fff}#wadah-1:checked~pesanen .Suwwuit{left:.2%;width:50%;transform:translateX(5%)}#wadah-2:checked~pesanen .Suwwuit{left:71.8%;width:50%;transform:translateX(-50%)}.bgpes input[type=radio]{display:none}.kartu-area{overflow:hidden}.kartu-area .kartus{display:flex;width:400%}.kartus .row{width:25%}.kartus .row-1{transition:.3s}#wadah-1:checked~.kartu-area .kartus .row-1{margin-left:0}#wadah-2:checked~.kartu-area .kartus .row-1{margin-left:-25.1%}.row .price-details{margin:70px 0;text-align:center;padding-bottom:25px;border-bottom:0 solid #e6e6e6}.cardosdark{background-color: #2A2A2A;color: white}.mgiczdark{filter:invert(100%);color: white}.AchsinBox{z-index:-5;display:inline-block;width:98%;height:auto;margin-right:5px;margin-left:1px;margin-top:25px;box-shadow:0 2px 2px 1px rgba(0,0,0,.1);border-radius:16px;padding-bottom:1px;background:#fff}.AchsinBoxdark{background:#2a2a2a}.AchsinulUmamV::after,.AchsinulUmamV::before{content:'';position:absolute;top:-15px;width:35px;height:35px;border-radius:50px;z-index:0}.AchsinulUmamV::before{background:#fff;box-shadow:inset 0 0 0 #dde1e7,inset 4px 0 2px rgba(94,104,121,.292);right:-5%}.AchsinulUmamVdark::before{background:#000;box-shadow:0 0 0 rgba(0,0,0,.16)}.AchsinulUmamV::after{background:#fff;margin-left:-5%;box-shadow:inset -3px -3px 7px #ffffffb0,inset -6px -1px 3px rgba(94,104,121,.692)}.AchsinulUmamVdark::after{background:#000;box-shadow:0 0 0 rgba(0,0,0,.16)}.AchsinulumamV{border-top:2px dashed grey;border-bottom-left-radius:13px;border-bottom-right-radius:13px;color:dark;white-space:normal;padding:1px;text-align:Left}.UmamMinimal,.UmamMinimal1{position:relative;border-radius:0;z-index:100;padding:0}.UmamMinimal{width:25px;height:16px;filter:invert(40%) sepia(1%) saturate(0%) hue-rotate(68deg) brightness(83%) contrast(90%);top:21px;left:18px}.UmamMinimal1{width:23px;top:19px;left:10px}.BerlakuHachsin,.TanggalAchsin{width:auto;height:auto;font-family:'Open Sans',sans-serif;position:absolute}.BerlakuHachsin{font-weight:400;font-size:13px;color:grey;top:14px;left:27.5%;z-index:2}.TanggalAchsin{font-weight:700;font-size:16px;color:dark;top:32px;left:27%;z-index:2}.MinimalTAchsin,.TransaksiAchsin{width:auto;height:auto;font-family:'Open Sans',sans-serif;position:absolute;left:35%;z-index:2}.MinimalTAchsin{font-weight:400;font-size:13px;color:grey;top:14px}.TransaksiAchsin{font-weight:700;font-size:16px;color:dark;top:31px}.tabel1,.tabel2{position:relative;margin-left:5.4%;font-family:Arial;width:89.5%;z-index:0}.tabel1{margin-top:18%;padding:8px 0 40px;background:#fff;box-shadow:1px 2px 9px 0 rgba(0,0,0,.1);border-radius:15px}.tabel1dark,.tabel2dark{background:#2a2a2a;color:#fff}.tabel2{margin-top:8.5%;background:linear-gradient(to right top,var(--AchsinulUmamB1),#6fd9d3);padding:0 0 11px;height:auto;border-radius:17px}.header-chat p{font-size:14px;line-height:1.7;margin:0}.info-avatar{position:relative}.info-avatar img{border-radius:100%;width:50px;float:left;padding:3px;box-shadow: inset -3px -3px 7px #ffffffb0, inset 3px 3px 5px rgba(94, 104, 121, 0.692);margin:0 10px 0 0}a.informasi{padding:20px;display:block;overflow:hidden;animation-name:showhide;animation-duration:2.5s}a.informasi:hover{background:#fff}.info-chat span{display:block}#get-label,span.chat-label{font-size:12px;color:#000}#get-nama,span.chat-nama{margin:5px 0 0;font-size:15px;font-weight:700;color:#000}#get-label,#get-nama{color:#fff}span.my-number{display:none}.blanter-msg{color:#000;padding:20px;font-size:12.5px;text-align:center;border-top:1px solid #fff}textarea#chat-input{color:#000;border:none;font-family:'Arial',sans-serif;border-radius:5px;background:#ff000000;box-shadow: inset -3px -3px 7px #ffffffb0, inset 3px 3px 5px rgba(94, 104, 121, 0.692);width:100%;height:35px;outline:none;resize:none}a#send-it{color:#000;width:40px;margin:-5px 0 0 5px;font-weight:700;padding:8px;background:#ff000000;box-shadow: inset -3px -3px 7px #ffffffb0, inset 3px 3px 5px rgba(94, 104, 121, 0.692);border-radius:10px}.first-msg{background:rgb(146 151 179 / 13%);padding:30px;text-align:center}.first-msg span{background:#ff000000;color:#000;box-shadow: -3px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945);font-size:14.2px;line-height:1.7;border-radius:10px;padding:15px 20px;display:inline-block}.start-chat .blanter-msg{display:flex}#get-number{display:none}a.close-chat{position:absolute;top:5px;right:15px;color:#fff;font-size:30px}@keyframes showhide{from{transform:scale(.5);opacity:0}}@keyframes showchat{from{transform:scale(0);opacity:0}}@media screen and (max-width:480px){#whatsapp-chat{width:auto;left:5%;right:5%;font-size:80%}}.hide{display:none;animation-name:showhide;animation-duration:1.5s;transform:scale(1);opacity:1}.show{display:block;animation-name:showhide;animation-duration:1.5s;transform:scale(1);opacity:1}.BungT .bunT-header>div{font-size:15px;font-family:Arial;position:relative;width:auto;margin-top:0;text-align:left;padding:8px;z-index:2;color:grey;cursor:pointer;margin-left:4px;margin-right:3px;background:#ff000000;border:1px solid var(--AchsinulUmamB1);transition:.3s ease-in-out;border-radius:17px;height:31px;line-height:14px}.BungT .bunT-header>div.active110{font-size:15px;color:#fff;background:linear-gradient(to right top,var(--AchsinulUmamB2),#f8cf90);height:31px;line-height:14px;margin-top:0}.BungT .bunT-body{position:relative;padding:0;border-top:1px solid #ff000000;height:calc(100% - 50px);overflow:hidden}.BungT .bunT-body>div{position:absolute;opacity:0;top:-100%;transform:translateY(-10px);transition:opacity .3s ease-in-out,transform .3s ease-in-out}.BungT .bunT-body>div.active110{transform:translateY(0);top:0;opacity:1}.box-product,.layout-image a{position:relative;display:block}.box-product{padding:20px;margin-top:-35px}.layout-box,.title-layout{display:-moz-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;align-items:center}.layout-box{display:flex;justify-content:space-between;margin-bottom:3rem}.title-layout{font-family:'Google Sans Text',Arial,Helvetica,sans-serif;margin:0;line-height:1.75rem;display:flex;font-size:1.01rem;font-weight:400;transition:color .3s}.layout-info,.layout-list{display:-ms-flexbox;display:-webkit-box}.layout-list{display:-moz-box;display:-webkit-flex;display:flex;align-items:center}.layout-list-grid{display:grid;gap:1.4rem;grid-template-columns:repeat(2,1fr)}layout-list-grid.list{grid-template-columns:repeat(3,1fr)}@media screen and (max-width:768px){.layout-list-grid{display:grid;gap:1.3rem;grid-template-columns:repeat(1,1fr)}.layout-list-grid.list{grid-template-columns:repeat(2,1fr)}}.layout-wrap-list{transition:.3s;overflow:hidden;border-radius:14px;background:#fff;box-shadow:1px 2px 9px 0 rgba(0,0,0,.1)}.layout-wrap-listdark{background-color: #2A2A2A;color: white}.layout-isi{display:grid;grid-template-areas:'gambar judul' 'gambar info';grid-template-columns:minmax(0,34%) 1fr;grid-template-rows:unset}.list .layout-isi{grid-template-rows:auto 1fr auto;grid-template-areas:unset;grid-template-columns:unset}.layout-image{background-color:#fff;background-image:linear-gradient(to right,#f6f7f8 8%,#e4e4e4 18%,#f6f7f8 33%);background-size:800px 104px;animation:1.5s linear infinite kilau;-moz-animation:1.5s linear infinite kilau;-webkit-animation:1.5s linear infinite kilau;-o-animation:1.5s linear infinite kilau;overflow:hidden;transition:.3s;border-radius:7px 0 0 7px;grid-area:gambar}.list .layout-image{border-radius:0;grid-area:unset}.layout-image img{width:100%;height:100%;transition:.3s}.layout-image .keterangan{position:absolute;top:8px;left:8px;padding:2px 10px;background:var(--AchsinulUmamB1);color:#fff;outline:0;text-decoration:none;animation:2s infinite blinkText;font-size:11px;font-weight:500;line-height:1.2;border:1px solid #ddd;border-radius:12px}.layout-title{font-size:1px;font-weight:450;margin:.6rem;transition:color .3s}.layout-title a{text-decoration:none;color:000;font-size:13px;font-weight:bold}.layout-titledark a{color: white}.layout-title p{font-size:11px;font-weight:500;margin:2px 0}.layout-info{display:-moz-box;display:-webkit-flex;display:flex;font-size:clamp(.85rem, calc(.8071rem + .1875vw), 1rem);justify-content:space-between;margin:1rem;overflow:hidden;align-items:flex-end;grid-area:info}.list .layout-info{align-items:unset;grid-area:unset}.menu-listmode{position:absolute;padding:5px 10px;background:#fff;right:0;width:100%;float:left;margin-top:-30px;z-index:1}.listmode-switch{position:relative;float:left;top:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:15px}.listmode-switch .switch-title{font-size:.98rem;font-weight:500;position:relative;text-align:left;float:left;width:100%;color:#red}.layout-rating{position:relative;color:#1c1c1c}.box-prosentase{border:.5px orange;border-radius:25px;height:6px;background:#dde1e7;width:100%!important;margin-right:0;overflow:hidden;min-height:auto;font-weight:500;margin-top:24px;margin-left:0;align-items:center;text-align:center;display:flex;position:relative}.progress-prosentase{height:15px;text-align:center;position:relative;background:var(--AchsinulUmamB2)}.teks-prosentase{margin-left:10px;position:absolute;font-size:40%;color:#fff;margin-top:0;margin-bottom:0;display:inline-block}</style>";
$("body").append(cssHTML);
var h = new Date().getHours();
    var textUcapanSelamatUmam = [
    {"text": "Awali harimu dengan Bismillah dan secangkir coffiee, Seeyou. selamat beraktivitas", "Achsinulumamimage": "https://lh3.googleusercontent.com/u/0/d/1EKlN6UsTTzQsVJDD92VbTSiUaVOMY2rE", "UcapanAchsinulUmam": "Good Morning"},
    {"text": "Waktunya makan siang, pilih resto terdekat agar pesananmu lebih cepat sampai.#Ordernow", "Achsinulumamimage": "https://lh3.googleusercontent.com/u/0/d/1EKlN6UsTTzQsVJDD92VbTSiUaVOMY2rE", "UcapanAchsinulUmam": "Good Afternoon"},
    {"text": "Saatnya bersantay, Yuk pesan Coffiee di resto favoritemu. #OrderNow", "Achsinulumamimage": "https://lh3.googleusercontent.com/u/0/d/1EKlN6UsTTzQsVJDD92VbTSiUaVOMY2rE", "UcapanAchsinulUmam": "Good Evening"},
    {"text": "Butuh makanan cepat saji untuk menemani dinermu, Pesan aja di golif. #OrderNow", "Achsinulumamimage": "https://lh3.googleusercontent.com/u/0/d/1EKlN6UsTTzQsVJDD92VbTSiUaVOMY2rE", "UcapanAchsinulUmam": "Good Night"},
    ];
    if (h >= 4 && h < 10) {
      $(".Achsinulumamimage-UcapanAchsinulUmam").html("<img src='"+textUcapanSelamatUmam[0].Achsinulumamimage+"' width='24' height='24' alt='cuaca'/>");
      $(".text-UcapanSelamatUmam").text(textUcapanSelamatUmam[0].text);
      $(".text-UcapanAchsinulUmam").text(textUcapanSelamatUmam[0].UcapanAchsinulUmam);                  
    }
    if (h >= 10 && h < 15) {
      $(".Achsinulumamimage-UcapanAchsinulUmam").html("<img src='"+textUcapanSelamatUmam[1].Achsinulumamimage+"' width='24' height='24' alt='cuaca'/>");                    
      $(".text-UcapanSelamatUmam").text(textUcapanSelamatUmam[1].text);   
      $(".text-UcapanAchsinulUmam").text(textUcapanSelamatUmam[1].UcapanAchsinulUmam);                    
    }
    if (h >= 15 && h < 18) {
       $(".Achsinulumamimage-UcapanAchsinulUmam").html("<img src='"+textUcapanSelamatUmam[2].Achsinulumamimage+"' width='24' height='24' alt='cuaca'/>");                   
       $(".text-UcapanSelamatUmam").text(textUcapanSelamatUmam[2].text); 
       $(".text-UcapanAchsinulUmam").text(textUcapanSelamatUmam[2].UcapanAchsinulUmam);                   
    }
    if (h >= 18 || h < 4) {
       $(".Achsinulumamimage-UcapanAchsinulUmam").html("<img src='"+textUcapanSelamatUmam[3].Achsinulumamimage+"' width='24' height='24' alt='cuaca'/>");                  
       $(".text-UcapanSelamatUmam").text(textUcapanSelamatUmam[3].text); 
       $(".text-UcapanAchsinulUmam").text(textUcapanSelamatUmam[3].UcapanAchsinulUmam);                  
    }            

var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    center: false,
    loop: true, 
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });
  $(".boxslide.owl-carousel .owl-item .panel").each(function(){
     var img = $(this).attr("style");
     $(this).parents(".owl-item").attr("style",img);
     $(this).parents(".owl-stage").attr("style","");
  });
  $(".boxslide.owl-carousel .owl-item").each(function(){
    $(this).click(function(){
      $(".boxslide.owl-carousel .owl-item").removeClass("active");
      $(this).addClass("active");
    });
  });
var url_produk = '';
  var halaman = 1;
  // var page = 0;
  function get_data() {
    $.ajax({
      url: 'https://achsinfrontand.my.id/Produktes1/majujayastok.php',
      data: {
        // q: '1',
        // page: page,
        halaman: halaman
      },
      method: 'POST',
      dataType: 'JSON',
      success: function(data) {
        try {
          var xhtml = '';
          data.forEach(function(element) {
            console.log(element);
            xhtml += '\
        <article class="layout-wrap-list">\
          <div class="layout-bungkus">\
            <div class="layout-isi">\
              <div class="layout-image">\
                <a href="https://jgjk.mobi/p/'+element.Gambar.substr(-17, 13)+'">\
                  <div class="keterangan">Stock '+element.Stok+'</div>\
                  <img src="'+element.Gambar+'" alt="'+element.Nama+'" width="300" height="300"/>\
                </a>\
              </div>\
              <div class="layout-title">\
                <a href="https://jgjk.mobi/p/'+element.Gambar.substr(-17, 13)+'">'+element.Nama+'</a>\
                <p>Rekomendasi produk discount</p>\
              ';
              if (element.Diskon != ""){
              xhtml += '\
              <div class="layout-harga diskon" style="text-decoration: line-through;color:grey;float:left;font-size:10px;margin-top:23px;">'+element.Diskon+'</div>\
                <div class="layout-harga" style="margin-top:5px;padding:11px 1px 10px 1px;float:right;">'+element.Harga+'</div>\
              ';
              }
              xhtml += '\
              <div class="box-prosentase">\
                <div class="progress-prosentase" style="width: '+element.Persen+'"></div>\
              </div>\
              ';
              xhtml += '\
              </div>\
            </div>\
          </div>\
        </article>\
            ';
          });
          $("#daata-product").html(xhtml);
        } catch (err) {
          alert('Terjadi Kesalahan. 01\n\n' + err.responseText);
        }
      },
      error: function(err) {
        alert('Terjadi Kesalahan. 02\n\n' + err.responseText);
      }
    });
    halaman++;
  }
  
get_data();
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   document.querySelectorAll('.dot').forEach(dom => dom.classList.toggle("dotdark"));
   document.querySelectorAll('.menu').forEach(dom => dom.classList.toggle("menudark"));
document.querySelectorAll('.kotak-header').forEach(dom => dom.classList.toggle("kotak-headerdark"));
document.querySelectorAll('.sscrollmenu2').forEach(dom => dom.classList.toggle("sscrollmenu2dark"));
document.querySelectorAll('.fi-rs-bell').forEach(dom => dom.classList.toggle("fi-rs-belldark"));
document.querySelectorAll('.aChsinulUmamTCard').forEach(dom => dom.classList.toggle("aChsinulUmamTCarddark"));
document.querySelectorAll('.tab-header').forEach(dom => dom.classList.toggle("tab-headerdark"));
document.querySelectorAll('.TitleCard').forEach(dom => dom.classList.toggle("TitleCarddark"));
document.querySelectorAll('.kotak-header3').forEach(dom => dom.classList.toggle("kotak-header3dark"));
document.querySelectorAll('.kotak-header31').forEach(dom => dom.classList.toggle("kotak-header31dark"));
document.querySelectorAll('.cardos').forEach(dom => dom.classList.toggle("cardosdark"));
document.querySelectorAll('.mgicz').forEach(dom => dom.classList.toggle("mgiczdark"));
document.querySelectorAll('.bgpes').forEach(dom => dom.classList.toggle("bgpesdark"));
document.querySelectorAll('.Suwwuit').forEach(dom => dom.classList.toggle("Suwwuitdark"));
document.querySelectorAll('.tabel1').forEach(dom => dom.classList.toggle("tabel1dark"));
document.querySelectorAll('.layout-title').forEach(dom => dom.classList.toggle("layout-titledark"));
document.querySelectorAll('.layout-wrap-list').forEach(dom => dom.classList.toggle("layout-wrap-listdark"));
}
function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){
        document.getElementById("alert").style.display = "none";
    }, 1000);
}

$(".menu-item").click(function () {
  $(".menu-item").removeClass("active");
  $(this).addClass("active");
  $("#AHSINULUMAM-tab .AHSINULUMAM-tab").hide();
  var a = $(this).attr("data-id");
      console.log(a);
  $("#" + a).show();
});
let BungT = document.querySelector(".BungT");
let bunTHeader = BungT.querySelector(".bunT-header");
let bunTBody = BungT.querySelector(".bunT-body");

let bunTHeaderNodes = BungT.querySelectorAll(".bunT-header > div");
let bunTBodyNodes = BungT.querySelectorAll(".bunT-body > div");

for(let i=0;i<bunTHeaderNodes.length;i++){
  bunTHeaderNodes[i].addEventListener("click",function(){
    bunTHeader.querySelector(".active110").classList.remove("active110");
    bunTHeaderNodes[i].classList.add("active110");
    bunTBody.querySelector(".active110").classList.remove("active110");
    bunTBodyNodes[i].classList.add("active110");
    bunTIndicator.style.left = `calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
  });
}
