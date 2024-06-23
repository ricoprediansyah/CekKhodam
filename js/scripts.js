// scripts.js

// Fungsi untuk menghasilkan hash dari string
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

// Fungsi untuk mendapatkan nilai acak berdasarkan seed
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateText() {
  const name = document.getElementById("nameInput").value.toLowerCase(); // Mengubah nama menjadi huruf kecil
  const actions = [
    "Singa Fashion",
    "Mobil Sabun",
    "Bola Dada",
    "Dewa Slot",
    "Gajah Terbang",
    "Bulu Diet",
    "Sendal Friendzone",
    "Jagung Mandi",
    "Bantal Terbang",
    "Stang Bengkok",
    "Telepon Merinding",
    "Gitar Jeruk",
    "Kampas Kopling",
    "kambing Digilir",
    "Burung Kejepit",
    "iler Susu",
    "Kipas Tidur",
    "Ketek Kuda",
    "Beat Karbu",
    "Gajah Duduk"
  ];
  
  // Menghasilkan hash dari nama
  const nameHash = hashString(name);
  // Menggunakan hash sebagai seed untuk menghasilkan indeks acak
  const randomIndex = Math.floor(seededRandom(nameHash) * actions.length);
  const randomAction = actions[randomIndex];
  const result = `<p>${name} ${randomAction}</p>`;

  document.getElementById("result").innerHTML = result;
}
