const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'fitness')));

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitness', 'html', 'index.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitness', 'html', 'home.html'))
});

app.get('/bmi_calculator.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitness', 'html', 'bmi_calculator.html'));
});

app.get('/diet_planner.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitness', 'html', 'diet_planner.html'));
});

app.get('/progress_tracker.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitness', 'html', 'progress_tracker.html'));
});

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitness', 'html', 'home.html'));

});
app.get('/training_plan.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'fitness', 'html', 'training_plan.html'));
});

app.get('/calorie_calculator.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitness', 'html', 'calorie_calculator.html'));
});

app.get('/water_tracker.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitness', 'html', 'water_tracker.html'));
});

app.get('/team_management.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitness', 'html', 'team_management.html'));
});

app.get('/match_scheduler.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitness', 'html', 'match_scheduler.html'));
});

app.get('/player_performance.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'fitness', 'html', 'player_performance.html'));
});
     
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

