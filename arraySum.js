function simpleArraySum(ar) {
  let result = 0;
  ar.forEach((element) => {
    result += element;
  });
  return result;
}

console.log(simpleArraySum([1, 4, 40, 2, 4, 5, 6]));

/**
Penjelasan:
Fungsi ini bernama simpleArraySum dan menerima satu parameter ar, yang diharapkan berupa array angka.

let result = 0;

Variabel result diinisialisasi dengan nilai 0. Variabel ini akan digunakan untuk menyimpan jumlah total dari elemen-elemen dalam array.
Iterasi Melalui Array:

ar.forEach((element) => {
  result += element;
});

Metode forEach digunakan untuk mengiterasi setiap elemen dalam array ar. 
Untuk setiap elemen, nilai elemen tersebut ditambahkan ke result.
element adalah parameter dari fungsi callback yang mewakili elemen saat ini dalam iterasi.
result += element; menambahkan nilai element ke result.

return result;

Setelah semua elemen dalam array dijumlahkan, fungsi mengembalikan nilai result.
Memanggil Fungsi dan Menampilkan Hasil:

console.log(simpleArraySum([1, 4, 40, 2, 4, 5, 6]));

Fungsi simpleArraySum dipanggil dengan array [1, 4, 40, 2, 4, 5, 6] sebagai argumen. Hasil dari fungsi ini kemudian ditampilkan menggunakan console.log.

Output:
Ketika kode ini dijalankan, output yang dihasilkan adalah jumlah dari semua elemen dalam array, yaitu:
62

 */
