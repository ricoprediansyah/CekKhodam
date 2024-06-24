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
    "Martabak Aniss",
    "Bola Dada",
    "Dewa Slot",
    "Gajah Terbang",
    "Bulu Diet",
    "Sendal Friendzone",
    "Jagung Mandi",
    "Galon Langsing",
    "Stang Bengkok",
    "Keringat H min",
    "Tisu Bakar",
    "Gatot Kacang",
    "Satpam Ngaji",
    "Ikan Cipung",
    "Kadal Jamaica",
    "Coca Copling",
    "Kunti Perawan",
    "Dewa 900",
    "Kampas Kopling",
    "kambing Digilir",
    "Gigi Metik",
    "Burung Kejepit",
    "iler Susu",
    "Juk Jerus",
    "Kipas Tidur",
    "Galon Langsing",
    "Metal Lisa",
    "Karni illiass",
    "Penyu Kuntet",
    "Sperpat Tirek",
    "Ketek Kuda",
    "Kripik Semut",
    "Kutil Naga",
    "Beat Karbu",
    "Cicak Sang*",
    "Chef Junaa",
    "Jeruk Perut",
    "Sop Kakiseribu",
    "Mie Sukses",
    "Gajah Duduk",
    "Kimia Farming",
    "Kulkas Jamping",
  ];
  
  // Menghasilkan hash dari nama
  const nameHash = hashString(name);
  // Menggunakan hash sebagai seed untuk menghasilkan indeks acak
  const randomIndex = Math.floor(seededRandom(nameHash) * actions.length);
  const randomAction = actions[randomIndex];
  const result = `<p>${name} ${randomAction}</p>`;

  document.getElementById("result").innerHTML = result;
}
