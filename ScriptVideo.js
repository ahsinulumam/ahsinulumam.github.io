var linkupload = "https://script.google.com/macros/s/AKfycbzUL0m3cBD4-HrEr20Et912dTfP9lrJUXZV2kUmT7LzP6t22goCvgDf66Aa94STHyI6aA/exec";
var apikeyFirebase = "AIzaSyCr772xGxGXoHnRp33id3PKl9F_x5KK_aU";
var projectID = "videoproduk-3785f";
var appID = "1:338617070909:web:2d12189f19ff8d42188154";
var splitappID = appID.split(":");
var senderID = splitappID[1];

//Url
var url_string = window.location.href;
var urlParameter = new URL(url_string);
var paramID = urlParameter.searchParams.get("id");
var urlHome = urlParameter.origin;

// Firebase Config
const firebaseConfig = {
    apiKey: apikeyFirebase,
    authDomain: projectID+".firebaseapp.com",
    projectId: projectID,
    storageBucket: projectID+".appspot.com",
    messagingSenderId: senderID,
    appId: appID
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

//Format Rupiah
function angkaToRp(angka) {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
    return 'Rp' + rupiah.split('', rupiah.length - 1).reverse().join('');
};

// Format ID
function formatID(date,inv) {
    var date = new Date(date);
    var day = date.getDate(),
        month = parseInt(date.getMonth()),
        yearFull = date.getFullYear().toString(),
        year = yearFull.substring(2),
        hour = date.getHours(),
        minute =  date.getMinutes(),
        second = date.getSeconds(),
        code = inv,
        invoice = code+day.toString()+(month+1)+year+hour.toString()+minute.toString()+second.toString();
    return invoice;
}

  // Set Notifikasi Peringatan
  var timeout_notif;
  var berhasil = "<div class='peringatan sukses'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>";
  var gagal = "<div class='peringatan gagal'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>";
  function notification(o) {
    $("#informasi").remove(),
      window.clearTimeout(timeout_notif),
      $("body").append('<div id="informasi"></div>'),
      $("#informasi").html(o).fadeIn(100),
      (timeout_notif = window.setTimeout(function () {
      $("#informasi").fadeOut(1e3),
        setTimeout(function () {
        $("#informasi").remove();
      }, 1e3);
    }, 4e3));
  }


//Upload File
 $(document).ready(function(){ 
  $(document).on('change', '#upload', function(){
    var progressUpload = "Proses upload foto, silahkan ditunggu";
    var file = $("#upload").prop("files")[0];
    var fr = new FileReader();
    fr.readAsArrayBuffer(file);
    $("#uploaded").html(progressUpload);
    fr.onload = f => {
        var newName = file.name;
        var orgName = file.name;
      if (orgName.includes(".")) {
        var orgExt = orgName.split(".").pop();
        if (orgExt != newName.split(".").pop()) {
          newName = newName ? `${newName}.${orgExt}` : orgName;
        }
      }
      var qs = new URLSearchParams({filename: newName, mimeType: file.type});  // Modified
      fetch(`${linkupload}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target.result)])})
        .then(res => res.json())
        .then(e => {
          var idDrive = e.fileId;
          var imageDrive = 'https://lh3.googleusercontent.com/u/0/d/' + idDrive;
         $("#uploaded").html("<input id='linkfile' data-file='https://lh3.googleusercontent.com/u/0/d/"+idDrive+"' value='"+idDrive+"' type='hidden'/><img src='"+imageDrive+"' width='80' height='80' alt='image google drive'/>");
          notification(berhasil + "File berhasil terupload")
      })
        .catch(err => console.log(err));
    }
  });
 });

// Event List Menu
$(".list-menu").click(function () {
    $(".fixed-menu").toggleClass("active");
    return false;
});

// Upload Produk
$("#kirim-produk").click(function () {
    var checkupload = $("#upload");
    var foto = $("#linkfile").attr("data-file");
    var namavideo = $("#namavideo").val();
    var idvideo = $("#idvideo").val();
    var namaproduk = $("#namaproduk").val();
    var linkproduk = $("#linkproduk").val();
    var harga = $("#hargaproduk").val();
    var diskon = $("#diskonproduk").val();
    var keterangan = $("#keteranganproduk").val();
    if (namavideo == "") {
        notification("Nama Video diperlukan");
        return false;
    } else if (idvideo == "") {
        notification("ID Video diperlukan");
        return false;
    } else if (checkupload[0].files.length == 0) {
        notification("Foto Produk diperlukan");
        return false;
    } else if (namaproduk == "") {
        notification("Nama Produk diperlukan");
        return false;
    } else if (linkproduk == "") {
        notification("Link Produk diperlukan");
        return false;    
    } else if (harga == "") {
        notification("Harga Produk diperlukan");
        return false;
    } else if (diskon == "") {
        notification("Diskon Produk diperlukan");
        return false;
    } else {
        var date = new Date();
        var id = formatID(date, "ID");
        if (keterangan == "") {
            keterangan == "-";
        } else {
            keterangan == keterangan;
        }
        db.collection('dataproduk').add({
            id: id,
            namavideo: namavideo,
            idvideo: idvideo,
            foto: foto,
            nama: namaproduk,
            link: linkproduk,
            harga: harga,
            diskon: diskon,
            keterangan: keterangan
        }).then(res => {
            notification(berhasil + "Produk Anda berhasil diupload");
        }).catch(e => {
            notification(gagal + "Produk gagal diupload, silahkan coba lagi");
        });
        return false;
    }
});

// Data List Video
var checkinhome = document.getElementById("content-inhome");
if (checkinhome) {
    db.collection("dataproduk").get().then((data) => {
        var checkempty = data.empty;
        if (checkempty === false) {
            var html = "";
            data.forEach(function (doc) {
                var data = doc.data();
                var id = data.id;
                var namavideo = data.namavideo;
                var idvideo = data.idvideo;
                html += '<a class="reel-content-wrap" href="https://ahsinulumam.github.io/post.html?id='+id+'">';
                html += '<div class="reel-content-frame">';
                html += '<div class="reel-image">';
                html += '<div class="cover-image"></div>';
                html += '<img src="https://i.ytimg.com/vi/'+idvideo+'/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLD2qWNXRgzxC2-ArzXtlhUAOSKPjQ" alt="title" width="200" height="400"/>';
                html += '</div>';
                html += '<div class="reel-title">';
                html += '<h4 class="title"><span>'+namavideo+'</span></h4>';
                html += '</div>';
                html += '</div>';
                html += '</a>';
            });
            $("#content-inhome .reel-content").html(html);

        } else if (checkempty === true) {
            $("#content-inhome").html("<p class='none'>Short Video Tidak Tersedia</p>");
        }
    });
}

// Post Video
var postvideo = document.getElementById("post-video");
if (postvideo) {
  if (paramID != null) {
    var shortid = paramID;
    db.collection("dataproduk").where("id", "==", shortid).get().then((data) => {
      var checkempty = data.empty;
      if (checkempty === false) {
        var htm = "";
        data.forEach(function (doc) {
          var data = doc.data();
          var idvideo = data.idvideo;
          var nama = data.nama;
          var foto = data.foto;
          var harga = data.harga;
          var diskon = data.diskon;
          var keterangan = data.keterangan;
          var link = data.link;
          diskon = Math.round(diskon);
          if (diskon < 100) {
            var hitungdiskon = Math.round((harga * diskon) / 100);
          } else if (diskon > 101) {
            var hitungdiskon = diskon;
          }
          var price = harga - hitungdiskon;
          var strike = harga;
            htm += '<div class="post-carousel">';
            htm += '<div class="post-produk">';
            htm += '<div class="post-produk-wrap">';
            htm += '<div class="post-thumb">';
            htm += '<img src="' + foto + '" width="400" height="400" alt="' + nama + '">';
            htm += '</div>';
            htm += '<div class="post-summary">';
            htm += '<h3 class="post-title">' + nama + '</h3>';
            if (keterangan != "-") {
              htm += '<div class="detail"><span class="keterangan">Free Ongkir</span></div>';
            }
            htm += '<div class="detail"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z" /></svg>';
            if (diskon != null && diskon != 0) {
              htm += '<div class="ket"><span class="harga">' + angkaToRp(price) + '</span>/<span class="coret">' + angkaToRp(strike) + '</span></div>';
            } else {
              htm += '<div class="ket"><span class="harga">' + angkaToRp(price) + '</span></div>';
            }
            htm += '</div>';
            htm += '</div >';
            htm += '</div >';
            htm += '<div class="produk-bottom">';
            htm += '<a class="button-produk" href="' + link + '">Lihat Produk</a>';
            htm += '<svg class="tombol-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1M9.12,7.71L7.71,9.12L10.59,12L7.71,14.88L9.12,16.29L12,13.41L14.88,16.29L16.29,14.88L13.41,12L16.29,9.12L14.88,7.71L12,10.59" /></svg>';
            htm += '</div>';
            htm += '</div >';
            htm += '<div class="post-video-iframe">';
            htm += '<iframe width="315" height="560" src="https://www.youtube.com/embed/' + idvideo + '" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>';
            htm += '</div>';
            htm += '</div>';
            htm += '</div>';
        });
        $("#post-video").html(htm);
      } else if (checkempty === true) {
        $("#post-video").html("<p class='none'>Short Video Tidak Tersedia</p>");
      }
    });
    db.collection("dataproduk").get().then((data) => {
      var checkempty = data.empty;
      if (checkempty === false) {
        var html = "";
        data.forEach(function (doc) {
          var data = doc.data();
          var id = data.id;
          var idvideo = data.idvideo;
          var nama = data.nama;
          var foto = data.foto;
          var harga = data.harga;
          var diskon = data.diskon;
          var keterangan = data.keterangan;
          var link = data.link;
          diskon = Math.round(diskon);
          if (diskon < 100) {
            var hitungdiskon = Math.round((harga * diskon) / 100);
          } else if (diskon > 101) {
            var hitungdiskon = diskon;
          }
          var price = harga - hitungdiskon;
          var strike = harga;
          if (id != shortid) {
            html += '<div class="post-carousel">';
            html += '<div class="post-produk">';
            html += '<div class="post-produk-wrap">';
            html += '<div class="post-thumb">';
            html += '<img src="' + foto + '" width="400" height="400" alt="' + nama + '">';
            html += '</div>';
            html += '<div class="post-summary">';
            html += '<h3 class="post-title">' + nama + '</h3>';
            if (keterangan != "-") {
              html += '<div class="detail"><span class="keterangan">Free Ongkir</span></div>';
            }
            html += '<div class="detail"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z" /></svg>';
            if (diskon != null && diskon != 0) {
              html += '<div class="ket"><span class="harga">' + angkaToRp(price) + '</span>/<span class="coret">' + angkaToRp(strike) + '</span></div>';
            } else {
              html += '<div class="ket"><span class="harga">' + angkaToRp(price) + '</span></div>';
            }
            html += '</div>';
            html += '</div >';
            html += '</div >';
            html += '<div class="produk-bottom">';
            html += '<a class="button-produk" href="' + link + '">Lihat Produk</a>';
            html += '<svg class="tombol-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1M9.12,7.71L7.71,9.12L10.59,12L7.71,14.88L9.12,16.29L12,13.41L14.88,16.29L16.29,14.88L13.41,12L16.29,9.12L14.88,7.71L12,10.59" /></svg>';
            html += '</div>';
            html += '</div >';
            html += '<div class="post-video-iframe">';
            html += '<iframe width="315" height="560" src="https://www.youtube.com/embed/' + idvideo + '" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
          }
        });
        $("#post-video").append(html);
        $("#post-video .tombol-close").each(function () {
          $(this).click(function () {
            $(this).parents(".post-produk").hide();
            return false;
          });
        });
        $(".content-post .owl-carousel").owlCarousel({
          loop: false,
          center: true,
          autoplay: false,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          autoHeight: false,
          stagePadding: 0,
          margin: 0,
          nav: true,
          dots: false,
          responsiveClass: true,
          navText: ['<svg viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/></svg>', '<svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>'],
          responsive: {
            0: { items: 1 }
          },
        });
        function autoplay() {
          $(".content-post .owl-carousel .owl-item.active iframe").each(function () {
            var src = $(this).attr("src");
            var video = src + "?autoplay=1";
            $(this).attr("src", video);
            return false;
          })
        }
        function stopvideo() {
          $(".content-post .owl-carousel iframe").each(function () {
            var video = $(this).attr("src");
            video = video.replace("?autoplay=1", "");
            $(this).attr("src", video);
          });
          $(".content-post .owl-carousel .owl-item.active iframe").each(function () {
            var src = $(this).attr("src");
            var video = src + "?autoplay=1";
            $(this).attr("src", video);
            return false;
          });
        }
        $(document).ready(function () {
          autoplay();
          return false;
        })
        $(".content-post .owl-carousel .owl-nav button.owl-prev").click(function () {
          stopvideo();
          return false;
        });
        $(".content-post .owl-carousel .owl-nav button.owl-next").click(function () {
          stopvideo();
          return false;
        });
      } else if (checkempty === true) {
        $("#post-video").html("<p class='none'>Short Video Tidak Tersedia</p>");
      }
    });
  } else if (paramID == null) {
    db.collection("dataproduk").get().then((data) => {
      var checkempty = data.empty;
      if (checkempty === false) {
        var html = "";
        data.forEach(function (doc) {
          var data = doc.data();
          var id = data.id;
          var idvideo = data.idvideo;
          var nama = data.nama;
          var foto = data.foto;
          var harga = data.harga;
          var diskon = data.diskon;
          var keterangan = data.keterangan;
          var link = data.link;
          diskon = Math.round(diskon);
          if (diskon < 100) {
            var hitungdiskon = Math.round((harga * diskon) / 100);
          } else if (diskon > 101) {
            var hitungdiskon = diskon;
          }
          var price = harga - hitungdiskon;
          var strike = harga;
            html += '<div class="post-carousel">';
            html += '<div class="post-produk">';
            html += '<div class="post-produk-wrap">';
            html += '<div class="post-thumb">';
            html += '<img src="' + foto + '" width="400" height="400" alt="' + nama + '">';
            html += '</div>';
            html += '<div class="post-summary">';
            html += '<h3 class="post-title">' + nama + '</h3>';
            if (keterangan != "-") {
              html += '<div class="detail"><span class="keterangan">Free Ongkir</span></div>';
            }
            html += '<div class="detail"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z" /></svg>';
            if (diskon != null && diskon != 0) {
              html += '<div class="ket"><span class="harga">' + angkaToRp(price) + '</span>/<span class="coret">' + angkaToRp(strike) + '</span></div>';
            } else {
              html += '<div class="ket"><span class="harga">' + angkaToRp(price) + '</span></div>';
            }
            html += '</div>';
            html += '</div >';
            html += '</div >';
            html += '<div class="produk-bottom">';
            html += '<a class="button-produk" href="' + link + '">Lihat Produk</a>';
            html += '<svg class="tombol-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1M9.12,7.71L7.71,9.12L10.59,12L7.71,14.88L9.12,16.29L12,13.41L14.88,16.29L16.29,14.88L13.41,12L16.29,9.12L14.88,7.71L12,10.59" /></svg>';
            html += '</div>';
            html += '</div >';
            html += '<div class="post-video-iframe">';
            html += '<iframe width="315" height="560" src="https://www.youtube.com/embed/' + idvideo + '" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        });
        $("#post-video").append(html);
        $("#post-video .tombol-close").each(function () {
          $(this).click(function () {
            $(this).parents(".post-produk").hide();
            return false;
          });
        });
        $(".content-post .owl-carousel").owlCarousel({
          loop: false,
          center: true,
          autoplay: false,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          autoHeight: false,
          stagePadding: 0,
          margin: 0,
          nav: true,
          dots: false,
          responsiveClass: true,
          navText: ['<svg viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/></svg>', '<svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>'],
          responsive: {
            0: { items: 1 }
          },
        });
        function autoplay() {
          $(".content-post .owl-carousel .owl-item.active iframe").each(function () {
            var src = $(this).attr("src");
            var video = src + "?autoplay=1";
            $(this).attr("src", video);
            return false;
          })
        }
        function stopvideo() {
          $(".content-post .owl-carousel iframe").each(function () {
            var video = $(this).attr("src");
            video = video.replace("?autoplay=1", "");
            $(this).attr("src", video);
          });
          $(".content-post .owl-carousel .owl-item.active iframe").each(function () {
            var src = $(this).attr("src");
            var video = src + "?autoplay=1";
            $(this).attr("src", video);
            return false;
          });
        }
        $(document).ready(function () {
          autoplay();
          return false;
        })
        $(".content-post .owl-carousel .owl-nav button.owl-prev").click(function () {
          stopvideo();
          return false;
        });
        $(".content-post .owl-carousel .owl-nav button.owl-next").click(function () {
          stopvideo();
          return false;
        });
      } else if (checkempty === true) {
        $("#post-video").html("<p class='none'>Short Video Tidak Tersedia</p>");
      }
    });
  }
}

