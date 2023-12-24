const keyLisensi = "ODMyMjIyMzIyMTQy";
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
const parentContainer =  document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Selengkapnya') ? "Tutup..." : "Selengkapnya...";

})
      var timeout_notif;      
      function notification(o) {
          $("#informasi").remove(),
              window.clearTimeout(timeout_notif),
              $("body").append('<div id="informasi"></div>'),
              $("#informasi").text(o).fadeIn(100),
              (timeout_notif = window.setTimeout(function () {
                  $("#informasi").fadeOut(1e3),
                      setTimeout(function () {
                          $("#informasi").remove();
                      }, 1e3);
              }, 4e3));
      }
      $("#list-jenis").each(function(){
        $(this).find("li").on("click",function(){
           $(this).parents("#list-jenis").find("li").removeClass("list-select");
           $(this).addClass("list-select");
        });
      });
      $("#list-terapis").each(function(){
        $(this).find("li").on("click",function(){
           $(this).parents("#list-terapis").find("li").removeClass("list-select");
           $(this).addClass("list-select");
        });
      });
      $("#list-durasi").each(function(){
        $(this).find("li").on("click",function(){
           $(this).parents("#list-durasi").find("li").removeClass("crycle-select");
           $(this).addClass("crycle-select");
           var price = $(this).attr("data-price");
           $(".daftar-harga").text(price);
        });
      });
      $("#tombol-lanjut").on("click",function(){
        var jenis = $("#list-jenis li.list-select").attr("data-list");
        var durasi = $("#list-durasi li.crycle-select").attr("data-list");
        var terapis = $("#list-terapis li.list-select").attr("data-list");
        if (jenis == undefined) {
           notification("Jenis kelamin Anda belum dipilih");
        } else if (durasi == undefined) {
           notification("durasi belum dipilih");
        } else if (terapis == undefined) {
           notification("jenis kelamin terapis belum dipilih");
        } else {
          var option = jenis + durasi + terapis;
          if (option == "jpm60tp"){
             // bila pilih pria 60 menit pria
             window.location.href = "action://p/65884163b8b5a";
          } else if (option == "jpm90tp"){
             // bila pilih pria 90 menit pria
             window.location.href = "action://p/6588432d7696e";
          } else if (option == "jpm120tp"){
             // bila pilih pria 120 menit pria
             window.location.href = "action://p/6588448adb11f";
          }
    
          else if (option == "jpm60tw"){
             // bila pilih pria 60 menit Wanita
             window.location.href = "action://p/65884543da508";
          } else if (option == "jpm90tw"){
             // bila pilih pria 90 menit wanita
             window.location.href = "action://p/658845acb8212";
          } else if (option == "jpm120tw"){
             // bila pilih pria 120 menit wanita
             window.location.href = "action://p/6588460dc8fe2";
          } 
          else if (option == "jwm60tp"){
             // bila pilih wanita 60 menit pria
             window.location.href = "action://p/658846eb4443f";
          } else if (option == "jwm90tp"){
             // bila pilih wanita 90 menit pria
             window.location.href = "action://p/65884794f34ee";
          } else if (option == "jwm120tp"){
             // bila pilih wanita 120 menit pria
             window.location.href = "action://p/65884838c37b5";
          } 
          
            else if (option == "jwm60tw"){
           // bila pilih wanita 60 menit wanita
             window.location.href = "action://p/658848cdce2a4";
          } else if (option == "jwm90tw"){
            // bila pilih wanita 90 menit wanita
             window.location.href = "action://p/6588497f45594";
          }  else if (option == "jwm120tw"){
             // bila pilih wanita 120 wanita
             window.location.href = "action://p/65884a12e11bc";
          }
        }
      });
var url_string = window.location.href;
    var urlParameter = new URL(url_string);
var urlParameter = new URL(url_string);
console.log(urlParameter)
    var urlLicense = urlParameter.hostname;
    console.log(urlLicense);
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxrReAGVzwffv8m2OdrbbD8t2YqTx7j9dGza6T8EsrZpZzg41f2XSQQqNCextkpt0LWew/exec",
      type: "GET",
      data: "users",
      crossDomain: true,
      dataType: "",
      success: function (data) {
        var json = data.user;
        console.log(json);
        var cekLisensi = "";
        for (var i = 1; i < json.length; i++) {
          if (json[i].domain == urlLicense){
            cekLisensi += json[i].domain;
          }
        }
        console.log(cekLisensi);
        if (cekLisensi != urlLicense) {
          var peringatanLisensi = "<style>#peringatan span{font-size:50px}#peringatan{position: fixed!important;z-index: 999999!important;top: 0!important;left: 0!important;width: 100%!important;height: 100%!important;display: flex!important;background: rgba(0,0,0,.4)!important;}#peringatan-wrap{display: block!important;margin: auto!important;width: 600px!important;max-width: 90%!important;text-align: center!important;background: #fff!important;padding: 40px!important;border-radius: 8px!important;}#peringatan h44{font-size:20px;color:black;font-weight:bold}</style><div id='peringatan'><div id='peringatan-wrap'><h44>Hayooo Mau Copas yah, ini Source code Achsin!</h44><br><br><p>Lisensi template untuk Appsmu "+urlLicense+" belum aktif</p><br><p>Silahkan aktivasi lisensi di <b>Achsinul Umam 083125227588</b></p></div><div id='hasil'></div></div>";
          $(document.body).html(peringatanLisensi)
        }
      }
    });
