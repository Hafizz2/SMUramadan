document.addEventListener("DOMContentLoaded", function () {
  // Example prayer times
  const prayerTimes = {
    fajr: "5:00 AM",
    dhuhr: "12:30 PM",
    asr: "3:45 PM",
    maghrib: "6:15 PM",
    isha: "8:00 PM",
  };

  // Update prayer times
  for (const [key, value] of Object.entries(prayerTimes)) {
    document.getElementById(`${key}-time`).textContent = value;
  }

  // Example Quran tracker action
  document.getElementById("quran-complete").addEventListener("click", () => {
    alert("Great! Keep going with Quran reading.");
  });
});
