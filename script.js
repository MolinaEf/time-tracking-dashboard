const buttons = document.querySelectorAll('.toggle-btn');
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const dailyBtn = document.getElementById("daily-btn");
let timeframe = "";
let expression = "";


buttons.forEach(button => { 
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    })
})

function giveBackData(){

        data.forEach(activity => {
            console.log(activity.title);}

        )}
    

weeklyBtn.addEventListener("click", () => {
    timeframe = "weekly";
    expression = "Last Week"
    updateData();
})

dailyBtn.addEventListener("click", () => {
    timeframe = "daily";
    expression = "Yesterday"
    updateData();
})

monthlyBtn.addEventListener("click", () => {
    timeframe = "monthly";
    expression = "Last Month"
    updateData();
})

function updateData(){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(activity => {
        const id = activity.title.toLowerCase().replace(/\s+/g, '');
        const element = document.querySelector(`#${id} .current-time`);
        const element2 = document.querySelector(`#${id} .previous-time`);
        element.textContent = `${activity.timeframes[timeframe].current}hrs`;
        element2.textContent = `${expression} - ${activity.timeframes[timeframe].previous}hrs`;
})
})
}