document.addEventListener('DOMContentLoaded', function () {
    // Retrieve leaderboard data from local storage
    let leaderboardData = localStorage.getItem('leaderboard');
    if (leaderboardData) {
        leaderboardData = JSON.parse(leaderboardData);

        // Sort leaderboard by score (descending order)
        leaderboardData.sort((a, b) => b.score - a.score);

        // Display leaderboard
        displayLeaderboard(leaderboardData);
    } else {
        // If no leaderboard data found, display message
        document.getElementById('leaderboard-body').innerHTML = '<tr><td colspan="3">No leaderboard data available.</td></tr>';
    }
});

function displayLeaderboard(leaderboardData) {
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = ''; // Clear previous data

    // Populate the leaderboard table with data
    leaderboardData.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.score}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}
