// Set current date
document.getElementById("currentDate").textContent =
  new Date().toLocaleDateString();

// Fetch prayer times using the Aladhan API
fetch(
  "https://api.aladhan.com/v1/timingsByCity?city=AddisAbaba&country=Ethiopia&method=2"
)
  .then((response) => response.json())
  .then((data) => {
    const prayerTimes = data.data.timings;
    const prayerTimesList = document.getElementById("prayerTimes");
    for (const [name, time] of Object.entries(prayerTimes)) {
      const listItem = document.createElement("li");
      listItem.textContent = `${name}: ${time}`;
      prayerTimesList.appendChild(listItem);
    }

    // Example data to represent prayer completion
    const completionData = [1, 5, 1, 10]; // Replace with actual data

    // Create pie chart for prayer completion
    const ctx = document
      .getElementById("prayerCompletionChart")
      .getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"],
        datasets: [
          {
            data: completionData,
            backgroundColor: [
              "#ff6384",
              "#36a2eb",
              "#ffce56",
              "#4bc0c0",
              "#9966ff",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  })
  .catch((error) => console.error("Error fetching prayer times:", error));
