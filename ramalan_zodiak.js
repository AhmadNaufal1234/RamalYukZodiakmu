    var tanggal = parseInt(prompt("Masukkan tanggal lahir Anda: "));
    var bulan = parseInt(prompt("Masukkan bulan lahir Anda (dalam angka): "));
    var hasilRamalan = ramalZodiak(tanggal, bulan);
    alert(hasilRamalan);

function ramalZodiak(tanggal, bulan) {
    if ((bulan == 3 && tanggal >= 21) || (bulan == 4 && tanggal <= 19)) {
        return "Anda adalah Aries, Anda berzodiak Aries? Silakan bernapas lega. Pasalnya, seluruh perjuangan yang Anda lakukan di tahun 2024 akan berbuah manis di tahun ini. Karier Anda akan makin bersinar dan berbanding lurus dengan pemasukan yang Anda terima. Beban kerja maupun proyek akan makin banyak, namun hal tersebut akan membuat Anda makin bahagia dan bersinar.";
    } else if ((bulan == 4 && tanggal >= 20) || (bulan == 5 && tanggal <= 20)) {
        return "Anda adalah Taurus, Bagi yang berzodiak Taurus, tahun 2024 akan menjadi tahun yang sangat baik dari segi keuangan. Mereka akan mendapat kesempatan untuk naik jabatan atau mendapatkan penghasilan yang lebih baik. Tahun ini dianggap sebagai waktu yang tepat bagi Taurus untuk mencari passive income, baik dari instrumen investasi maupun bisnis sampingan.";
    } else if ((bulan == 5 && tanggal >= 21) || (bulan == 6 && tanggal <= 20)) {
        return "Anda adalah Gemini, Karier Gemini diramalkan akan semakin cemerlang dan bersinar di tahun 2024. Hal ini tak lepas dari kepribadiannya yang terbuka, cerdas, dan komunikatif. Hal ini juga berpengaruh pada finansial, kesehatan, dan asmaranya. Tak heran, banyak yang menyebut tahun 2024 menjadi tahunnya Gemini.";
    } else if ((bulan == 6 && tanggal >= 21) || (bulan == 7 && tanggal <= 22)) {
        return "Anda adalah Cancer, Cancer akan mengalami peningkatan keuangan pada tahun 2024. Tak hanya itu, karier, asmara, dan koneksi Anda akan meningkat secara signifikan. Namun, Anda juga harus berhati-hati dengan pengeluaran yang tidak perlu, terutama pada pertengahan tahun. Dengan mengelola keuangannya dengan bijak, Cancer dapat mencapai tujuan keuangannya di tahun ini.";
    } else if ((bulan == 7 && tanggal >= 23) || (bulan == 8 && tanggal <= 22)) {
        return "Anda adalah Leo, Di tahun 2024, Leo akan bertransformasi menjadi seorang yang lebih sukses dan bersinar. Hal ini membuat Anda berlimpah rezeki dan kesempatan emas. Tips buat Leo, alokasikan dana yang Anda miliki untuk berinvestasi dan mempersiapkan dana pensiun sedari dini. Dengan fokus pada tujuan finansial dan pengelolaan keuangan yang tepat, Leo akan mencapai financial freedom. ";
    } else if ((bulan == 8 && tanggal >= 23) || (bulan == 9 && tanggal <= 22)) {
        return "Anda adalah Virgo, Secara garis besar, keuangan Virgo akan berada di level yang cukup memuaskan. Namun, Anda juga harus tetap waspada dan berhati-hati dalam mengambil keputusan finansial besar. Dengan mengendalikan keuangan secara maksimal, Virgo akan mampu mencapai keberhasilan finansial yang lebih besar di masa depan.";
    } else if ((bulan == 9 && tanggal >= 23) || (bulan == 10 && tanggal <= 22)) {
        return "Anda adalah Libra, Berbahagialah bagi siapa saja yang berzodiak Libra. Sebab, tahun 2024 ini akan menjadi tahun yang sangat baik dari segi keuangan. Anda dapat mengatur keuangan dengan lebih baik, dan juga memiliki kesempatan untuk menghilangkan hutang mereka. Yang penting, kurang-kurangi pengeluaran yang tidak perlu dan jangan gegabah.";
    } else if ((bulan == 10 && tanggal >= 23) || (bulan == 11 && tanggal <= 21)) {
        return "Anda adalah Scorpio, Scorpio boleh bernapas lega di tahun 2024. Setelah mengalami pergolakan finansial di tahun sebelumnya, keuangan Anda mulai stabil, didukung dengan peningkatan pekerjaan dan karier secara signifikan. Tips buat Anda, mulailah membuat perencanaan keuangan pribadi dan atur pengeluaran seminimum mungkin.";
    } else if ((bulan == 11 && tanggal >= 22) || (bulan == 12 && tanggal <= 21)) {
        return "Anda adalah Sagittarius, Sagitarius akan melewati tahun 2024 secara perlahan dan penuh pesimis, terutama pada awal tahun. Namun jangan khawatir! Selama Anda bisa mengatur pengeluaran, mencari pekerjaan sampingan, dan berinvestasi di instrumen-instrumen bonafit, keuangan Anda akan baik-baik saja.";
    } else if ((bulan == 12 && tanggal >= 22) || (bulan == 1 && tanggal <= 19)) {
        return "Anda adalah Capricorn, Capricorn adalah salah satu zodiak yang paling beruntung di tahun 2024, secara khusus bulan April dan Mei. Keuangan akan stabil, pekerjaan lancar, hingga koneksi makin bertambah. Namun, tetap kendalikan diri dan jangan beli barang-barang yang tidak diperlukan. Dengan mengambil keputusan finansial yang tepat dan mengendalikan pengeluarannya, Anda dapat mencapai tujuan finansial di akhir tahun.";
    } else if ((bulan == 1 && tanggal >= 20) || (bulan == 2 && tanggal <= 18)) {
        return "Anda adalah Aquarius, Aquarius dikenal sebagai orang yang kreatif dan penuh ide cemerlang. Hal ini dapat memacu perkembangan finansial dan karier secara signifikan di tahun 2024. Aquarius diramalkan akan sukses secara finansial jika mampu memanfaatkan seluruh potensi yang ada. Jadi, banyak-banyaklah mencari koneksi dan buatlah proyek kreatif.";
    } else if ((bulan == 2 && tanggal >= 19) || (bulan == 3 && tanggal <= 20)) {
        return "Anda adalah Pisces, Pisces dikenal sebagai orang yang intuitif dan kreatif. Berkat hal tersebut, di tahun 2024, Pisces bisa memperoleh kemakmuran dan kelancaran finansial. Namun hati-hati, Anda harus bisa mengatur pengeluaran dan menabung, khususnya di akhir tahun.";
    } else {
        return "Tanggal atau bulan tidak valid";
    }
}


main();