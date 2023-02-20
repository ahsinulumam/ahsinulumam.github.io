<?php
$url = "https://www.jagel.id/app/mangojek-95936/produk-terbaru-2421239";
$last_modified_time = 0;

while (true) {
    // Cek apakah terdapat perubahan pada data
    $headers = get_headers($url, 1);
    $current_modified_time = strtotime($headers['Last-Modified']);
    
    if ($current_modified_time > $last_modified_time) {
        $last_modified_time = $current_modified_time;
        
        // Jika ada perubahan, ambil data JSON dari URL
        $json = file_get_contents($url);
        $data = json_decode($json, true);

        if ($data['status'] == "success") {
            foreach ($data['data'] as $produk) {
                $nama_produk = $produk['name'];
                $harga_produk = $produk['price'];
                $gambar_produk = $produk['image'];

                // Lakukan sesuatu dengan data produk, misalnya menampilkannya ke halaman web
                echo "<div>
                        <img src=\"$gambar_produk\">
                        <h2>$nama_produk</h2>
                        <p>$harga_produk</p>
                      </div>";
            }
        } else {
            echo "Terjadi kesalahan: " . $data['message'];
        }
    }
    
    // Tunggu selama 5 detik sebelum memeriksa kembali
    sleep(5);
}
?>
