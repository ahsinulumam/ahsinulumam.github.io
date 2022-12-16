document.getElementById("xreload").style.display = "none";
function tampilproduk() {
document.getElementById("FlashsaleBerlangsung").innerHTML = '<br><div class="progress"><div class="indeterminate"></div></div>';
var halaman = "1";
$.ajax({
url: "https://ayoudie.masuk.id/ach/FsWTv2.php",
type: "POST",
// data: {data : JSON.stringify(data)},
data: {
halaman: halaman

},
dataType: 'JSON',
success: function(data) {
try {

var xhtml = '';

data.forEach(function(element) {

xhtml += '<div class="Youdie">';
xhtml += '<a href="https://jgjk.mobi/p/'+element.GambarProduk.substr(-17,13)+'"><div class="cardAyoudieFlash">';



xhtml += '<div class="CardImg">';


xhtml += '<h6 class="AyoudieDiskP" style="z-index:1 ! important;">Promo</h6>';



xhtml += '<img class=" cardAyoudieFlash-image" style="z-index:-1 ! important" src="'+element.GambarProduk+'"></div>';



xhtml += '<div class="TitleCard">';

xhtml += '<div class="TitleCard2">';

xhtml += '<h6  class="cardAyoudie-title">'+element.NamaProduk+'</h6>';

xhtml += '<h6 class="AyoudiePriceFs">'+element.HargaProduk+'</h6></br>';

xhtml += '<strike class="AyoudieDiskon" >'+element.HargaSebelumDiskon+'</strike></br>';

xhtml += ' <div class="AyoudieProgress">';

xhtml += '<div class="AyoudieDeterminate" style="width: '+element.PersenStok+'"></div>';

xhtml += ' <div class="tittleAyoudie-Sisa">Sisa Stock ' + element.SisaStok +'</div>';

xhtml += '</div>';

xhtml += '<h6><a href="https://jgjk.mobi/p/'+element.GambarProduk.substr(-17,13)+'" class="AyoudieBtn" style="background:red;">View Product</a></h6>';

xhtml += '</div>';
xhtml += '</div>';
xhtml += '</div>';
xhtml += '</div>';

})

xhtml += '</div>';
xhtml += '</div>';

document.getElementById("FlashsaleBerlangsung").innerHTML = xhtml;

}catch(err) {
document.getElementById("xreload").style.display = "block";
document.getElementById("FlashsaleBerlangsung").innerHTML = '';
document.getElementById("keterangan").innerHTML = "Produk tidak tersedia!";
}
}, error: function(err) {
document.getElementById("xreload").style.display = "block";
document.getElementById("FlashsaleBerlangsung").innerHTML = '';
document.getElementById("keterangan").innerHTML = 'Periksa Koneksi Internet Anda!';
}

});
}



$(document).ready(function() {
tampilproduk();

document.getElementById("xreload").addEventListener("click", function(event) {
document.getElementById("xreload").style.display = "none";
document.getElementById("FlashsaleBerlangsung").innerHTML = '<br><div class="progress"><div class="indeterminate"></div></div>';
tampilproduk();
});
});


// Ganti dengan waktu tgl mulai

const flash_sale_mulai = new Date("Juli 21, 2022 06:59:00");

// Ganti dengan waktu tgl berakhir

    const flash_sale_akhir = new Date("Juli 21, 2022 06:59:10");

// Samakan dengan waktu tgl berakhir

    const sementara = new Date("August 25, 2022 06:59:10");

var countDownCek = flash_sale_mulai.getTime();
var countDownDate = flash_sale_akhir.getTime();
var countSementara = sementara.getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();
var fiveMinutes = 5 * 60 * 1000;
var now = new Date().getTime();
var lima_menit = now - flash_sale_akhir.getTime();

console.log("now is " + lima_menit);

if (countDownCek > now) {
        // document.getElementById("demo").innerHTML = "Mulai : " + flash_sale_mulai;
        var distance2 = countDownCek - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        days2 = ("0" + days2).slice(-2);
        var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hours2 = ("0" + hours2).slice(-2);
        var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        minutes2 = ("0" + minutes2).slice(-2);
        var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
        seconds2 = ("0" + seconds2).slice(-2);
        
        // Output the result in an element with id="demo"
        document.getElementById("PesanFlashsale").innerHTML = "FlashSale Dimulai "+hours2 + ":"
        + minutes2 + ":" + seconds2;

} else if(countSementara > countDownCek  ){

     $("#FlashsaleBerlangsung").removeClass("disabledbutton");
     var distance3 = countSementara - now;

    // Time calculations for days, hours, minutes and seconds
    var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    days3 = ("0" + days3).slice(-2);
    var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours3 = ("0" + hours3).slice(-2);
    var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
    minutes3 = ("0" + minutes3).slice(-2);
    var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    seconds3 = ("0" + seconds3).slice(-2);
    
    // Output the result in an element with id="demo"
    document.getElementById("PesanFlashsale").innerHTML = "FlashSale Berlangsung "+hours3 + ":"
    + minutes3 + ":" + seconds3;
        if (distance3 < 0) {
            clearInterval(x);
        
             $("#FlashsaleBerlangsung").addClass("disabledbutton");
             setakhir(countDownDate,now)
        }

}

}, 1000);

function setakhir(akhir,now){

        var distance = akhir - now;
     $("#FlashsaleBerlangsung").removeClass("disabledbutton");
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    days = ("0" + days).slice(-2);
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = ("0" + hours).slice(-2);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    minutes = ("0" + minutes).slice(-2);
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds = ("0" + seconds).slice(-2);
    
    document.getElementById("PesanFlashsale").innerHTML = "FlashSale Berakhir dalam :  " + hours + " : "
    + minutes + " : " + seconds + " ";  
    // If the count down is over, write some text
    if (distance < 0) {  document.getElementById("PesanFlashsale").innerHTML = "Flash Sale Berakhir";
     $("#FlashsaleBerlangsung").addClass("disabledbutton");        
    }
} 
