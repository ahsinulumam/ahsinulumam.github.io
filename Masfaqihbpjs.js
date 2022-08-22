var layanan = [
   {"id":"BPJS","name":"BPJS KESEHATAN 🏷️"}
      ];
	  
    var optionLayanan = [
      {"id":"BPJS","paket":"CEK BPJS Kesehatan","harga":"Rp6.065","link":"https://pulsaku.id/widget/pulsa/jj/16F157/INQ850","ket":"CEK"},
      {"id":"BPJS","paket":"BAYAR BPJS KESEHATAN","harga":"Rp6.065","link":"https://pulsaku.id/widget/pulsa/jj/16F157/PAY850","ket":"BELI"},
      ]
	  
    var a;
    var kartu = "";
    for (a = 0; a < layanan.length; a++) {
      kartu += '<option value="'+layanan[a].id+'">'+layanan[a].name+'</option>';
    }
    $("#kartu").append(kartu);
    $("#kartu").on("change", function () {
      var kartu = $(this).val();
      var layanan = $(this).find(":selected").text();
      console.log(kartu);
      var b;
      var beli = "";
      for (b = 0; b < optionLayanan.length; b++) {
        var id = optionLayanan[b].id;
        if (kartu == id){
          beli += "<div class='box-layanan'>";
          beli += "<div class='wrap-layanan'>";
          beli += "<div class='paket'>"+optionLayanan[b].paket+"</div>";
          beli += "<div class='layanan'>"+layanan+"</div>";
        
          beli += "</div>";
          beli += "<div class='beli'><a href='"+optionLayanan[b].link+"'>"+optionLayanan[b].ket+"</a></div>";
          beli += "</div>";
        }
      }
      $("#AchainNgopielurdata-beli").html(beli);
    });
