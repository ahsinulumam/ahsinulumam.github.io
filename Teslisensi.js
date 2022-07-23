var url_string = window.location.href;
    var urlParameter = new URL(url_string);
var urlParameter = new URL(url_string);
console.log(urlParameter)
    var urlLicense = urlParameter.hostname;
    console.log(urlLicense);
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycby_a5amzZeDAmBCxtogDdLRCMClB6dKFhrZJ-Ixa8fKe769P3Sy/exec",
      type: "GET",
      data: "users",
      crossDomain: true,
      dataType: "",
      success: function (data) {
        var json = data.user;
        console.log(json);
        var cekLisensi = "";
        for (var i = 0; i < json.length; i++) {
          if (json[i].domain == urlLicense){
            cekLisensi += json[i].domain;
          }
        }
        console.log(cekLisensi);
        if (cekLisensi != urlLicense) {
          var peringatanLisensi = "<style>#peringatan span{font-size:50px}#peringatan{position: fixed!important;z-index: 999999!important;top: 0!important;left: 0!important;width: 100%!important;height: 100%!important;display: flex!important;background: rgba(0,0,0,.4)!important;}#peringatan-wrap{display: block!important;margin: auto!important;width: 600px!important;max-width: 90%!important;text-align: center!important;background: #fff!important;padding: 40px!important;border-radius: 8px!important;}#peringatan h4{font-size:20px}</style><div id='peringatan'><div id='peringatan-wrap'><h4>PERINGATAN!</h4><p>Lisensi template untuk website "+urlLicense+" belum aktif</p><p>Silahkan aktivasi lisensi di <b>member.azid45.web.id</b></p></div><div id='hasil'></div></div>";
          $(document.body).html(peringatanLisensi)
        }
      }
    });


/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

