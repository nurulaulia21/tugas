document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("form").addEventListener("submit", function(e){
        e.preventDefault();

        let form = e.target;

        let nama = form.nama.value;
        let alamat = form.alamat.value;
        let provinsi = form.Provinsi.value;
        let kota = form.kota.value;
        let kecamatan = form.kecamatan.value;
        let pekerjaan = form.pekerjaan.value;
        let tempat = form.tempat.value;
        let tanggal = form.tanggal.value;

        let jk = form.querySelector('input[name="jk"]:checked');
        jk = jk ? jk.value : "Tidak dipilih";

        let berkas = [];
        form.querySelectorAll('input[name="berkas"]:checked').forEach(function(item){
            berkas.push(item.value);
        });

        alert(
            "Nama: " + nama + "\n" +
            "Alamat: " + alamat + "\n" +
            "Provinsi: " + provinsi + "\n" +
            "Kota: " + kota + "\n" +
            "Kecamatan: " + kecamatan + "\n" +
            "Pekerjaan: " + pekerjaan + "\n" +
            "Jenis Kelamin: " + jk + "\n" +
            "Tempat Lahir: " + tempat + "\n" +
            "Tanggal Lahir: " + tanggal + "\n" +
            "Berkas: " + berkas.join(", ")
        );

    });

});