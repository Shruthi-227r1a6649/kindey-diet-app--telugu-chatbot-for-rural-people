
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('appointmentButton').addEventListener('click', function() {
        window.location.href = 'app.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('appointmentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert("మీ అపాయింట్మెంట్ బుక్ చేయబడింది!");
    });
});
