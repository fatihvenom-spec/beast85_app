// --- MOTİVASYON SÖZLERİ ---
const motivasyonSozleri = [
    "Bugün de pes etmedin, kral sensin!",
    "Azim, başarının diğer adıdır!",
    "Her gün %1 geliş, bir yılda canavar olursun!",
    "Kendini değil, pes etmeyi yor!",
    "Bugün de hedefe bir adım daha yaklaştın!",
    "Beast85 geliyor! Devam!",
    "Yorulabilirsin ama durmak yok!",
    "Küçük ilerleme de ilerlemedir!",
    "Hedef 0 beden — BEAST mod ON!"
];


// --- KALORİ / SU / ANTRENMAN KAYDETME ---
function saveData() {
    const calories = document.getElementById("calories").value;
    const water = document.getElementById("water").value;
    const workout = document.getElementById("workout").value;

    // Son değerleri kaydet
    localStorage.setItem("lastCalories", calories);
    localStorage.setItem("lastWater", water);
    localStorage.setItem("lastWorkout", workout);

    // Ekrana yaz
    document.getElementById("last-calories").innerText = "Kalori: " + calories;
    document.getElementById("last-water").innerText = "Su: " + water;
    document.getElementById("last-workout").innerText = "Antrenman: " + workout;

    // Kaydettikten sonra motivasyon sözü göster
    showMotivation();
}


// --- BUGÜNÜN TARİHİ ---
function showTodayDate() {
    const today = new Date();
    const gun = today.getDate().toString().padStart(2, "0");
    const ay = (today.getMonth() + 1).toString().padStart(2, "0");
    const yil = today.getFullYear();

    document.getElementById("today-date").innerText =
        `Tarih: ${gun}.${ay}.${yil}`;
}


// --- MOTİVASYON ÜRET ---
function showMotivation() {
    const rast = Math.floor(Math.random() * motivasyonSozleri.length);
    document.getElementById("motivation").innerText = motivasyonSozleri[rast];
}


// --- SAYFA AÇILDIĞINDA OTOMATİK YÜKLE ---
window.onload = function () {
    // Tarih + motivasyon
    showTodayDate();
    showMotivation();

    // Son kayıtları localStorage'dan çek
    document.getElementById("last-calories").innerText =
        "Kalori: " + (localStorage.getItem("lastCalories") || "-");

    document.getElementById("last-water").innerText =
        "Su: " + (localStorage.getItem("lastWater") || "-");

    document.getElementById("last-workout").innerText =
        "Antrenman: " + (localStorage.getItem("lastWorkout") || "-");
};
