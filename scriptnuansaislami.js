// When the user scrolls down 20px from the top of the document, recolor the header's background color
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header2").style.backgroundColor = "var(--Achsinul-UmamB1)";
  } else {
    document.getElementById("header2").style.backgroundColor = "rgb(251, 151, 7, 0)";
  }
}
var date = new Date();
      var tanggal = date.getDate();
      var bulan = date.getMonth() + 1;
      var tahun = date.getFullYear();
      var settanggal = tahun + "/" + bulan + "/" + tanggal;
      $(document).ready(function(){
         var checkkota = $("#nama-kota").text();
         if (checkkota.indexOf("Kabupaten") == -1) {
            var nama = checkkota.replace("kota ","")
         } else if (checkkota.indexOf("kota") == -1){
           var nama = checkkota.replace("Kabupaten ","")
         };
         var namakota = nama;
         var settings = {
           "url": "https://api.myquran.com/v1/sholat/kota/cari/" + namakota,
           "method": "GET",
           "timeout": 0,
         }
        $.ajax(settings).done(function (data) {
      console.log(data);
          var status = data.status;
          if (status === true){
           var data = data.data[0];
           var idkota = data.id;
           var setjadwal = {
             "url": "https://api.myquran.com/v1/sholat/jadwal/" + idkota + "/" + settanggal,
             "method": "GET",
             "timeout": 0,
           }
           $.ajax(setjadwal).done(function (data) {
              var jadwal = data.data.jadwal;
              var jam = date.getHours();
              if (jam >= 0 && jam < 4 ){
                var teks = "Imsak";
                var sholat = jadwal.imsak;
              }
              if (jam >= 4 && jam < 6 ){
                var teks = "Sholat Subuh";
                var sholat = jadwal.subuh;
              }
              if (jam >= 6 && jam < 10 ){
                var teks = "Sholat Dhuha";
                var sholat = jadwal.dhuha;
              }
              if (jam >= 10 && jam < 13 ){
                var teks = "Sholat Dzuhur";
                var sholat = jadwal.dzuhur;
              }
              if (jam >= 13 && jam < 16 ){
                var teks = "Sholat Ashar";
                var sholat = jadwal.ashar;
              }
              if (jam >= 16 && jam < 18 ){
                var teks = "Sholat Maghrib";
                var sholat = jadwal.maghrib;
              }
              if (jam >= 18 && jam < 24 ){
                var teks = "Sholat Isya";
                var sholat = jadwal.isya;
              }
              $("#teks-sholat").text(teks);
              $("#jadwal-sholat").text(sholat);
           });
          } else if (status == false){
            alert("Status: " + status + ", waktu sholat tidak tersedia di " + namakota)
          }
        });
      });
