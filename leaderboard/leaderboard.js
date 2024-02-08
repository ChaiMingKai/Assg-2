document.addEventListener('DOMContentLoaded', function () {
    // Retrieve leaderboard data from local storage
    let leaderboardData = localStorage.getItem('leaderboard');
    if (leaderboardData) {
        leaderboardData = JSON.parse(leaderboardData);

        // Sort leaderboard by score , high to low
        leaderboardData.sort((a, b) => b.score - a.score);

        // Display leaderboard
        displayLeaderboard(leaderboardData);
    } else {
        document.getElementById('leaderboard-body').innerHTML = '<tr><td colspan="3">No leaderboard data available.</td></tr>';
    }
});

function displayLeaderboard(leaderboardData) {
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = ''; 

//only 5 player will be shown
    const top5 = leaderboardData.slice(0, 5);


    top5.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.score}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

