// jadi ini adalah komen

// 1.variabel dengan let
let nama = "Aprelia Dara Fani";


console.log(nama);

// kita ubah nilai variabel nama
nama = "Fani Dara Aprelia";
console.log(nama);

// 2. variabel dengan var
var namaDepan = "Aprelia";
console.log(namaDepan);
namaDepan = "Fani";
console.log(namaDepan);

// kelakuan dari var
let namaBelakang = "Dara";
{
    let namaBelakang = "April";
    console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakuan dari var
var namaTengah = "Zara";
{
    var namaTengah = "Fara";
    console.log(namaTengah);
}
console.log(namaTengah);

// kasus kasus tanpa keyword
makanan = "Pisang Goreng";
{
    makanan = "Bakwan";
}
console.log(makanan);

// 3. const

const TTL = "10 Maret 2022";
console.log(TTL);