const parentContainer =  document.querySelector('.read-more-ccontainerr');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('View all categories') ? "Close tabs..." : "View all categories...";

})
var url_produk = '';
  var halaman = 1;
  // var page = 0;
  function get_data() {
    $.ajax({
      url: 'https://achsinfrontand.my.id/Produktes1/tes.php',
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
                <a href="https://jgjk.mobi/p/'+element.gambar.substr(-17, 13)+'">\
                  <div class="keterangan">Baru</div>\
                  <img src="'+element.gambar+'" alt="'+element.nama+'" width="300" height="300"/>\
                </a>\
              </div>\
              <div class="layout-title">\
                <a href="https://jgjk.mobi/p/'+element.gambar.substr(-17, 13)+'">'+element.nama+'</a>\
                <p>Direkomendasikan Untuk Kamu</p>\
              </div>\
              <div class="layout-info">\
                <div class="layout-rating"><img style="width:11px;margin-bottom:4px;" src="https://i.postimg.cc/HsWSbv19/star-5.png">4.4</div>\
                <div class="layout-harga">'+element.harga+'</div>\
              </div>\
            </div>\
          </div>\
        </article>\
            ';
          });
          $("#data-product").html(xhtml);
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
   $("#toggle-list").click(function(){
      $(this).toggleClass("list");
      $(".layout-list-grid").toggleClass("list");
      $(".listmode-switch").toggleClass("list");
   });
function createWeeklyCalendar() {
  var startDate = new Date();
  startDate.setDate(startDate.getDate() - startDate.getDay());

  var endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);

  var calendar = [];
  var currentDate = new Date(startDate);
  var currentMonth = currentDate.getMonth();

  while (currentDate <= endDate) {
    var isToday = isTodayDate(currentDate);
    var dateObject = {
      date: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
      isToday: isToday,
      isSelected: false
    };

    // Menambahkan kelas 'different-month' untuk semua tanggal bulan yang berbeda
    if (currentDate.getMonth() !== currentMonth) {
      dateObject.isDifferentMonth = true;
    }

    calendar.push(dateObject);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return calendar;
}

function isTodayDate(date) {
  var today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function displayCalendar() {
  var calendarElement = document.getElementById('calendar');
  var weeklyCalendar = createWeeklyCalendar();

  var ul = document.createElement('ul');
  for (var i = 0; i < weeklyCalendar.length; i++) {
    var li = document.createElement('li');
        li.innerHTML = "<span>" + weeklyCalendar[i].date + "</span>";

    if (weeklyCalendar[i].isToday) {
      li.classList.add('today');
    }

    if (weeklyCalendar[i].isDifferentMonth) {
      li.classList.add('different-month');
    }

    li.addEventListener('click', function (event) {
      var selectedDate = event.target.textContent;

      var selectedLi = ul.getElementsByClassName('selected');
      if (selectedLi.length > 0) {
        selectedLi[0].classList.remove('selected');
      }

      event.target.classList.add('selected');
      console.log('Anda memilih tanggal:', selectedDate);
    });

    ul.appendChild(li);
  }

  calendarElement.appendChild(ul);
}
if (document.getElementById('calendar') != null){
   displayCalendar();
}
function formatNumber(rupiah) {
  const cleanedRupiah = rupiah.replace(/[^0-9.]/g, '');
  const formattedRupiah = cleanedRupiah.replace(/\./g, '');
  const number = parseFloat(formattedRupiah);
  return number;
}
  $(document).ready(function() {
  var saldo = $("#saldo").text();
  var number = formatNumber(saldo);
  var presentase = (number/1000000)*100;
  $(".chart").attr("data-percent",presentase).text(presentase+"%");
  $('.chart').easyPieChart({
    size: 124,
    barColor: "orange",
    scaleLength: 0,
    lineWidth: 10,
    trackColor: "white",
    lineCap: "circle",
    animate: 5000,
  });
});
  $(".nav__link").on("click", function () {
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
   $(this).parents(".nav__list").find("a").removeClass("active-link");
    $(this).addClass("active-link");
    $("#achsinhome, #achsinpromo, #achsinpesanan, #achsinaccount").hide();
    var b = $(this.hash);
    if (b.length) {
      var a = $(this).attr("href");
      $(a).fadeIn();
      return false;
    }
  }
});
$(".nav__list").each(function () {
  $(this).find("a:first").addClass("active-link");
  $(this).find("a:first").trigger("click");
});
$(document).on("click","#send-it",function(){var a=document.getElementById("chat-input");if(""!=a.value){var b=$("#get-number").text(),c=document.getElementById("chat-input").value,d="https://api.whatsapp.com/send",e=b,f="&text="+c;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))var d="whatsapp://send";var g=d+"?phone="+e+f;window.open(g, '_blank')}}),$(document).on("click",".informasi",function(){document.getElementById("get-number").innerHTML=$(this).children(".my-number").text(),$(".start-chat,.get-new").addClass("show").removeClass("hide"),$(".home-chat,.head-home").addClass("hide").removeClass("show"),document.getElementById("get-nama").innerHTML=$(this).children(".info-chat").children(".chat-nama").text(),document.getElementById("get-label").innerHTML=$(this).children(".info-chat").children(".chat-label").text()}),$(document).on("click",".close-chat",function(){$("#whatsapp-chat").addClass("hide").removeClass("show")}),$(document).on("click",".blantershow-chat",function(){$("#whatsapp-chat").addClass("show").removeClass("hide")});


!function(a,b){"object"==typeof exports?module.exports=b(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing="string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}});
