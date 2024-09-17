/**
 * Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Example

a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.
 */

function compareTriplets(a, b) {
  let pointAlice = 0;
  let pointBob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pointAlice++;
    } else if (a[i] < b[i]) {
      pointBob++;
    }
  }
  console.log(pointAlice, pointBob);
}

compareTriplets([19, 29, 69], [3, 5, 1]);

/**
 * Baik, mari kita jelaskan fungsi `compareTriplets` dengan cara yang sederhana, seperti bercerita kepada anak kecil.

Bayangkan kamu dan temanmu, Bob, sedang bermain permainan perbandingan angka. Kalian berdua memiliki tiga angka yang berbeda. Setiap kali angka kamu lebih besar dari angka Bob, kamu mendapatkan satu poin. Jika angka Bob lebih besar dari angka kamu, Bob mendapatkan satu poin. Jika angkanya sama, tidak ada yang mendapatkan poin.

Sekarang, mari kita lihat bagaimana permainan ini bekerja dalam kode:

1. **Mulai Permainan**:
   ```javascript
   function compareTriplets(a, b) {
   ```
   Kita mulai permainan dengan dua kelompok angka, satu untuk kamu (`a`) dan satu untuk Bob (`b`).

2. **Siapkan Skor**:
   ```javascript
   let pointAlice = 0;
   let pointBob = 0;
   ```
   Kita mulai dengan skor nol untuk kamu (`pointAlice`) dan Bob (`pointBob`).

3. **Bandingkan Angka**:
   ```javascript
   for (let i = 0; i < a.length; i++) {
     if (a[i] > b[i]) {
       pointAlice++;
     } else if (a[i] < b[i]) {
       pointBob++;
     }
   }
   ```
   Kita melihat setiap angka satu per satu:
   - Jika angka kamu lebih besar dari angka Bob, kamu mendapatkan satu poin.
   - Jika angka Bob lebih besar dari angka kamu, Bob mendapatkan satu poin.
   - Jika angkanya sama, tidak ada yang mendapatkan poin.

4. **Lihat Skor Akhir**:
   ```javascript
   console.log(pointAlice, pointBob);
   ```
   Setelah semua angka dibandingkan, kita melihat siapa yang mendapatkan lebih banyak poin.

### Contoh:
Misalkan kamu memiliki angka `[5, 6, 7]` dan Bob memiliki angka `[3, 6, 10]`.

- Angka pertama: `5` (kamu) vs `3` (Bob). Kamu menang, jadi skor kamu menjadi 1.
- Angka kedua: `6` (kamu) vs `6` (Bob). Seri, tidak ada yang mendapatkan poin.
- Angka ketiga: `7` (kamu) vs `10` (Bob). Bob menang, jadi skor Bob menjadi 1.

Jadi, skor akhirnya adalah 1 untuk kamu dan 1 untuk Bob.

Apakah penjelasan ini membantu? Ada yang ingin kamu tanyakan lagi? 😊
 */
