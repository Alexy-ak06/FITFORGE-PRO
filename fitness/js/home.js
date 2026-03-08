window.onload = function () {
    function animateCounter(id, target) {
        let element = document.getElementById(id);
        let count = 0;

        if (target === 0) {
            element.textContent = 0;
            return;
        }

        let interval = setInterval(() => {
            count++;
            element.textContent = count;

            if (count >= target) {
                clearInterval(interval);
            }
        }, 500);
    }

    let teams = JSON.parse(localStorage.getItem("teams")) || [];
    let matches = JSON.parse(localStorage.getItem("matches")) || [];
    let players = JSON.parse(localStorage.getItem("players")) || [];

    animateCounter("totalTeams", teams.length);
    animateCounter("totalMatches", matches.length);
    animateCounter("totalPlayers", players.length);
};
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});